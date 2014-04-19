
(function () {
  'use strict';

  var $ = require('jquery'),
    Test = require('modules/test'),
    test = new Test();

  // Define jQuery globals for plugin handling
  window.$ = $;
  window.jQuery = $;

  $(function () {
    test.init();

    $('.container').append($('<p>jQuery loaded!</p>'));
  });
}());
