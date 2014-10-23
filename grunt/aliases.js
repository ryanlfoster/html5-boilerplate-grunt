
'use strict';

module.exports = function () {
  return {
    'default': [
      'build'
    ],

    'build': [
      'copy',
      'styles',
      'scripts',
      'minify'
    ],

    'styles': [
      'stylus',
      'autoprefixer'
    ],

    'scripts': [
      'jslint',
      'browserify',
      'exorcise',
      'modernizr'
    ],

    'minify': [
      'cssmin',
      'uglify'
    ],

    'watcher': [
      'browserify',
      'watch'
    ],

    'server': [
      'concurrent:standalone'
    ],

    'serve': [
      'concurrent:laravel'
    ]
  };
};
