module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          style: 'compressed',
          quiet: true,
          sourcemap: true
        },

        files: {
          'public/stylesheets/main.min.css': 'assets/stylesheets/main.scss'
        }
      }
    },

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
          indent: 2,
          nomen: true
        }
      }
    },

    browserify: {
      build: {
        src: 'assets/javascripts/main.js',
        dest: 'public/javascripts/main.js',

        options: {
          debug: true,
          alias: 'bower_components/jquery/dist/jquery.js:jquery',
          aliasMappings: [
            {
              cwd: 'assets/javascripts/modules',
              src: ['*.js', '**/*.js'],
              dest: 'modules'
            }
          ]
        }
      }
    },

    exorcise: {
      build: {
        files: {
          'public/javascripts/main.map': ['public/javascripts/main.js']
        }
      }
    },

    uglify: {
      build: {
        options: {
          sourceMap: true,
          sourceMapIn: 'public/javascripts/main.map'
        },

        files: {
          'public/javascripts/main.min.js': ['public/javascripts/main.js']
        }
      }
    },

    watch: {
      sass: {
        options: {
          spawn: false
        },

        files: [
          'assets/stylesheets/**/*.scss',
          'assets/stylesheets/*.scss'
        ],

        tasks: ['sass']
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
    }
  });

  grunt.registerTask('default', ['sass', 'jslint', 'browserify', 'exorcise', 'uglify']);
};
