<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { storeToRefs } from 'pinia'
import P3xrButton from '../../components/P3xrButton.vue'
import AiCheatsheetDialog from '../../dialogs/AiCheatsheetDialog.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { useCommonStore } from '../../stores/common'
import { useThemeStore } from '../../stores/theme'
import { useMainCommandStore } from '../../stores/main-command'
import { request } from '../../stores/socket.service'
import { consoleParse } from '../../stores/redis-parser'

const props = withDefaults(defineProps<{
    embedded?: boolean
    collapsed?: boolean
    showCloseButton?: boolean
}>(), {
    embedded: false,
    collapsed: false,
    showCloseButton: false,
})
const emit = defineEmits<{ (e: 'closeRequest'): void }>()

const i18n = useI18nStore()
const state = useRedisStateStore()
const common = useCommonStore()
const cmd = useMainCommandStore()
const { themeKey } = storeToRefs(useThemeStore())

const strings = computed(() => i18n.strings)
const aiEnabled = computed(() => state.cfg?.aiEnabled !== false)

// --- State ---
const searchText = ref('')
const currentHint = ref('')
const aiLoading = ref(false)
let aiRequestSeq = 0
const aiAutoDetect = ref((() => {
    try { return localStorage.getItem('p3xr-ai-auto-detect') !== 'false' } catch { return true }
})())
const autocompleteHighlight = ref(0)
const autocompleteDismissed = ref(false)

// --- Refs ---
const outputEl = ref<HTMLDivElement>()
const scrollerEl = ref<HTMLDivElement>()
const inputEl = ref<HTMLTextAreaElement>()
let indexCounter = 0
let singleLineHeight = 0
let aiCommandPending = false

const CONSOLE_OUTPUT_KEY = 'p3xr-console-output-v1'
const CONSOLE_OUTPUT_MAX = 10 * 1024 * 1024

// Unified with DatabaseHeader — same accordion color for toolbar across the app
const ACCORDION_BG: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const ACCORDION_COLOR: Record<string, string> = {
    enterprise: 'rgba(0,0,0,0.87)', light: 'rgba(0,0,0,0.87)', redis: 'rgba(0,0,0,0.87)',
    dark: 'rgba(0,0,0,0.87)', darkNeu: 'rgba(0,0,0,0.87)', darkoBluo: '#fff',
    matrix: 'rgba(0,0,0,0.87)',
}
const INPUT_BG: Record<string, string> = {
    enterprise: 'white', light: 'white', redis: 'white',
    dark: 'rgba(64,64,64,1)', darkNeu: 'rgba(64,64,64,1)', darkoBluo: 'rgba(64,64,64,1)',
    matrix: 'rgba(64,64,64,1)',
}
const INPUT_COLOR: Record<string, string> = {
    enterprise: 'black', light: 'black', redis: 'black',
    dark: 'white', darkNeu: 'white', darkoBluo: 'white',
    matrix: 'white',
}
const INPUT_BORDER: Record<string, string> = {
    enterprise: '#9e9e9e', light: '#b0bec5', redis: '#ef9a9a',
    dark: '#9e9e9e', darkNeu: '#90a4ae', darkoBluo: '#3f51b5',
    matrix: '#76ff03',
}
const toolbarBg = computed(() => ACCORDION_BG[themeKey.value])
const toolbarColor = computed(() => ACCORDION_COLOR[themeKey.value])
const inputBg = computed(() => INPUT_BG[themeKey.value])
const inputColor = computed(() => INPUT_COLOR[themeKey.value])
const inputBorder = computed(() => INPUT_BORDER[themeKey.value])

// --- HTML encoding ---
function htmlEncode(str: string): string {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

// --- Autocomplete ---
const filteredCommands = computed(() => {
    if (!searchText.value || !state.commands?.length) return []
    const text = searchText.value.toUpperCase()
    const matched = state.commands
        .filter((c: string) => c.toUpperCase().includes(text))
        .slice(0, 20)
    const groups = new Map<string, { name: string; syntax: string }[]>()
    for (const c of matched) {
        const info = state.commandsMeta?.[c.toUpperCase()]
        const group = info?.group
        const syntax = info?.syntax
        if (!groups.has(group)) groups.set(group, [])
        groups.get(group)!.push({ name: c, syntax })
    }
    return Array.from(groups.entries()).map(([group, cmds]) => ({ group, commands: cmds }))
})

const flatOptions = computed(() => {
    const result: { name: string; syntax: string }[] = []
    for (const g of filteredCommands.value) result.push(...g.commands)
    return result
})

const showAutocomplete = computed(() =>
    filteredCommands.value.length > 0 && !autocompleteDismissed.value && searchText.value.length > 0
)

function selectAutocomplete(cmdName: string) {
    searchText.value = cmdName + ' '
    autocompleteDismissed.value = true
    // Update hint with syntax
    const meta = state.commandsMeta?.[cmdName.toUpperCase()]
    if (meta?.syntax) {
        currentHint.value = cmdName.toUpperCase() + ' ' + meta.syntax
    }
    nextTick(() => { inputEl.value?.focus(); autoResize() })
}

// --- Output management ---
function getByteSize(v: string): number {
    try { return new Blob([v || '']).size } catch { return (v || '').length }
}

function dropOldest(): boolean {
    const el = outputEl.value
    if (!el) return false
    const items = el.querySelectorAll('.p3xr-console-content-output-item')
    if (items.length < 1) return false
    const count = Math.max(Math.floor(items.length * 0.1), 1)
    for (let i = 0; i < count; i++) items[i].remove()
    return true
}

function trimOutput() {
    const el = outputEl.value
    if (!el) return
    while (getByteSize(el.innerHTML) > CONSOLE_OUTPUT_MAX) {
        if (!dropOldest()) break
    }
}

let persistTimer: any = null
function persistNow() {
    const el = outputEl.value
    if (!el) return
    trimOutput()
    try { localStorage.setItem(CONSOLE_OUTPUT_KEY, el.innerHTML || '') }
    catch { try { localStorage.removeItem(CONSOLE_OUTPUT_KEY) } catch {} }
}

function persistDebounced() {
    clearTimeout(persistTimer)
    persistTimer = setTimeout(persistNow, 100)
}

function scrollToBottom() {
    setTimeout(() => {
        const s = scrollerEl.value
        if (!s) return
        if (s.scrollHeight - s.scrollTop - s.clientHeight < 100) {
            s.scrollTop = s.scrollHeight
        }
    }, 0)
}

function forceScrollToBottom() {
    // Double rAF + late setTimeout — survives late <pre> layout / large tool-trail renders.
    const doScroll = () => {
        const s = scrollerEl.value
        if (s) s.scrollTop = s.scrollHeight
    }
    requestAnimationFrame(() => requestAnimationFrame(doScroll))
    setTimeout(doScroll, 120)
}

function outputAppend(message: string) {
    const el = outputEl.value
    if (!el) return
    const stripped = message.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/g, '').trim()
    if (!stripped) return
    el.insertAdjacentHTML('beforeend',
        `<span data-index="${indexCounter++}" class="p3xr-console-content-output-item">${message}<br/></span>`)
    trimOutput()
    persistDebounced()
    scrollToBottom()
}

// --- Textarea auto-resize ---
function autoResize() {
    const el = inputEl.value
    if (!el) return
    if (!singleLineHeight) singleLineHeight = el.offsetHeight
    const focused = document.activeElement === el
    if (!focused && (el.value || '').includes('\n')) {
        el.style.height = singleLineHeight + 'px'
        el.style.overflowY = 'hidden'
        return
    }
    el.style.height = singleLineHeight + 'px'
    el.style.overflowY = 'hidden'
    if ((el.value || '').includes('\n') && el.scrollHeight > el.clientHeight) {
        const max = singleLineHeight * 3
        const border = el.offsetHeight - el.clientHeight
        const needed = el.scrollHeight + border
        if (needed > max) {
            el.style.height = max + 'px'
            el.style.overflowY = 'auto'
        } else {
            el.style.height = needed + 'px'
        }
    }
}

// --- History ---
let actionHistoryPosition = -1

function getHistory(): string[] {
    try { return JSON.parse(localStorage.getItem('console-history') || '[]') } catch { return [] }
}

function updateHistory(entry: string) {
    let h = getHistory()
    const idx = h.indexOf(entry)
    if (idx > -1) h.splice(idx, 1)
    h.unshift(entry)
    if (h.length > 20) h = h.slice(0, 20)
    try { localStorage.setItem('console-history', JSON.stringify(h)) } catch {}
    actionHistoryPosition = -1
}

// --- AI auto-detect ---
function looksLikeNaturalLanguage(input: string, errorMsg: string): boolean {
    if (!/unknown command|wrong number of arguments|ERR unknown/i.test(errorMsg)) return false
    const firstWord = input.trim().split(/\s+/)[0].toUpperCase()
    if (state.commands?.includes(firstWord)) return false
    return true
}

// --- AI query ---
async function executeAiQuery(prompt: string, originalInput: string): Promise<boolean> {
    if (!prompt) return false
    const mySeq = ++aiRequestSeq
    aiLoading.value = true
    try {
        const info = state.info || {}
        const server = info.server || {}
        const clients = info.clients || {}
        const memory = info.memory || {}
        const keyspace = info.keyspace || {}
        const modules = state.modules || []

        const ctx: any = {}
        if (server.redis_version) ctx.redisVersion = server.redis_version
        if (server.redis_mode) ctx.redisMode = server.redis_mode
        if (server.os) ctx.os = server.os
        if (clients.connected_clients) ctx.connectedClients = clients.connected_clients
        if (memory.used_memory_human) ctx.usedMemory = memory.used_memory_human
        const dbKeys = Object.keys(keyspace).filter((k: string) => /^db\d+$/.test(k))
        if (dbKeys.length > 0) ctx.databases = dbKeys.map((k: string) => `${k}: ${keyspace[k]}`)
        if (modules.length > 0) ctx.modules = modules
        ctx.uiLanguage = i18n.currentLang
        ctx.connectionState = state.connectionState
        ctx.currentPage = state.currentPage
        if (state.connection?.name) ctx.connectionName = state.connection.name
        if (state.currentDatabase !== undefined) ctx.currentDatabase = state.currentDatabase

        const response = await request({ action: 'ai/redis-query', payload: { prompt, context: ctx } })
        if (mySeq !== aiRequestSeq) return false
        const command = response.command || ''
        const explanation = response.explanation || ''
        const toolTrail = Array.isArray(response.toolTrail) ? response.toolTrail : []

        // Print each tool call + outcome to the scrollback (transparency).
        for (const t of toolTrail) {
            const argsStr = t.args && Object.keys(t.args).length
                ? '(' + Object.entries(t.args).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(', ') + ')'
                : '()'
            const head = `<span style="opacity: 0.85;"><strong>tool:</strong> <code>${htmlEncode(t.name + argsStr)}</code> <span style="opacity: 0.6;">${t.ms ?? 0}ms</span></span>`
            if (t.ok) {
                const preview = String(t.result ?? '').split('\n').slice(0, 12).join('\n')
                outputAppend(`${head}<br/><pre style="opacity: 0.85; margin: 2px 0 6px 0;">${htmlEncode(preview)}</pre>`)
            } else {
                outputAppend(`${head}<br/><span style="color: rgb(var(--v-theme-error));">${htmlEncode(t.error || 'tool error')}</span>`)
            }
        }

        // Tool-use investigations return the command as a suggestion — do NOT
        // auto-prefill the input. Pure translation path (no tools) prefills.
        const usedTools = toolTrail.length > 0

        if (command) {
            let line = `<strong><span style="color: rgb(var(--v-theme-primary));">AI &rarr;</span></strong> <code>${htmlEncode(command)}</code>`
            if (explanation) line += `<pre>${htmlEncode(explanation)}</pre>`
            outputAppend(line)
            if (!usedTools) {
                searchText.value = command
                currentHint.value = ''
                aiCommandPending = true
                nextTick(() => autoResize())
            }
        } else if (explanation) {
            outputAppend(`<pre>${htmlEncode(explanation)}</pre>`)
        }
        return true
    } catch (e: any) {
        if (mySeq !== aiRequestSeq) return false
        outputAppend(`<span style="color: rgb(var(--v-theme-error));">AI error: ${htmlEncode(e?.message || String(e))}</span>`)
        return false
    } finally {
        if (mySeq === aiRequestSeq) {
            aiLoading.value = false
        }
    }
}

function stopAi() {
    aiRequestSeq++
    aiLoading.value = false
    searchText.value = ''
    currentHint.value = ''
    nextTick(() => {
        autoResize()
        ;(inputEl.value as any)?.focus?.()
    })
}

// --- Command execution ---
async function executeCommand() {
    const enter = searchText.value.trim()
    if (!enter) return

    searchText.value = ''
    currentHint.value = ''
    autocompleteDismissed.value = true
    nextTick(() => autoResize())

    // AI prefix
    if (/^ai:\s*/i.test(enter)) {
        const prompt = enter.replace(/^ai:\s*/i, '').trim()
        outputAppend(`<strong>${htmlEncode(enter)}</strong>`)
        updateHistory(enter)
        await executeAiQuery(prompt, enter)
        forceScrollToBottom()
        return
    }

    // AI command pending (user reviewing AI suggestion — execute it)
    if (aiCommandPending) {
        aiCommandPending = false
    }

    updateHistory(enter)

    try {
        const response = await request({
            action: 'redis/console',
            payload: { command: enter },
        })
        const result = htmlEncode(String(consoleParse(response.result)))
        // Combine command + result in a single span so the "> " ::before prefix
        // only renders once (same pattern as Angular and React).
        outputAppend(`<strong>${htmlEncode(enter)}</strong><br/><pre>${result}</pre>`)

        // Refresh after write commands
        if (props.embedded) {
            cmd.refresh({ withoutParent: true })
        }
    } catch (e: any) {
        const errorMsg = e?.message || String(e)

        // AI auto-detect: try AI first, suppress error if AI succeeds
        if (aiEnabled.value && aiAutoDetect.value && looksLikeNaturalLanguage(enter, errorMsg)) {
            outputAppend(`<strong>${htmlEncode(enter)}</strong>`)
            const aiSuccess = await executeAiQuery(enter, enter)
            if (aiSuccess) return
        }

        outputAppend(`<strong>${htmlEncode(enter)}</strong><br/><pre style="color: rgb(var(--v-theme-error));">${htmlEncode(errorMsg)}</pre>`)
    }

    forceScrollToBottom()
}

// --- Keyboard handling ---
function onKeyDown(e: KeyboardEvent) {
    // Tab: select autocomplete item into input
    if (e.key === 'Tab' && showAutocomplete.value) {
        e.preventDefault()
        const opt = flatOptions.value[autocompleteHighlight.value]
        if (opt) selectAutocomplete(opt.name)
        return
    }

    // Escape: dismiss autocomplete
    if (e.key === 'Escape') {
        autocompleteDismissed.value = true
        return
    }

    // Enter (no Shift):
    //   - If autocomplete open → fill input with selected item, close autocomplete, DON'T execute
    //   - If autocomplete closed → execute command
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault()
        if (showAutocomplete.value) {
            const opt = flatOptions.value[autocompleteHighlight.value]
            if (opt) selectAutocomplete(opt.name)
        } else {
            executeCommand()
        }
        return
    }

    // Arrow Up/Down without Shift: navigate autocomplete
    if (!e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown') && showAutocomplete.value) {
        e.preventDefault()
        const len = flatOptions.value.length
        if (!len) return
        autocompleteHighlight.value = e.key === 'ArrowDown'
            ? (autocompleteHighlight.value + 1) % len
            : (autocompleteHighlight.value - 1 + len) % len
        // Scroll highlighted item into view
        nextTick(() => {
            const dropdown = document.querySelector('.p3xr-console-autocomplete-dropdown')
            const highlighted = dropdown?.querySelector('.p3xr-console-ac-highlight')
            highlighted?.scrollIntoView({ block: 'nearest' })
        })
        return
    }

    // Shift+Arrow Up/Down: history navigation
    if (e.shiftKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
        e.preventDefault()
        const history = getHistory()
        if (history.length === 0) return
        if (e.key === 'ArrowDown') {
            if (actionHistoryPosition === -1) actionHistoryPosition = history.length
            actionHistoryPosition--
            if (actionHistoryPosition < 0) actionHistoryPosition = history.length - 1
        } else {
            actionHistoryPosition++
            if (actionHistoryPosition >= history.length) actionHistoryPosition = 0
        }
        searchText.value = history[actionHistoryPosition] ?? ''
        nextTick(() => autoResize())
    }
}

// --- Input change watcher ---
watch(searchText, (value) => {
    autocompleteDismissed.value = false
    autocompleteHighlight.value = 0
    const firstWord = (value || '').trim().split(/\s+/)[0]?.toUpperCase()
    if (firstWord && state.commandsMeta?.[firstWord]?.syntax) {
        currentHint.value = firstWord + ' ' + state.commandsMeta[firstWord].syntax
    } else {
        currentHint.value = ''
    }
    nextTick(() => autoResize())
})

// --- Clear ---
function clearConsole() {
    const el = outputEl.value
    if (!el) return
    el.innerHTML = ''
    const welcome = strings.value?.label?.welcomeConsole ?? 'Welcome to the Redis Console'
    const info = strings.value?.label?.welcomeConsoleInfo ?? 'Shift + Cursor UP or DOWN for history'
    outputAppend(`<strong>${welcome}</strong>`)
    outputAppend(`${info}`)
    el.insertAdjacentHTML('beforeend', '<div class="p3xr-console-spacer">&nbsp;</div>')
    persistNow()
    forceScrollToBottom()
    inputEl.value?.focus()
}

function toggleAiAutoDetect() {
    aiAutoDetect.value = !aiAutoDetect.value
    try { localStorage.setItem('p3xr-ai-auto-detect', String(aiAutoDetect.value)) } catch {}
}

const cheatsheetOpen = ref(false)
function openCommands() {
    cheatsheetOpen.value = true
}
function onCheatsheetPick(prompt: string) {
    searchText.value = prompt
    currentHint.value = ''
    nextTick(() => autoResize())
    inputEl.value?.focus()
}

// --- Focus/blur for auto-resize ---
function onInputFocus() { nextTick(() => autoResize()) }
function onInputBlur() { nextTick(() => autoResize()) }
function onInputPaste() { nextTick(() => autoResize()) }

// --- Init ---
onMounted(() => {
    const el = outputEl.value
    if (!el) return
    let stored = ''
    try { stored = localStorage.getItem(CONSOLE_OUTPUT_KEY) || '' } catch {}
    if (stored) {
        el.innerHTML = stored
        trimOutput()
        persistNow()
        const items = el.querySelectorAll('.p3xr-console-content-output-item')
        const last = items.length > 0 ? items[items.length - 1] : null
        if (last) {
            const idx = Number(last.getAttribute('data-index'))
            if (Number.isFinite(idx)) indexCounter = idx + 1
        }
        forceScrollToBottom()
    } else {
        el.innerHTML = ''
        const welcome = strings.value?.label?.welcomeConsole ?? 'Welcome to the Redis Console'
        const info = strings.value?.label?.welcomeConsoleInfo ?? 'Shift + Cursor UP or DOWN for history'
        outputAppend(`<strong>${welcome}</strong>`)
        outputAppend(`${info}`)
        el.insertAdjacentHTML('beforeend', '<div class="p3xr-console-spacer">&nbsp;</div>')
        persistNow()
    }
})
</script>

<template>
    <div class="p3xr-console-root" :class="{ 'p3xr-console-embedded': embedded }">
        <!-- Header toolbar -->
        <div class="p3xr-console-header" :style="{ backgroundColor: toolbarBg, color: toolbarColor }">
            <div class="p3xr-console-header-inner">
                <v-icon size="20" style="margin-right: 6px; color: inherit;">mdi-console</v-icon>
                <span class="p3xr-console-title">{{ strings?.label?.console }}</span>
                <span style="flex: 1 1 auto;" />
                <div class="p3xr-console-toolbar-actions">
                    <!-- AI auto-detect toggle -->
                    <div v-if="aiEnabled" class="p3xr-console-ai-toggle" @click.stop="toggleAiAutoDetect()">
                        <v-icon size="20">{{ aiAutoDetect ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}</v-icon>
                        <span>Auto AI</span>
                    </div>
                    <!-- Redis Commands -->
                    <P3xrButton
                        @click="openCommands(); $event.stopPropagation()"
                        :label="strings?.label?.redisCommandsReference"
                        icon="mdi-book-open-page-variant"
                    />
                    <!-- Clear -->
                    <P3xrButton
                        @click="clearConsole(); $event.stopPropagation()"
                        :label="strings?.intention?.clear"
                        icon="mdi-backspace"
                    />
                    <!-- Close (drawer host only) -->
                    <v-tooltip v-if="showCloseButton"
                               :text="strings?.label?.consoleDrawer?.closeTooltip ?? strings?.intention?.close ?? ''"
                               location="top">
                        <template #activator="{ props: tp }">
                            <v-btn v-bind="tp" variant="text" icon
                                   :aria-label="strings?.label?.consoleDrawer?.closeTooltip ?? strings?.intention?.close ?? ''"
                                   @click.stop="emit('closeRequest')">
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                </div>
            </div>
        </div>

        <!-- Output area -->
        <div v-show="!collapsed" ref="scrollerEl" class="p3xr-console-output-scroller">
            <div id="p3xr-console-content-output" ref="outputEl" class="p3xr-console-output"></div>
        </div>

        <!-- Input area with floating autocomplete above -->
        <div class="p3xr-console-input-area">
            <!-- Autocomplete dropdown (floats above input) -->
            <div v-if="showAutocomplete && !collapsed" class="p3xr-console-autocomplete-dropdown">
                <template v-for="(group, gi) in filteredCommands" :key="gi">
                    <div class="p3xr-console-ac-group">{{ group.group }}</div>
                    <div
                        v-for="opt in group.commands"
                        :key="opt.name"
                        class="p3xr-console-ac-item"
                        :class="{ 'p3xr-console-ac-highlight': flatOptions.indexOf(opt) === autocompleteHighlight }"
                        @mousedown.prevent="selectAutocomplete(opt.name)"
                    >
                        <span class="p3xr-console-ac-cmd">{{ opt.name }}</span>
                        <span v-if="opt.syntax" class="p3xr-console-ac-syntax">{{ opt.syntax }}</span>
                    </div>
                </template>
            </div>
            <div v-if="currentHint && !collapsed" class="p3xr-console-hint">{{ currentHint }}</div>
            <textarea
                id="p3xr-console-input"
                ref="inputEl"
                v-model="searchText"
                class="p3xr-console-input"
                :class="{ 'p3xr-console-input-ai-loading': aiLoading }"
                :placeholder="aiLoading ? strings?.label?.aiTranslating : ''"
                :readonly="aiLoading"
                rows="1"
                autocomplete="off"
                :style="{
                    backgroundColor: inputBg,
                    color: inputColor,
                    borderColor: aiLoading ? 'rgb(var(--v-theme-primary))' : inputBorder,
                    paddingRight: aiLoading ? '40px' : undefined,
                }"
                @keydown="onKeyDown"
                @focus="onInputFocus"
                @blur="onInputBlur"
                @paste="onInputPaste"
            />
            <button v-if="aiLoading" type="button" class="p3xr-console-stop" @click="stopAi">
                <v-tooltip activator="parent" location="top">
                    {{ strings?.intention?.cancel }}
                </v-tooltip>
                <v-icon>mdi-stop-circle</v-icon>
            </button>
        </div>

        <!-- AI Cheatsheet — opens via the toolbar "Redis Commands" button. -->
        <AiCheatsheetDialog
            :open="cheatsheetOpen"
            @close="cheatsheetOpen = false"
            @pick="onCheatsheetPick"
        />
    </div>
</template>

<style scoped>
.p3xr-console-root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.p3xr-console-header {
    height: 48px;
    min-height: 48px;
    max-height: 48px;
    flex-shrink: 0;
    z-index: 2;
}

.p3xr-console-header-inner {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 3px;
    box-sizing: border-box;
}

.p3xr-console-title {
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p3xr-console-toolbar-actions {
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
}

.p3xr-console-ai-toggle {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    cursor: pointer;
    margin: 0 8px;
    padding: 0 8px;
    height: 36px;
    font-size: 13px;
    letter-spacing: 0.1px;
    text-transform: uppercase;
    border-radius: 4px;
    color: inherit;
    user-select: none;
    white-space: nowrap;
    flex-shrink: 0;
}
.p3xr-console-ai-toggle:hover {
    background-color: rgba(0,0,0,0.08);
}

.p3xr-console-output-scroller {
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overflow-x: hidden;
    font-family: 'Roboto Mono', monospace;
    text-align: center;
    padding: 0 4px;
}

.p3xr-console-output {
    text-align: left;
    overflow: auto;
    flex-grow: 1;
    min-width: calc(100% - 20px);
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    word-break: break-all;
    white-space: pre-wrap;
}

/* Autocomplete dropdown — floats above input like Angular mat-autocomplete position="above" */
.p3xr-console-autocomplete-dropdown {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    max-height: 350px;
    overflow-y: auto;
    font-family: 'Roboto Mono', monospace;
    font-size: 13px;
    background-color: rgb(var(--v-theme-surface));
    border: 1px solid rgba(var(--v-border-color), 0.12);
    border-radius: 4px 4px 0 0;
    box-shadow: 0 -4px 8px rgba(0,0,0,0.2);
    z-index: 10;
}

.p3xr-console-ac-group {
    padding: 4px 12px 2px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    opacity: 0.5;
}

.p3xr-console-ac-item {
    padding: 4px 12px;
    cursor: pointer;
    display: flex;
    gap: 8px;
    align-items: baseline;
}
.p3xr-console-ac-item:hover,
.p3xr-console-ac-highlight {
    background-color: rgba(var(--v-theme-on-surface), 0.08);
}

.p3xr-console-ac-cmd {
    font-weight: bold;
    margin-right: 8px;
}

.p3xr-console-ac-syntax {
    opacity: 0.5;
    font-size: 11px;
}

/* Input area — matches Angular #p3xr-console-autocomplete */
.p3xr-console-input-area {
    position: relative;
    width: 100%;
    flex-shrink: 0;
}

.p3xr-console-input-area .p3xr-console-input {
    width: 100%;
    min-width: 0;
}

.p3xr-console-input-ai-loading {
    opacity: 0.55;
    cursor: not-allowed !important;
}

.p3xr-console-stop {
    position: absolute;
    top: 50%;
    right: 6px;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    padding: 2px;
    margin: 0;
    cursor: pointer;
    color: rgb(var(--v-theme-primary));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    line-height: 1;
}
.p3xr-console-stop:hover {
    opacity: 0.8;
}
.p3xr-console-stop :deep(.v-icon) {
    color: rgb(var(--v-theme-primary)) !important;
    font-size: 24px;
    width: 24px;
    height: 24px;
}

.p3xr-console-hint {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    opacity: 0.4;
    padding: 0 6px 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.p3xr-console-input {
    display: block;
    width: 100%;
    font-family: 'Roboto Mono', monospace;
    font-size: 14px;
    border-style: solid;
    border-width: 3px;
    padding: 3px;
    margin: 0;
    outline: none;
    resize: none;
    overflow-y: hidden;
    max-height: 90px;
    box-sizing: border-box;
}
</style>

<style>
/* Console toolbar buttons: unified with accordion pattern */
.p3xr-console-header .v-btn {
    color: inherit !important;
    letter-spacing: 0.1px !important;
    text-transform: uppercase !important;
    height: 36px !important;
    min-height: 36px !important;
    min-width: auto !important;
    padding: 0 8px !important;
    margin: 0 8px !important;
    display: inline-flex !important;
    align-items: center !important;
}
.p3xr-console-header .v-btn .v-btn__content {
    gap: 2px;
}
.p3xr-console-header .v-btn .v-icon {
    color: inherit !important;
}
.p3xr-console-header .v-btn .v-btn__overlay {
    opacity: 0 !important;
}
.p3xr-console-header .v-btn:hover .v-btn__overlay {
    opacity: 0.08 !important;
}

/* Output pre elements */
.p3xr-console-output pre {
    font-family: 'Roboto Mono', monospace;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-wrap: anywhere;
    /* Top margin creates a blank line between "> keys *" and the result;
       bottom margin creates the gap before the next prompt. Matches Angular's
       default browser pre margin. */
    margin: 1em 0;
}
.p3xr-console-content-output-item:before {
    content: "> ";
    opacity: 0.5;
}
</style>
