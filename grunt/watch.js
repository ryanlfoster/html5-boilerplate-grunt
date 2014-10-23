
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
        'styles'
      ]
    },

    images: {
      options: {
        spawn: false
      },

      files: [
        '<%= assets.images.directory %>/**/*',
        '<%= assets.images.directory %>/*'
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
        '<%= assets.fonts.directory %>/**/*',
        '<%= assets.fonts.directory %>/*'
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
