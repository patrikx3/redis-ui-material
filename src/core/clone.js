const cloneDeepWith = require('lodash/cloneDeepWith')
const isObject = require('lodash/isObject')
const transform = require('lodash/transform')

function customizer(value) {
    if (isObject(value)) {
        // Remove keys that start with '$'
        return transform(value, (result, val, key) => {
            if (key !== '$$hashKey') {
                result[key] = val;
            }
        });
    }
    // For other types, no custom behavior
}

p3xr.clone = (value) => {
    //console.warn('clone, executed', value)
    return cloneDeepWith(value, customizer)
}