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
 * Finds element in template by query in param
 * @param {string} selector
 * @returns {Element}
 */
function querySelector(selector) {
    return this.template.querySelector(selector);
}
Component.prototype.querySelector = querySelector;

/**
 * Binds child component to the element by query
 * @param {string} query
 * @param {Component} component
 */
function bind(query, component) {
    this.querySelector(query).appendChild(component.template);
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