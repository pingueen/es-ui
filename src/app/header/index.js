var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

/**
 * Represents a header of an application
 * @class
 * @extends Component
 */
function Header() {
    this.name = 'header';
    this.init(template, style);

    this.selectedItem = null;

    this.querySelector('.menu ul').addEventListener('click', selectItem);
}
extend(Header, Component);

/**
 * Selects menu item
 * @method
 */
function selectItem(event) {
    if (event.target.tagName === 'LI') {
        this.selectItem = event.target.dataset.name;

        console.log(this.selectItem);
    }
}

module.exports = new Header();