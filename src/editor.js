//global.ace = require('ace-builds')
//require('ace-builds/webpack-resolver')
//ace.config.setModuleUrl('ace/mode/json_worker', require('file-loader?esModule=false!../node_modules/ace-builds/src-noconflict/worker-json.js'))

//require('ace-builds/src-noconflict/mode-json')
//require('ace-builds/src-noconflict/ext-searchbox')
//require('ace-builds/src-noconflict/theme-twilight')
//require('ace-builds/src-noconflict/theme-github')

const JSONEditor = require('jsoneditor/dist/jsoneditor.js')

ace.config.setModuleUrl('ace/theme/twilight', require('ace-builds/src-noconflict/theme-twilight.js'))
//ace.config.setModuleUrl('ace/theme/github', require('file-loader?esModule=false!../node_modules/ace-builds/src-noconflict/theme-github.js'))

export { JSONEditor }
