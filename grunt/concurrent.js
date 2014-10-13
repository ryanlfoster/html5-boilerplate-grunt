
'use strict';

module.exports = function () {
  return {
    standalone: {
      options: {
        logConcurrentOutput: true
      },

      tasks: [
        'php:standalone',
        'watcher'
      ]
    },

    laravel: {
      options: {
        logConcurrentOutput: true
      },

      tasks: [
        'php:laravel',
        'watcher'
      ]
    }
  };
};
