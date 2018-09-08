require('typeface-roboto');
require('./scss/index.scss')


// fontawesome
require('@fortawesome/fontawesome-free/js/all')

// jquery
global.$ = require('jquery/dist/jquery.slim')
global.jQuery = global.$

global.$window = $(window);

// socket
global.io = require('socket.io-client')

// angular
global.angular = require('angular');

require('angular-aria');
require('angular-messages');
require('angular-animate');
require('angular-cookies');

require('@uirouter/angularjs')
require('angular-material');

require('./decorate/string')

global.p3xr = global.p3xr || {}

require('./core/strings')
require('./core/settings')
require('./core/random')
require('./core/next-id')
require('./core/api')
require('./core/state')
p3xr.pkg = require('../../package')

p3xr.theme = {
    dark: undefined,
    light: undefined,
}


require('./angular/boot');
