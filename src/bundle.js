require('typeface-roboto');
require('typeface-roboto-mono')
require('./scss/index.scss')

// fontawesome
//require('@fortawesome/fontawesome-free/js/all')


// jquery
global.$ = require('jquery/dist/jquery.slim')
global.jQuery = global.$

jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ){
        if ( ns.includes("noPreventDefault") ) {
            this.addEventListener("touchstart", handle, { passive: false });
        } else {
            this.addEventListener("touchstart", handle, { passive: true });
        }
    }
};


global.ace = require('ace-builds')
require('ace-builds/webpack-resolver')
require('ace-builds/src-noconflict/mode-json')
require('ace-builds/src-noconflict/ext-searchbox')
//require('ace-builds/src-noconflict/theme-twilight')
//require('ace-builds/src-noconflict/theme-github')

global.JSONEditor = require('jsoneditor/dist/jsoneditor.js')

global.$window = $(window);

$(() => {
    global.$body = $('body');
})

// socket
global.io = require('socket.io-client')

require('./decorate/string')

global.p3xr = global.p3xr || {}

p3xr.pkg = require('../package')

p3xr.theme = {
    dark: undefined,
    light: undefined,
}

p3xr.ui = {
    overlay: undefined,
    htmlEncode: require('js-htmlencode').htmlEncode
}

require('./core/corifeus-renderer')
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

require('./jquery/overlay')


p3xr.settings.language.translation['en'] = require('./strings/en/strings')
p3xr.settings.language.translation['zn'] = require('./strings/zn/strings')

require('./angular/boot');
