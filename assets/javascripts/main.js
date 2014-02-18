(function () {
  'use strict';

  var $ = require('jquery'),
    Test = require('modules/test');

  // Define jQuery globals for plugin handling
  window.$ = $;
  window.jQuery = $;

  $(function () {
    var test = new Test();
    test.init();

    $('.container').append($('<p>jQuery loaded!</p>'));
  });
}());
