module.exports = function(grunt) {
    // @@ grunt watch-css-task
    //
    // This task is run when grunt watch-css is active and changes are detected
    // 
    grunt.registerTask('watch-css-task', [
        //'clean',
        'sass',
        'newer:copy:media',
        'newer:copy:media_svg',
        'newer:copy:media_svg_css',
        'newer:copy:media_svg_png',
        'autoprefixer:deploy'
    ]);
};