/**
 * The Monument in Honor of Persistent Junior
 *
 * var app =  document.querySelector('.app');
 * var content = app.querySelector('.content');
 * var sections = content.querySelectorAll('section');
 * var menu = app.querySelector('.header .menu');
 * var menuItems = menu.querySelectorAll('li');
 *
 * // hide all except first section
 * Array.prototype.forEach.call(sections, function (section, i) {
 *     if (i === 1) return;
 *     section.style.display = 'none';
 * });
 *
 * // set event listeners for menu items
 * Array.prototype.forEach.call(menuItems, function (item) {
 *     item.addEventListener('click', function () {
 *         var index = Array.prototype.indexOf.call(this.parentNode.children, this);
 *
 *         //hide all sections
 *         Array.prototype.forEach.call(sections, function (section) {
 *             section.style.display = 'none';
 *         });
 *         // show section which has save index as clicked menu item
 *         sections[index].style.display = 'block';
 *
 *     });
 * });
 */

var app = require('./app');

app.appendTo(document.body);
app.setSails();