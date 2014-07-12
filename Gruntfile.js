module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        clean: {
            build: ['build/'],
            tmp: ['build/css/tmp/']
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/tmp/reset.css': 'scss/reset.scss',
                    'build/css/tmp/main.css': 'scss/main.scss',
                },
            },
        },

        imageoptim: {
            main: {
                options: {
                    imageAlpha: true,
                    quitAfter: true
                },
                src: ['images']
            },
        },

        watch: {
            jekyll: {
                files: ['**/*', '!build/**/*', '!node_modules/**/*'],
                tasks: ['build']
            },
            livereload: {
                files: ['build/**/*'],
                options: {
                    livereload: true
                },
            },
        },

        cssmin: {
            combine: {
                files: {
                    'build/css/styles.css': ['build/css/tmp/reset.css', 'build/css/tmp/main.css']
                },
            },
        },

        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'build/js/script.min.js': ['js/custom.js']
                },
            },
        },

        jekyll: {
            dev: {
                options: {
                    src: '.',
                    dest: 'build',
                    config: ['_config.yml']
                },
            },
        },

        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 4000,
                    base: 'build'
                }
            }
        },

    });

    grunt.registerTask('build', ['jekyll:dev', 'sass', 'cssmin', 'clean:tmp', 'uglify']);
    grunt.registerTask('default', ['imageoptim', 'build']);
};