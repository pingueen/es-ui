'use strict';

describe('App', function () {
    var app, App;
    App= require('./index');

    beforeEach(function () {
        app = new App();
    });

    afterEach(function () {
        app = null;
    });

    describe('"setSails" method', function () {

        it('should call "console.info"', function () {
            spyOn(console, 'info');
            app.setSails();
            expect(console.info).toHaveBeenCalledWith('A galleon in full sail!');
        });
    });
});