
(function () {
  'use strict';

  function Test() {
    this.message = 'Some message.';
  }

  Test.prototype = {
    init: function () {
      console.log(this.message);
    }
  };

  module.exports = Test;
}());
