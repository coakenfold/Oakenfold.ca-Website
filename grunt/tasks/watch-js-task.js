module.exports = function(grunt) {
    // @@ grunt watch-js-task
    //
    // This task is run when grunt watch-js is active and changes are detected
    //
    grunt.registerTask('watch-js-task', [
        'babel',
        'newer:copy'
    ]);
};