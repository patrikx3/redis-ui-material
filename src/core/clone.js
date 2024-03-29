const isObject = require('lodash/isObject')
const transform = require('lodash/transform')

function removeHashKeys(data) {
    return transform(data, (result, value, key) => {
      // Exclude $$hashKey from the transformation
      if (key !== '$$hashKey') {
        // Recursively apply transformation for objects and arrays, else assign value directly
        result[key] = isObject(value) ? removeHashKeys(value) : value;
      }
    });
  }
  

p3xr.clone = (value) => {
    //console.warn('clone, executed', value)
    return removeHashKeys(value)
}