// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2014-11-15 using
// generator-karma 0.8.3

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'src',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../bower_components/angular/angular.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      '../bower_components/angular-animate/angular-animate.js',
      '../bower_components/angular-sanitize/angular-sanitize.js',
      '../bower_components/ui-router/release/angular-ui-router.js',
      '../bower_components/lodash/lodash.js',
      'app.module.js',
      'app.routes.js',
      '**/*.module.js',
      '**/*.js',
      '**/*.html'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      prependPrefix: '/',
      moduleName: 'angularApp.test.templates'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
