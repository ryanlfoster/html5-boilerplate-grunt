
'use strict';

module.exports = function () {
  return {
    stylesheets: {
      options: {
        spawn: false
      },

      files: [
        '<%= assets.stylus.directory %>/**/*.styl',
        '<%= assets.stylus.directory %>/*.styl'
      ],

      tasks: [
        'stylus',
        'autoprefixer'
      ]
    },

    images: {
      options: {
        spawn: false
      },

      files: [
        'assets/images/**/*.{png,jpg,gif,svg}',
        'assets/images/*.{png,jpg,gif,svg}'
      ],

      tasks: [
        'copy:images'
      ]
    },

    fonts: {
      options: {
        spawn: false
      },

      files: [
        'assets/fonts/**/*',
        'assets/fonts/*'
      ],

      tasks: [
        'copy:fonts'
      ]
    },

    jslint: {
      options: {
        spawn: false
      },

      files: [
        'Gruntfile.js',
        'grunt/*.js',
        '<%= assets.scripts.directory %>/**/*.js',
        '<%= assets.scripts.directory %>/*.js'
      ],

      tasks: [
        'jslint'
      ]
    },

    exorcise: {
      options: {
        spawn: false
      },

      files: [
        '<%= assets.scripts.directory %>/main.js'
      ],

      tasks: [
        'exorcise'
      ]
    }
  };
};
