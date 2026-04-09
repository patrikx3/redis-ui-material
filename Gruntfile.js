const utils = require('corifeus-utils');

module.exports = (grunt) => {


    const builder = require(`corifeus-builder`);
    const gruntUtil = builder.utils;
    const loader = new builder.loader(grunt);
    loader.js({


    });

    grunt.registerTask('default', ['cory-npm', 'clean', 'cory-replace', 'cory:license', 'publish']);

    grunt.registerTask('build', ['publish']);


    grunt.registerTask('publish', async function() {
        const done = this.async()
        const cwd = process.cwd()

        try {

            // Build Angular (ng build) and React (vite) in parallel
            await Promise.all([
                // Angular → dist/
                gruntUtil.spawn({
                    grunt: grunt,
                    gruntThis: this,
                }, {
                    cmd: `${cwd}/node_modules/.bin/ng${gruntUtil.commandAddon}`,
                    args: [
                        'build',
                    ]
                }),

                // React → dist-react/
                gruntUtil.spawn({
                    grunt: grunt,
                    gruntThis: this,
                }, {
                    cmd: `${cwd}/node_modules/.bin/vite${gruntUtil.commandAddon}`,
                    args: [
                        'build',
                        '--config',
                        './src/react/vite.config.ts',
                    ]
                }),
            ])

            done()
        } catch(e) {
            done(e)
        }
    })

}
