var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

var contentService = require('../../content/service');

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
    this.querySelector('ul').addEventListener('click', this.selectItem);
}
Menu.prototype.init = init;

/**
 * Selects menu item
 * @method
 * @listener
 */
function selectItem(event) {
    if (event.target.tagName !== 'LI') return null;
    var index = Array.prototype.indexOf.call(event.target.parentNode.children, event.target);
    contentService.setCurrentSection(index);
}
Menu.prototype.selectItem = selectItem;

module.exports = new Menu();