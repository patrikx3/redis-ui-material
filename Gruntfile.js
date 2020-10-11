const utils = require('corifeus-utils');

module.exports = (grunt) => {


    const builder = require(`corifeus-builder`);
    const gruntUtil = builder.utils;
    const loader = new builder.loader(grunt);
    loader.js({

        jit: {
            injector: 'grunt-injector',
        },
        config: {
            injector: {
                options: {},
                jsAngular: {
                    options: {
                        transform: function (filePath) {
                            const relative = gruntUtil.injectorRelativePathGenerator({
                                srcDir: 'src/angular/',
                                filePath: filePath,
                            })
                            return `require('./${relative}');`;
                        },
                        starttag: '//injector-angular-start',
                        endtag: '//injector-angular-end'
                    },
                    files: {
                        'src/angular/injector.js': [
                            'src/angular/**/*.js',
                            '!src/angular/injector.js',
                            '!src/angular/boot.js',
                            '!src/angular/routes.js',
                        ],
                    }
                },

                sass: {
                    options: {
                        transform: function (filePath) {
                            const relative = gruntUtil.injectorRelativePathGenerator({
                                srcDir: 'src/',
                                filePath: filePath,
                            })
                            return `@import "./${relative}";`;
                        },
                        starttag: '//injector-sass-start',
                        endtag: '//injector-sass-end',
                    },
                    files: {
                        'src/injector.scss': [
                            'src/**/*.scss',
                            '!src/scss/index.scss',
                            '!src/injector.scss',
                            '!src/vendor.scss',
                        ]
                    }
                },

            },

            watch: {
                options: {
                    atBegin: true
                },
                js: {
                    files: [
                        'src/angular/**/*.js',
                        '!src/angular/injector.js',
                        '!src/angular/boot.js',
                        '!src/angular/routes.js',
                    ],
                    tasks: [
                        'injector:jsAngular',
                    ],
                },
                sass: {
                    files: [
                        'src/**/*.scss',
                        '!src/scss/index.scss',
                        '!src/injector.scss',
                    ],
                    tasks: [
                        'injector:sass'
                    ],
                },
            },

        }
    });

    grunt.registerTask('default', ['cory-npm', 'clean', 'cory-replace', 'cory:license']);
    grunt.registerTask('inject', ['watch:js', 'watch:sass']);
    grunt.registerTask('build', ['injector']);


    grunt.registerTask('publish', async function() {
        const done = this.async()
        const cwd = process.cwd()

        try {

            await gruntUtil.spawn({
                grunt: grunt,
                gruntThis: this,

            }, {
                cmd: `${cwd}/node_modules/.bin/grunt${gruntUtil.commandAddon}`,
                args: [
                    'injector'
                ]
            });


            await gruntUtil.spawn({
                grunt: grunt,
                gruntThis: this,

            }, {
                cmd: `${cwd}/node_modules/.bin/webpack${gruntUtil.commandAddon}`,
                args: [
                    '--config',
                    './src/builder/webpack.config.js',
                    '--mode=production'
                ]
            });

            done()
        } catch(e) {
            done(e)
        }
    })

}
