'use strict';

var extend = require('../lib/extend');
var Component = require('./component');

describe('Component', function () {
    var component1, component2;
    var template = '<div class="test"></div><div class="test"></div>';
    var template2 = '<div class="test"></div><div class="test"></div><div class="test"></div><div class="teste"></div>';
    var template3 = '<div class="bound"></div><div class="bound"></div>';
    var style = '.test { background-color: black }';

    /* Component subclass */
    function SomeComponent() {
        this.name = 'someComponent';
        this.init(template, style);
    }
    extend(SomeComponent, Component);

    function SomeComponent2() {
        this.name = 'someComponent2';
        this.init(template2, style);
    }
    extend(SomeComponent2, Component);

    function SomeOtherComponent() {
        this.name = 'someOtherComponent';
        this.init(template3, style);
    }
    extend(SomeOtherComponent, Component);

    beforeEach(function () {
        component1 = new SomeComponent();
    });

    afterEach(function () {
        component1 = null;
    });

    describe('method "init"', function () {

        beforeEach(function () {
            component2 = new SomeComponent();
        });

        afterEach(function () {
            component2 = null;
        });

        it('initialises the template', function () {
            expect(component1.template instanceof HTMLDivElement).toBeTruthy();
            expect(component1.template.innerHTML).toBe(template);
        });

        it('initialises the style', function () {
            expect(component1.style instanceof HTMLStyleElement).toBeTruthy();
            expect(component1.style.innerHTML).toBe(style);
        });

        it('should create different template instances', function () {
            expect(component1.template instanceof HTMLDivElement).toBeTruthy();
            expect(component2.template instanceof HTMLDivElement).toBeTruthy();
            expect(component1.name).toBe(component2.name);
            expect(component1.template).not.toBe(component2.template);
        });

        it('should cache styles of components with same name', function () {
            expect(component1.style instanceof HTMLStyleElement).toBeTruthy();
            expect(component2.style instanceof HTMLStyleElement).toBeTruthy();
            expect(component1.name).toBe(component2.name);
            expect(component1.style).toBe(component2.style);
        });
    });

    describe('method "querySelector"', function () {

        it('returns the first element within the template by query', function () {
            var element;
            element = component1.querySelector('.test');
            expect(element instanceof HTMLDivElement).toBeTruthy();
            expect(element.classList.contains('test')).toBeTruthy();
        });

        it('should throw error if can\'t find any element', function () {

            function wrongQuery() {
                component1.querySelector('.testen');
            }

            expect(wrongQuery).toThrowError();
        });
    });

    describe('method "querySelectorAll"', function () {
        var component3;

        beforeEach(function () {
            component3 = new SomeComponent2();
        });

        afterEach(function () {
            component3 = null;
        });

        it('returns a list of the elements within the template by query', function () {
            var list1, list2;
            list1 = component3.querySelectorAll('.test');
            list2 = component3.querySelectorAll('.teste');
            expect(list1 instanceof NodeList).toBeTruthy();
            expect(list2 instanceof NodeList).toBeTruthy();
            expect(list1.length).toBe(3);
            expect(list2.length).toBe(1);
            expect(list1[0].classList.contains('test')).toBeTruthy();
            expect(list1[1].classList.contains('test')).toBeTruthy();
            expect(list1[2].classList.contains('test')).toBeTruthy();
            expect(list2[0].classList.contains('teste')).toBeTruthy();
        });

        it('should throw error if can\'t find any element', function () {

            function wrongQuery() {
                component3.querySelectorAll('.testen');
            }

            expect(wrongQuery).toThrowError();
        });
    });

    describe('method "bind"', function () {

        it('binds component to element in template by query', function () {
            var testElements, boundElements, componentElements;
            component1.bind('.test', SomeOtherComponent);
            testElements = component1.querySelectorAll('.test');
            componentElements = component1.querySelectorAll('.someOtherComponent');
            boundElements = component1.querySelectorAll('.bound');
            expect(testElements.length).toBe(componentElements.length);
            expect(testElements.length).toBe(boundElements.length / 2);
        });

        it('should throw error if constructor is not a function', function () {

            function worngConstructor() {
                component1.bind('.test', null);
            }

            expect(worngConstructor).toThrowError();
        });
    });

    describe('method "appendTo"', function () {

        it('appends component\'s template to an element', function () {
            var componentElement;
            component1.appendTo(document.body);
            componentElement = document.body.querySelector('.' + component1.name);
            expect(componentElement).toBe(component1.template);
        });

    });
});
