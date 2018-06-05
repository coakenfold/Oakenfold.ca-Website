module.exports = function(grunt) {
    // @@ grunt watch-css-task
    //
    // This task is run when grunt watch-css is active and changes are detected
    // 
    grunt.registerTask('watch-css-task', [
        'newer:copy:html',
        'newer:copy:media',
        'newer:copy:media_svg',
        'autoprefixer:deploy'
    ]);
};