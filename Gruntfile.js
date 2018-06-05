module.exports = function(grunt) {
    /* ================================================
      @@ Enable plugins
    ================================================ */
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-newer');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-svgmin');


    /* ================================================
      @@ Task configuration/options
    ================================================ */
    
    // Loads up task configuration files found in ./grunt/config/*.js
    //
    // Note: The file name should be the same as the task name
    //     EG: the 'watch' task config file would be found at
    //     ./grunt/config/watch.js
    //
    // Note: The file name can also be used to invoke the task directly
    //       This is useful if a task isn't included in a custom task,
    //       or you just want to run a sub-task as a one-off operation.
    //
    //       EG: To run the 'copy' task found at ./grunt/config/copy.js
    //           This will run all of 'copy's sub-tasks
    //           In the terminal run: grunt copy
    //
    //           But to run just a sub-task (eg: html)
    //           include the sub-task name in the grunt command
    //           In the terminal run: grunt copy:html
    //
    function load_configs(cwd, patterns) {
        var object = {},
            key,
            files = grunt.file.expand({'cwd': cwd}, patterns);

        grunt.util._.each(files,function(value,key,list){
            key = value.replace(/\.js$/,'');
            object[key] = require(cwd + value);
        });
        return object;
    }

    var config = {
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.util._.extend(config, load_configs('./grunt/config/','*.js'));

    grunt.initConfig(config);



    /* ================================================
      @@ Register Tasks
    ================================================ */
    
    // Loads up task files in ./grunt/tasks/*.js
    //
    // Note: The file name matches the custom task name||command
    //     EG: The file/task found at: ./grunt/tasks/development-lint.js
    //     Can be run in the terminal using: grunt development-lint
    //
    grunt.loadTasks('grunt/tasks');
};