require('typeface-roboto');
require('./scss/index.scss')

// fontawesome
require('@fortawesome/fontawesome-free/js/all')

// jquery
global.$ = require('jquery/dist/jquery.slim')
global.jQuery = global.$

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

require('./core/strings')
require('./core/settings')
require('./core/random')
require('./core/next-id')
require('./core/api')
require('./core/state')
require('./core/dom')

require('./jquery/overlay')

require('./angular/boot');
