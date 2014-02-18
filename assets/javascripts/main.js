(function () {
  'use strict';

  var $ = require('../../bower_components/jquery/dist/jquery.js'),
    console = require('console-browserify'),
    Test = require('./modules/test.js');

  // Define jQuery globals for plugin handling
  // Define console to work with more browsers
  window.$ = $;
  window.jQuery = $;
  window.console = console;

  $(function () {
    var test = new Test();
    test.init();

    $('.container').append($('<p>jQuery loaded!</p>'));
  });
}());
