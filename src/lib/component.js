var instantiatedComponents = [];

/**
 * Represents the component
 * @constructor
 */
function Component() {
}

/**
 * Initiates the component
 * Parses and caches template and style.
 * @param {string} template
 * @param {string} style
 */
function init(template, style) {
    var instantiated = _determineInstantiation.call(this);
    this.template = document.createElement('div');
    this.template.innerHTML = template;
    this.template.classList.add(this.name);
    if (instantiated) {
        this.style = instantiated.style;
    } else {
        this.style = document.createElement('style');
        this.style.innerHTML = style;
        document.head.appendChild(this.style);
        instantiatedComponents.push(this);
    }
}
Component.prototype.init = init;

/**
 * Returns element from template by query
 * @param {string} selector
 * @returns {HTMLElement}
 */
function querySelector(selector) {
    var element = this.template.querySelector(selector);
    if (!(element instanceof HTMLElement)) throw Error('Can\'t find element by selector ' + selector);
    return element;
}
Component.prototype.querySelector = querySelector;

/**
 * Returns node list from template by query
 * @param {string} selector
 * @returns {NodeList}
 */
function querySelectorAll(selector) {
    var list = this.template.querySelectorAll(selector);
    if (!(list instanceof NodeList)) throw Error('Can\'t find NodeList by selector ' + selector);
    return list;
}
Component.prototype.querySelectorAll = querySelectorAll;

/**
 * Binds child component to the element by query
 * @param {string} query
 * @param {Component} component
 */
function bind(query, Constructor) {
    var elements = this.querySelectorAll(query);
    if (!elements.length) throw Error('Can\'t find any element by query: ' + query);
    if (!(constructor instanceof Function)) throw Error(constructor + ' is not a function');
    Array.prototype.forEach.call(elements, function (element) {
        var component = new Constructor();
        element.appendChild(component.template);
    });
}
Component.prototype.bind = bind;

/**
 * Appends component to element
 * @param element
 */
function appendTo(element) {
    element.appendChild(this.template);
}
Component.prototype.appendTo = appendTo;

/**
 * Determines if component was ever instantiated
 * @returns {Component|boolean}
 * @private
 */
function _determineInstantiation() {
    var component = instantiatedComponents.find(function (component) {
        return component.name === this.name;
    }.bind(this));
    return component ? component : false;
}

module.exports = Component;