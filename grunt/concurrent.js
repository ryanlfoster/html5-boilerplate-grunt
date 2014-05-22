
'use strict';

module.exports = function () {
  return {
    standalone: {
      options: {
        logConcurrentOutput: true
      },

      tasks: [
        'php:standalone',
        'watch'
      ]
    },

    laravel: {
      options: {
        logConcurrentOutput: true
      },

      tasks: [
        'php:laravel',
        'watch'
      ]
    }
  };
};
