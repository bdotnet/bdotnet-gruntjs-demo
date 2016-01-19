module.exports = function (grunt) {
    //specify any task related configuration
    grunt.initConfig({
        wiredep: {
            task: {
                src: ['app/index.html'],
                options: {
                    devDependencies: true
                }
            }
        },
        watch: {
            bowerInstall: {
                files: ['bower_components/*'],
                tasks: ['wiredep']
            },
            liveReload: {
                files: ['app/index.html', 'app/js/*.js', 'app/css/*.css', 'app/partials/*.html'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    open: true,
                }
            }
        },
        exec: {
            installBower: {
                cmd: 'bower install'
            }
        }
    });
    
    //register the custom task 
    grunt.registerTask('HelloWorld', 'Hello World Task', function () {
        grunt.log.write('Hello World');
    });
    
    //load all the required Npm tasks
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['HelloWorld']);
    grunt.registerTask('wireDependencies', ['wiredep']);
    grunt.registerTask('LiveWireUp', ['watch:bowerInstall']);
    grunt.registerTask('build', ['exec:installBower']);
    grunt.registerTask('serve', ['connect:livereload', 'watch']);
};