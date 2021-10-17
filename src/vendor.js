require('./vendor.scss')
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

// moment
global.moment = require('moment')
require('moment/locale/zh-cn')


global.$window = $(window);

$(() => {
    global.$body = $('body');
})

global.htmlEncode = require('js-htmlencode').htmlEncode

// socket
global.io = require('socket.io-client/dist/socket.io.js')

// angular
global.angular = require('angular');

require('angular-aria');
require('angular-sanitize')
require('angular-messages');
require('angular-animate');
require('angular-cookies');
require('angular-inview')

require('@uirouter/angularjs')
require('angular-material');

require('angular-tree-control')

//require('angular-tree-control/context-menu')
// angular context menu fix
angular.module("contextMenu", []);

require('angular-json-tree')
