'use strict';

/**
 * Extends class without superclass constructor call
 * @param {Function} childClass
 * @param {Function} superClass
 */
function extend(childClass, superClass) {
    childClass.prototype = Object.create(superClass.prototype);
    childClass.prototype.constructor = childClass;
}

module.exports = extend;