'use strict';

var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

/**
 * Represents the content of an application
 * @class
 * @extends Component
 */
function Content() {
    this.name = 'content';
    this.init(template, style);
}
extend(Content, Component);

module.exports = Content;