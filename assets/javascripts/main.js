(function () {
  'use strict';

  var $ = require('../../bower_components/jquery/dist/jquery.js'),
    Test = require('./modules/test.js'),
    test = new Test();

  test.init();

  // Define jQuery globals for plugin handling
  window.$ = $;
  window.jQuery = $;

  $(function () {
    $('.container').append($('<p>jQuery loaded!</p>'));
  });
}());
