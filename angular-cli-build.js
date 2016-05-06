/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
      vendorNpmFiles: [
          '@angular2-material/**/*.js',
          'systemjs/dist/system-polyfills.js',
          'systemjs/dist/system.src.js',
          'zone.js/dist/*.js',
          'es6-shim/es6-shim.js',
          'reflect-metadata/*.js',
          'rxjs/**/*.js',
          '@angular/**/*.js'
      ]
  });
    return app.toTree();
};
