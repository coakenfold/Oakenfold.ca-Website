module.exports = function(grunt) {
    // @@ grunt watch-js
    //
    // Watches just the JS in the /development folder
    //
    // When changes are detected the 'watch-js-task' is run (via watch:js)
    //
    // NOTE: launches a livereload server for auto refreshes in the browser
    //
    grunt.registerTask('watch-js', [
        'watch:js'
    ]);
};