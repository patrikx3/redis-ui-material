require('./scss/index.scss')

// fontawesome
//require('@fortawesome/fontawesome-free/js/all')




require('./decorate/string')

global.p3xr = global.p3xr || {}

p3xr.theme = {
    dark: undefined,
    light: undefined,
}

p3xr.ui = {
    overlay: undefined,
    htmlEncode: global.htmlEncode
}

require('./core/settings')
require('./core/strings')
require('./core/random')
require('./core/is-bot')
require('./core/next-id')
require('./core/api')
require('./core/state')
require('./core/dom')
require('./core/sort')
require('./core/clipboard')
require('./core/clone')

require('./jquery/overlay')


p3xr.settings.language.translation['en'] = require('./strings/en/strings')
p3xr.settings.language.translation['zn'] = require('./strings/zn/strings')
p3xr.settings.language.translation['ru'] = require('./strings/ru/strings')

require('./angular/boot');

