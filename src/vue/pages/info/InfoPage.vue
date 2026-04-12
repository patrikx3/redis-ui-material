<script setup lang="ts">
import { computed } from 'vue'
import P3xrAccordion from '../../components/P3xrAccordion.vue'
import { useI18nStore } from '../../stores/i18n'
import { useRedisStateStore } from '../../stores/redis-state'
import { isShortcutsEnabled, getShortcutsWithDescriptions } from '../../stores/shortcuts'

const i18n = useI18nStore()
const state = useRedisStateStore()

const strings = computed(() => i18n.strings)
const isElectron = isShortcutsEnabled()
const shortcutsList = computed(() => getShortcutsWithDescriptions())

const isConnected = computed(() => !!state.connection)
const redisVersion = computed(() => state.info?.server?.redis_version || '-')
const moduleNames = computed(() => (state.modules || []).map((m: any) => m.name))

const languageList = computed(() => {
    const langObj = strings.value?.language || {}
    return Object.keys(langObj).sort().map(code => ({ code, name: langObj[code] }))
})
</script>

<template>
    <div style="padding-bottom: 8px;">
        <!-- Keyboard Shortcuts (Electron only) -->
        <template v-if="isElectron">
            <P3xrAccordion :title="strings?.label?.keyboardShortcuts || 'Keyboard Shortcuts'" accordion-key="info-shortcuts">
                <v-list density="compact" class="pa-0">
                    <template v-for="s in shortcutsList" :key="s.key">
                        <v-list-item>
                            <div class="p3xr-info-row">
                                <div class="p3xr-info-label">
                                    <kbd class="p3xr-info-kbd">{{ s.key }}</kbd>
                                </div>
                                <div class="p3xr-info-value">{{ s.description }}</div>
                            </div>
                        </v-list-item>
                        <v-divider />
                    </template>
                </v-list>
            </P3xrAccordion>
            <br />
        </template>

        <!-- About -->
        <P3xrAccordion :title="strings?.label?.about || 'About'" accordion-key="info-about">
            <v-list density="compact" class="pa-0">
                <v-list-item>
                    <div class="p3xr-info-row">
                        <div class="p3xr-info-label">{{ strings?.label?.version || 'Version' }}</div>
                        <div class="p3xr-info-value">{{ state.version }}</div>
                    </div>
                </v-list-item>
                <v-divider />

                <template v-if="isConnected">
                    <v-list-item>
                        <div class="p3xr-info-row">
                            <div class="p3xr-info-label">{{ strings?.label?.redisVersion || 'Redis Version' }}</div>
                            <div class="p3xr-info-value">{{ redisVersion }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>

                <template v-if="isConnected && moduleNames.length > 0">
                    <v-list-item>
                        <div class="p3xr-info-row">
                            <div class="p3xr-info-label">{{ strings?.label?.modules || 'Modules' }}</div>
                            <div class="p3xr-info-value">{{ moduleNames.join(', ') }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>

                <v-list-item>
                    <div class="p3xr-info-row">
                        <div class="p3xr-info-label">GitHub</div>
                        <div class="p3xr-info-value">
                            <a href="https://github.com/patrikx3/redis-ui" target="_blank" rel="noreferrer" style="color: inherit;">patrikx3/redis-ui</a>
                        </div>
                    </div>
                </v-list-item>
                <v-divider />

                <v-list-item>
                    <div class="p3xr-info-row">
                        <div class="p3xr-info-label">{{ strings?.title?.donate || 'Donate' }}</div>
                        <div class="p3xr-info-value">
                            <a href="https://www.paypal.me/patrikx3" target="_blank" rel="noreferrer" style="color: inherit;">PayPal</a>
                        </div>
                    </div>
                </v-list-item>
                <v-divider />

                <v-list-item>
                    <div class="p3xr-info-row">
                        <div class="p3xr-info-label">{{ strings?.intention?.githubChangelog || 'Changelog' }}</div>
                        <div class="p3xr-info-value">
                            <a href="https://github.com/patrikx3/redis-ui/blob/master/change-log.md#change-log" target="_blank" rel="noreferrer" style="color: inherit;">change-log.md</a>
                        </div>
                    </div>
                </v-list-item>
                <v-divider />
            </v-list>
        </P3xrAccordion>
        <br />

        <!-- Supported Languages -->
        <P3xrAccordion :title="`${strings?.label?.supportedLanguages || 'Supported Languages'} (${languageList.length})`" accordion-key="info-languages">
            <v-list density="compact" class="pa-0">
                <template v-for="lang in languageList" :key="lang.code">
                    <v-list-item>
                        <div class="p3xr-info-row">
                            <div class="p3xr-info-label">
                                <kbd class="p3xr-info-lang-kbd">{{ lang.code }}</kbd>
                            </div>
                            <div class="p3xr-info-value">{{ lang.name }}</div>
                        </div>
                    </v-list-item>
                    <v-divider />
                </template>
            </v-list>
        </P3xrAccordion>
    </div>
</template>

<style scoped>
.p3xr-info-row {
    display: flex;
    width: 100%;
    gap: 16px;
    align-items: center;
}
.p3xr-info-label {
    flex: 1 1 auto;
    min-width: 0;
    font-weight: 700;
}
.p3xr-info-value {
    flex: 0 1 60%;
    min-width: 0;
    text-align: right;
}
.p3xr-info-kbd {
    font-family: 'Roboto Mono', monospace;
    font-size: 12px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 4px;
    padding: 2px 8px;
    min-width: 70px;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.1);
    display: inline-block;
}
.p3xr-info-lang-kbd {
    font-family: 'Roboto Mono', monospace;
    font-size: 11px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 4px;
    padding: 2px 8px;
    min-width: 50px;
    text-align: center;
    background-color: rgba(128, 128, 128, 0.1);
    display: inline-block;
}
</style>
