// karma.conf.js
module.exports = function(config) {
    config.set({
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'artifacts/jasmine.html',
            pageTitle: 'Jasmine Tests'
        },
        basePath: '.',
        files: ['app/src/**/*.js', 'tests/js/*Spec.js'],
        frameworks: ['jasmine'],
        browsers: ['Chrome'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true
    });
};