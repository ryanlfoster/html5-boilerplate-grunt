
module.exports = function () {
  'use strict';

  return {
    sass: {
      options: {
        spawn: false
      },

      files: [
        'assets/stylesheets/**/*.scss',
        'assets/stylesheets/*.scss'
      ],

      tasks: ['sass', 'cssmin']
    },

    images: {
      options: {
        spawn: false
      },

      files: [
        'assets/images/**/*.{png,jpg,gif}',
        'assets/images/*.{png,jpg,gif}'
      ],

      tasks: [
        'copy:images',
        'imagemin'
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
        'assets/javascripts/**/*.js',
        'assets/javascripts/*.js'
      ],

      tasks: ['jslint']
    },

    browserify: {
      options: {
        spawn: false
      },

      files: [
        'assets/javascripts/**/*.js',
        'assets/javascripts/*.js'
      ],

      tasks: ['browserify', 'exorcise']
    },

    uglify: {
      options: {
        spawn: false
      },

      files: ['public/javascripts/main.js'],
      tasks: ['uglify']
    }
  };
};
