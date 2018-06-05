module.exports = function(grunt) {
    // @@ grunt watch-all-task
    //
    // This task is run when grunt watch is active and changes are detected
    // 
    grunt.registerTask('watch-all-task', [
        'svgmin',
        'copy:html',
        'copy:media',
        'copy:media_svg',
        'autoprefixer:deploy'
    ]);
};