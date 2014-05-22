
'use strict';

var $ = require('jquery'),
  message = require('./modules/message.js');

// Define jQuery globals for plugin handling
window.$ = $;
window.jQuery = $;

$(function () {
  message.print('Some message');

  $('.container').append($('<p>jQuery loaded!</p>'));
});
