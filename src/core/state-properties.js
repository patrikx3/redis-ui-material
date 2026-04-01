/**
 * LocalStorage-backed computed properties on p3xr.settings and p3xr.state.
 *
 * Ported from angular/boot.js .run() block — no AngularJS dependency.
 */
const merge = require('lodash/merge')

function getStorage(name) {
    try {
        const value = localStorage.getItem(name)
        return value !== null ? value : undefined
    } catch {
        return undefined
    }
}

function setStorage(name, value) {
    try {
        localStorage.setItem(name, String(value))
    } catch { /* ignore */ }
}

// --- search ---
let search
Object.defineProperty(p3xr.state, 'search', {
    get: () => {
        search = getStorage('p3xr-state-search')
        if (search === undefined) search = ''
        return search
    },
    set: (value) => {
        search = value
        setStorage('p3xr-state-search', value)
    }
})

// --- redisTreeDivider ---
let treeDivider
Object.defineProperty(p3xr.settings, 'redisTreeDivider', {
    get: () => {
        treeDivider = getStorage(p3xr.settings.tree.storageKey)
        if (treeDivider === undefined) treeDivider = p3xr.settings.tree.defaultDivider
        return treeDivider
    },
    set: (value) => {
        treeDivider = value
        setStorage(p3xr.settings.tree.storageKey, value)
    }
})

// --- jsonFormat ---
let jsonFormat
Object.defineProperty(p3xr.settings, 'jsonFormat', {
    get: () => {
        jsonFormat = getStorage(p3xr.settings.jsonFormatSettings.storageKey)
        if (jsonFormat === undefined) jsonFormat = p3xr.settings.jsonFormatSettings.default
        return parseInt(jsonFormat)
    },
    set: (value) => {
        jsonFormat = value
        setStorage(p3xr.settings.jsonFormatSettings.storageKey, value)
    }
})

// --- animation ---
let animation
const $body = document.body
const setAnimation = () => {
    $body.classList.remove('p3xr-no-animation', 'p3xr-animation')
    if (p3xr.settings.animation) {
        $body.classList.add('p3xr-animation')
    } else {
        $body.classList.add('p3xr-no-animation')
    }
}
Object.defineProperty(p3xr.settings, 'animation', {
    get: () => {
        animation = getStorage(p3xr.settings.animationSettings.storageKey)
        if (animation === undefined) animation = p3xr.settings.animationSettings.default
        return parseInt(animation) === 1
    },
    set: (value) => {
        animation = value
        setStorage(p3xr.settings.animationSettings.storageKey, value)
        setAnimation()
    }
})
setAnimation()

// --- maxValueDisplay ---
let maxValueDisplay
Object.defineProperty(p3xr.settings, 'maxValueDisplay', {
    get: () => {
        maxValueDisplay = getStorage(p3xr.settings.maxValueDisplaySetting.storageKey)
        if (maxValueDisplay === undefined) maxValueDisplay = p3xr.settings.maxValueDisplaySetting.default
        return parseInt(maxValueDisplay)
    },
    set: (value) => {
        maxValueDisplay = parseInt(value)
        setStorage(p3xr.settings.maxValueDisplaySetting.storageKey, value)
    }
})

// --- maxKeys ---
let maxKeysDisplay
Object.defineProperty(p3xr.settings, 'maxKeys', {
    get: () => {
        maxKeysDisplay = getStorage(p3xr.settings.maxKeysSettings.storageKey)
        if (maxKeysDisplay === undefined) maxKeysDisplay = p3xr.settings.maxKeysSettings.default
        let value = parseInt(maxKeysDisplay)
        if (isNaN(value) || value < 5 || value > p3xr.settings.maxKeysSettings.max) {
            value = p3xr.settings.maxKeysSettings.default
        }
        return value
    },
    set: (value) => {
        maxKeysDisplay = parseInt(value)
        setStorage(p3xr.settings.maxKeysSettings.storageKey, value)
    }
})

// --- language ---
let language
Object.defineProperty(p3xr.settings.language, 'current', {
    get: () => {
        language = getStorage(p3xr.settings.language.storageKey)
        if (language === undefined) {
            try {
                const navLang = (navigator.language || '').toLowerCase()
                if (navLang.startsWith('zh')) language = 'zn'
                else if (navLang.startsWith('ru')) language = 'ru'
                else language = p3xr.settings.language.defaultLanguage
            } catch (e) {
                language = p3xr.settings.language.defaultLanguage
            }
            require('dayjs').locale(p3xr.settings.language.momentDateMap[language])
        }
        return language
    },
    set: (value) => {
        if (value === undefined) value = p3xr.settings.language.defaultLanguage
        language = value
        require('dayjs').locale(p3xr.settings.language.momentDateMap[language])

        const en = p3xr.settings.language.translation['en'] || {}
        const selected = p3xr.settings.language.translation[value] || {}

        // Log missing keys (dev only)
        const missing = []
        const isObject = (v) => v && typeof v === 'object' && !Array.isArray(v)
        const diffKeys = (base, target, path = '') => {
            Object.keys(base || {}).forEach((k) => {
                const nextPath = path ? `${path}.${k}` : k
                if (!(target && Object.prototype.hasOwnProperty.call(target, k))) {
                    missing.push(nextPath)
                } else if (isObject(base[k]) && isObject(target[k])) {
                    diffKeys(base[k], target[k], nextPath)
                }
            })
        }
        try {
            diffKeys(en, selected)
            if (missing.length) console.warn(`[i18n] Missing translation keys for '${value}':`, missing)
        } catch (e) { /* noop */ }

        p3xr.strings = merge({}, en, selected)
        setStorage(p3xr.settings.language.storageKey, value)
    }
})
// Initialize language
p3xr.settings.language.current = getStorage(p3xr.settings.language.storageKey)

// --- keysSort ---
let keysSort
Object.defineProperty(p3xr.settings, 'keysSort', {
    get: () => {
        keysSort = getStorage(p3xr.settings.keySortInfo.storageKey)
        if (keysSort === undefined) keysSort = p3xr.settings.keySortInfo.default
        else if (keysSort === 'true') keysSort = true
        else if (keysSort === 'false') keysSort = false
        return keysSort
    },
    set: (value) => {
        keysSort = value
        setStorage(p3xr.settings.keySortInfo.storageKey, value)
    }
})

// --- searchClientSide ---
let searchClientSide
Object.defineProperty(p3xr.settings, 'searchClientSide', {
    get: () => {
        searchClientSide = getStorage(p3xr.settings.searchInfoClientSide.storageKey)
        if (searchClientSide === undefined) searchClientSide = p3xr.settings.searchInfoClientSide.default
        else if (searchClientSide === 'true') searchClientSide = true
        else if (searchClientSide === 'false') searchClientSide = false
        if (p3xr.state.keysRaw.length > p3xr.settings.maxLightKeysCount || p3xr.state.dbsize > p3xr.settings.maxLightKeysCount) {
            searchClientSide = false
        }
        return searchClientSide
    },
    set: (value) => {
        searchClientSide = value
        setStorage(p3xr.settings.searchInfoClientSide.storageKey, value)
    }
})

// --- searchStartsWith ---
let searchStartsWith
Object.defineProperty(p3xr.settings, 'searchStartsWith', {
    get: () => {
        searchStartsWith = getStorage(p3xr.settings.searchInfoStartsWith.storageKey)
        if (searchStartsWith === undefined) searchStartsWith = p3xr.settings.searchInfoStartsWith.default
        else if (searchStartsWith === 'true') searchStartsWith = true
        else if (searchStartsWith === 'false') searchStartsWith = false
        return searchStartsWith
    },
    set: (value) => {
        searchStartsWith = value
        setStorage(p3xr.settings.searchInfoStartsWith.storageKey, value)
    }
})

// --- expandedNodes ---
let expandedNodes = []
p3xr.state.expandedNodes = expandedNodes
Object.defineProperty(p3xr.state, 'expandedNodes', {
    get: () => expandedNodes,
    set: (value) => { expandedNodes = value }
})
p3xr.state.savedExpandedNodes = []

// --- page ---
let page = 1
Object.defineProperty(p3xr.state, 'page', {
    get: () => page,
    set: (value) => { page = parseInt(value) }
})

// --- keys (paginated, filtered) ---
p3xr.state._filteredKeysRaw = []
Object.defineProperty(p3xr.state, 'keys', {
    get: () => {
        let globalKeysRaw = (p3xr.state.keysRaw || []).slice()
        if (p3xr.settings.searchClientSide && typeof p3xr.state.search === 'string' && p3xr.state.search.length > 0) {
            if (p3xr.settings.searchStartsWith) {
                globalKeysRaw = globalKeysRaw.filter(k => k.startsWith(p3xr.state.search))
            } else {
                globalKeysRaw = globalKeysRaw.filter(k => k.includes(p3xr.state.search))
            }
        }
        p3xr.state._filteredKeysRaw = globalKeysRaw
        if (globalKeysRaw.length <= p3xr.settings.pageCount) {
            return globalKeysRaw
        }
        const start = (p3xr.state.page - 1) * p3xr.settings.pageCount
        return globalKeysRaw.slice(start, start + p3xr.settings.pageCount)
    }
})

Object.defineProperty(p3xr.state, 'pages', {
    get: () => {
        const raw = p3xr.state._filteredKeysRaw || p3xr.state.keysRaw || []
        return Math.ceil(raw.length / p3xr.settings.pageCount)
    }
})

// --- pageCount ---
let pageCount
Object.defineProperty(p3xr.settings, 'pageCount', {
    get: () => {
        pageCount = getStorage(p3xr.settings.paging.storageKey)
        if (pageCount === undefined) pageCount = p3xr.settings.paging.default
        else pageCount = parseInt(pageCount)
        return pageCount
    },
    set: (value) => {
        pageCount = value
        setStorage(p3xr.settings.paging.storageKey, value)
    }
})

// --- keyPageCount ---
let keyPageCount
Object.defineProperty(p3xr.settings, 'keyPageCount', {
    get: () => {
        keyPageCount = getStorage(p3xr.settings.keyPage.storageKey)
        if (keyPageCount === undefined) keyPageCount = p3xr.settings.keyPage.default
        else keyPageCount = parseInt(keyPageCount)
        return keyPageCount
    },
    set: (value) => {
        keyPageCount = value
        setStorage(p3xr.settings.keyPage.storageKey, value)
    }
})

console.info('P3X Redis UI state properties initialized (standalone)')
