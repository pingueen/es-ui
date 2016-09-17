var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

/**
 * Represents the header of an application
 * @class
 * @extends Component
 */
function Header() {
    this.name = 'header';
    this.init(template, style);

    this.bind('.menu-wrapper', require('./menu'));
}
extend(Header, Component);

module.exports = Header;