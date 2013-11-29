module.exports = function (grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['public/index.html']
            }
        },

        jslint: {
            all: {
                src: ['scripts/*.js'],
                options: {
                    errorsOnly: true
                },
                directives: {
                    node: true,
                    todo: true
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
                    config: 'Compass.rb'
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
            html: {
                files: ['public/index.html'],
                tasks: ['htmlhint'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['scripts/**/*.js'],
                tasks: ['buildjs'],
                options: {
                    livereload: true
                }
            },

            all: {
                files: ['scripts/**/*.js'],
                tasks: ['jslint']
            },

            css: {
                files: ['sass/**/*.scss'],
                tasks: ['buildcss'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('buildcss',  ['compass', 'cssmin']);
    grunt.registerTask('buildjs',  ['browserify', 'uglify']);
};
