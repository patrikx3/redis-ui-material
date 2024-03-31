const isObject = require('lodash/isObject');
const transform = require('lodash/transform');

function removeHashKeys(data) {
    // Check explicitly for null and array to prevent treating them as objects
    if (Array.isArray(data)) {
        return data.map(item => removeHashKeys(item));
    } else if (isObject(data) && !Array.isArray(data) && data !== null && typeof data !== 'string') {
        return transform(data, (result, value, key) => {
            if (key !== '$$hashKey') {
                result[key] = isObject(value) ? removeHashKeys(value) : value;
            }
        });
    } else {
        return data;
    }
}

p3xr.clone = (value) => {
    return removeHashKeys(value);
};
