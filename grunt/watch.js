
'use strict';

module.exports = function () {
  return {
    stylus: {
      options: {
        spawn: false
      },

      files: [
        'assets/stylesheets/**/*.styl',
        'assets/stylesheets/*.styl'
      ],

      tasks: ['stylus', 'autoprefixer']
    },

    cssmin: {
      options: {
        spawn: false
      },

      files: [
        'public/stylesheets/main.scss'
      ],

      tasks: ['cssmin']
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

      tasks: ['browserify']
    },

    exorcise: {
      options: {
        spawn: false
      },

      files: [
        'public/javascripts/main.js'
      ],

      tasks: ['exorcise']
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
