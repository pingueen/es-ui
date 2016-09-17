var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

/**
 * Represents an application
 * @class
 * @extends Component
 */
function App() {
    this.name = 'app';
    this.init(template, style);

    this.bind('.header-wrapper', require('./header'));
    this.bind('.content-wrapper', require('./content'));
}
extend(App, Component);

/**
 * Notifies pirates that rum will flow a river
 * @method
 */
function setSails() {
    console.info('A galleon in full sail!');
}
App.prototype.setSails = setSails;

module.exports = App;