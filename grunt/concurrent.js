
module.exports = function () {
  'use strict';

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
