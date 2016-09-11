module.exports = {
    merge: merge
};

/**
 * Merges complex objects into one
 */
function merge() {
    var i, obj, key,
        result = {};

    for (i = 0; i < arguments.length; i++) {
        obj = arguments[i];
        for (key in obj) {
            if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
                if (typeof result[key] === 'undefined') {
                    result[key] = {};
                }
                result[key] = merge(result[key], obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        }
    }
    return result;
}