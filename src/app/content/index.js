var extend = require('extend');
var Component = require('component');

var template = require('./index.html');
var style = require('./index.less');

var contentService = require('./service');

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

/**
 * Initializes content
 */
function init() {
    Component.prototype.init.apply(this, arguments);
    this.sections = this.getSections();
    this.showFirstSection();
    contentService.init(this.setCurrentSection.bind(this));
}
Content.prototype.init = init;

/**
 * Returns array of sections
 * @returns {Array}
 */
function getSections() {
    var sections = this.querySelectorAll('section');
    return Array.prototype.slice.call(sections);
}
Content.prototype.getSections = getSections;

/**
 * Sets current section
 * @param {number} index
 */
function setCurrentSection(index) {
    var section = this.sections[index];
    if (!section) throw Error('Unable to find section with index "' + index + '"');
    this.hideAllSections();
    this.show(section);
}
Content.prototype.setCurrentSection = setCurrentSection;

/**
 * Hides all sections
 */
function hideAllSections() {
    this.sections.forEach(this.hide);
}
Content.prototype.hideAllSections = hideAllSections;

/**
 * Shows first section
 */
function showFirstSection() {
    this.setCurrentSection(0);
}
Content.prototype.showFirstSection = showFirstSection;

/**
 * Hides element
 * @param {HTMLElement} element
 */
function hide(element) {
    element.style.display = 'none';
}
Content.prototype.hide = hide;

/**
 * Shows element
 * @param {HTMLElement} element
 */
function show(element) {
    element.style.display = 'block';
}
Content.prototype.show = show;

module.exports = Content;