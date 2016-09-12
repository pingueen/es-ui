/**
 * Represents the component
 * @constructor
 */
function Component() {
}

/**
 * Initiates the component
 * @param {string} template
 * @param {string} style
 */
function init(template, style) {
    this.template = document.createElement('div');
    this.template.innerHTML = template;
    this.template.classList.add(this.name);
    this.style = document.createElement('style');
    this.style.innerHTML = style;
    document.head.appendChild(this.style);
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
function bind(query, component) {
    var element = this.querySelector(query);
    if (!element || !(element instanceof HTMLElement)) throw Error('Can\'t find element by query: ' + query);
    if (!(component instanceof Component)) throw Error(component + ' is not instance of Component');
    element.appendChild(component.template);
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

module.exports = Component;