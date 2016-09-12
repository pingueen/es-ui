var initialized = false;
var singleton = {};

/**
 * Represents menu service
 * @constructor
 * @singleton
 */
function ContentService() {
    return singleton;
}

/**
 * Initializes menu service
 * @param {Function} setCurrentSection
 */
function init(setCurrentSection) {
    if (initialized) throw Error('Unable to initialize menu service twice');
    if (typeof setCurrentSection !== 'function') throw Error(setCurrentSection + 'should be a function');
    singleton.setCurrentSection = setCurrentSection;
    initialized = true;
}
singleton.init = init;

/**
 * Bounded function from content component
 */
singleton.setCurrentSection = null;

module.exports = new ContentService();