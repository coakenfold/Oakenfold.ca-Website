module.exports = function(grunt) {
    // @@ grunt watch-all-task
    //
    // This task is run when grunt watch is active and changes are detected
    // 
    grunt.registerTask('watch-all-task', [
        'clean',
        'sass',
        'newer:copy:html',
        'newer:copy:media',
        'newer:copy:media_svg',
        'autoprefixer:deploy'
    ]);
};