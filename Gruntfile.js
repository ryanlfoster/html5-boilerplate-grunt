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

    compass: {
      watch: {
        options: {
          config: 'compass-config.rb',
          watch: true
        }
      },

      compile: {
        options: {
          config: 'compass-config.rb'
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

    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 10
      },

      prod: {
        tasks: [
          'compass:watch',
          'watch:browserify',
          'watch:uglify',
          'watch:jslint',
          'watch:cssmin'
        ]
      },

      dev: {
        tasks: [
          'compass:watch',
          'watch:browserify',
          'watch:jslint'
        ]
      }
    },

    watch: {
      browserify: {
        files: [
          'assets/javascripts/**/*.js',
          'assets/javascripts/*.js'
        ],

        tasks: ['browserify']
      },

      uglify: {
        files: ['public/javascripts/main.js'],
        tasks: ['uglify']
      },

      jslint: {
        files: [
          'Gruntfile.js',
          'assets/javascripts/**/*.js',
          'assets/javascripts/*.js'
        ],

        tasks: ['jslint']
      },

      cssmin: {
        files: ['public/stylesheets/main.css'],
        tasks: ['cssmin']
      }
    }
  });

  grunt.registerTask('default', ['compass:compile', 'browserify', 'uglify', 'jslint', 'cssmin']);
  grunt.registerTask('prod', ['concurrent:prod']);
  grunt.registerTask('dev', ['concurrent:dev']);
};
