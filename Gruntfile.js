module.exports = function (grunt) {
  'use strict';

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    php: {
      server: {
        options: {
          keepalive: true,
          hostname: '0.0.0.0',
          port: grunt.option('port') || 8000,
          base: grunt.option('base') || '.'
        }
      }
    },

    concurrent: {
      target: {
        options: {
          logConcurrentOutput: true
        },

        tasks: [
          'php:server',
          'watch'
        ]
      }
    },

    sass: {
      build: {
        options: {
          style: 'expanded',
          quiet: true,
          sourcemap: true
        },

        files: {
          'public/stylesheets/main.css': 'assets/stylesheets/main.scss'
        }
      }
    },

    cssmin: {
      build: {
        options: {
          keepSpecialComments: 0
        },

        files: {
          'public/stylesheets/main.min.css': 'public/stylesheets/main.css'
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
          alias: [
            'bower_components/jquery/dist/jquery.js:jquery'
          ],
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
          'public/javascripts/main.js.map': ['public/javascripts/main.js']
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

    copy: {
      images: {
        expand: true,
        cwd: 'assets/images/',
        src: [
          '**'
        ],
        dest: 'public/images/',
        filter: 'isFile'
      },

      fonts: {
        expand: true,
        cwd: 'assets/fonts/',
        src: [
          '**'
        ],
        dest: 'public/fonts/',
        filter: 'isFile'
      }
    },

    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },

        files: [
          {
            expand: true,
            cwd: 'public/images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'public/images/'
          }
        ]
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

  grunt.registerTask('default', [
    'sass', 'cssmin', 'copy:images', 'imagemin', 'copy:fonts',
    'jslint', 'browserify', 'exorcise', 'uglify'
  ]);

  grunt.registerTask('server', ['concurrent']);
};
