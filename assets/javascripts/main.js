
'use strict';

var $ = require('jquery');

// Define jQuery globals for plugin handling
window.$ = $;
window.jQuery = $;

$(function () {
  $('.container').append($('<p>jQuery loaded!</p>'));
});
