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
