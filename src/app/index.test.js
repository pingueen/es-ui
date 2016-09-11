describe('App', function () {
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

    it('should have "App" constructor', function () {
        expect(app.constructor.name).toBe('App');
    });

    describe('"setSails" method', function () {

        it('should call "console.info"', function () {
            spyOn(console, 'info');
            app.setSails();
            expect(console.info).toHaveBeenCalled();
        });
    });
});
