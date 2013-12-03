module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jslint: {
      code: {
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
        files: {
          'public/javascripts/main.min.js': ['public/javascripts/main.js']
        }
      }
    },

    compass: {
      dist: {
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
      js: {
        src: 'scripts/main.js',
        dest: 'public/javascripts/main.js'
      }
    },

    watch: {
      scripts: {
        files: ['Gruntfile.js', 'scripts/**/*.js', 'scripts/*.js'],
        tasks: ['buildjs', 'test'],
        options: {
          livereload: true
        }
      },

      styles: {
        files: ['sass/**/*.scss', 'sass/*.scss'],
        tasks: ['buildcss'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.registerTask('default', ['buildcss', 'buildjs']);

  grunt.registerTask('test', ['jslint']);
  grunt.registerTask('buildcss', ['compass', 'cssmin']);
  grunt.registerTask('buildjs', ['browserify', 'uglify', 'test']);
};
