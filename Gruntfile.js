module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      build: {
        options: {
          style: 'expanded',
          lineNumbers: true,
          quiet: true
        },

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

    browserify: {
      build: {
        src: 'assets/javascripts/main.js',
        dest: 'public/javascripts/main.js',

        options: {
          debug: true,
          shim: {
            jQuery: {
              path: 'bower_components/jquery/dist/jquery.js',
              exports: '$'
            }
          },
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
      stylesheets: {
        options: {
          spawn: false
        },

        files: [
          'assets/stylesheets/**/*.scss',
          'assets/stylesheets/*.scss'
        ],

        tasks: ['sass', 'cssmin']
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

  grunt.registerTask('default', ['sass', 'cssmin', 'jslint', 'browserify', 'exorcise', 'uglify']);
};
