module.exports = function(grunt) {
    // @@ grunt icons
    //
    grunt.registerTask('icons', [
        'svgmin',
        'copy:media_svg',
        'copy:media_svg_css',
        'copy:media_svg_png'
    ]);
};