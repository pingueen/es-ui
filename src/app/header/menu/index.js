'use strict';

var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

/**
 * Represents the menu of an application
 * @class
 * @extends Component
 */
function Menu() {
    this.name = 'menu';
    this.init(template, style);
}
extend(Menu, Component);

/**
 * Initializes menu
 */
function init() {
    Component.prototype.init.apply(this, arguments);
}
Menu.prototype.init = init;

module.exports = Menu;