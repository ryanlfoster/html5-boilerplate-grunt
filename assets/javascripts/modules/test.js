
'use strict';

module.exports = function () {
  var message = 'Some message';

  return {
    init: function () {
      console.log(message);
    }
  };
};
