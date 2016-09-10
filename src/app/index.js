var template = require('./index.html');
var style = require('./index.less');

function App () {
    this.template = document.createElement('div');
    this.template.innerHTML = template;
    this.template.classList.add('app');
    this.style = document.createElement('style');
    this.style.innerHTML = style;

    document.body.appendChild(this.template);
    document.head.appendChild(this.style);dif
}

module.exports = new App();