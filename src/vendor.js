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
require('angular-tree-control/context-menu')

require('angular-json-tree')
