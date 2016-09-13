var extend = require('../lib/extend');
var Component = require('./component');

function SomeComponent1() {
    this.name = 'someComponent1'
}
extend(SomeComponent1, Component);

function SomeComponent2() {
    this.name = 'someComponent2'
}
extend(SomeComponent2, Component);

describe('Component', function () {
    var component11, component12, component21, component22;

    beforeEach(function () {
        component11 = new SomeComponent1();
        component12 = new SomeComponent1();
        component21 = new SomeComponent2();
        component22 = new SomeComponent2();
    });

    afterEach(function () {
        component11 = null;
        component12 = null;
        component21 = null;
        component22 = null;
    });

    describe('method "init"', function () {
        var template = '<div class="test"></div>';
        var style = '.test { background-color: black }';

        it('initialises the template', function () {
            component11.init(template, style);
            expect(component11.template instanceof HTMLElement).toBeTruthy();
        });

        it('initialises the style', function () {
            component11.init(template, style);
            expect(component11.style instanceof HTMLStyleElement).toBeTruthy();
        });

        it('should cache styles of components with same name', function () {
            component11.init(template, style);
            component12.init(template, style);
            expect(component11.name).toEqual(component12.name);
            expect(component11.style).toBe(component12.style);
        });
    });
});
