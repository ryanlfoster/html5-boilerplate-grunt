module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      all: {
        src: [
          'Gruntfile.js',
          'assets/javascripts/*.js',
          'assets/javascripts/**/*.js'
        ],

        exclude: [
          'assets/javascripts/vendor/**/*.js',
          'assets/javascripts/vendor/*.js'
        ],

        options: {
          errorsOnly: true
        },

        directives: {
          node: true,
          todo: true,
          browser: true,
          indent: 2
        }
      }
    },

    uglify: {
      build: {
        options: {
          sourceMap: 'public/javascripts/main.min.map',
          sourceMappingURL: 'main.min.map'
        },

        files: {
          'public/javascripts/main.min.js': ['public/javascripts/main.js']
        }
      }
    },

    sass: {
      build: {
        files: {
          'public/stylesheets/main.css': 'assets/stylesheets/main.scss'
        }
      }
    },

    cssmin: {
      build: {
        src: 'public/stylesheets/main.css',
        dest: 'public/stylesheets/main.min.css'
      }
    },

    browserify: {
      build: {
        src: 'assets/javascripts/main.js',
        dest: 'public/javascripts/main.js'
      }
    },

    watch: {
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

      uglify: {
        options: {
          spawn: false
        },

        files: ['public/javascripts/main.js'],
        tasks: ['uglify']
      },

      jslint: {
        options: {
          spawn: false
        },

        files: [
          'Gruntfile.js',
          'assets/javascripts/**/*.js',
          'assets/javascripts/*.js'
        ],

        tasks: ['jslint']
      },

      stylesheets: {
        options: {
          spawn: false
        },

        files: [
          'assets/stylesheets/**/*.scss',
          'assets/stylesheets/*.scss'
        ],

        tasks: ['sass', 'cssmin']
      }
    }
  });

  grunt.registerTask('default', ['sass', 'cssmin', 'browserify', 'uglify', 'jslint']);
};
