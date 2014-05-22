
'use strict';

module.exports = function (grunt) {
  return {
    standalone: {
      options: {
        keepalive: true,
        hostname: '0.0.0.0',
        port: grunt.option('port') || 8000,
        base: grunt.option('root') || '.'
      }
    },

    laravel: {
      options: {
        keepalive: true,
        hostname: '0.0.0.0',
        port: grunt.option('port') || 8000,
        base: 'public',
        router: '../server.php'
      }
    }
  };
};
