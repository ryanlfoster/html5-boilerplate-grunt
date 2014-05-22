
'use strict';

var $ = require('jquery'),
  test = require('./modules/test.js');

// Define jQuery globals for plugin handling
window.$ = $;
window.jQuery = $;

$(function () {
  test.init();

  $('.container').append($('<p>jQuery loaded!</p>'));
});
