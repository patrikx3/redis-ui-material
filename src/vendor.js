require('./vendor.scss')

// zone.js must be loaded before Angular bootstraps
require('zone.js')

global.htmlEncode = require('js-htmlencode').htmlEncode

// socket
global.io = require('socket.io-client/dist/socket.io.js')
