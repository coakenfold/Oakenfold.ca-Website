module.exports = function(grunt) {
    grunt.registerTask('build', [
        'svgmin',
        'copy:html',
        'copy:media',
        'copy:media_svg'
    ]);
};