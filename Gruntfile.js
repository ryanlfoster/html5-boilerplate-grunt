module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      all: {
        src: ['Gruntfile.js', 'scripts/*.js', 'scripts/**/*.js'],

        options: {
          errorsOnly: true
        },

        directives: {
          node: true,
          todo: true,
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
        src: 'scripts/main.js',
        dest: 'public/javascripts/main.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true,
        limit: 10
      },

      prod: {
        tasks: ['compass:watch', 'watch:cssmin', 'watch:jslint', 'watch:browserify', 'watch:uglify']
      },

      dev: {
        tasks: ['compass:watch', 'watch:jslint', 'watch:browserify']
      }
    },

    watch: {
      browserify: {
        files: ['scripts/**/*.js', 'scripts/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false
        }
      },

      uglify: {
        files: ['public/javascripts/main.js'],
        tasks: ['uglify'],
        options: {
          spawn: false
        }
      },

      jslint: {
        files: ['Gruntfile.js', 'scripts/**/*.js', 'scripts/*.js'],
        tasks: ['jslint'],
        options: {
          spawn: false
        }
      },

      cssmin: {
        files: ['public/stylesheets/main.css'],
        tasks: ['cssmin'],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.registerTask('default', ['jslint', 'compass:compile', 'cssmin', 'browserify', 'uglify']);
  grunt.registerTask('prod', ['concurrent:prod']);
  grunt.registerTask('dev', ['concurrent:dev']);
};
