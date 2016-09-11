describe('Header', function () {
    var app;

    beforeEach(function () {
        app = require('./index');
    });

    afterEach(function () {
        app = null;
    });

    it('should be an object', function () {
        expect(typeof app).toBe('object');
        expect(app instanceof Object).toBeTruthy();
    });

    it('should have "Header" constructor', function () {
        expect(app.constructor.name).toBe('Header');
    });
});