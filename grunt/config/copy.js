/* ---------------------------------------------
  @@ copy
================================================ */
module.exports = {
    // Copy HTML
    // -----------------------------------------
    html: {
        cwd: 'development',
        src: ['*.html'],
        dest: 'deploy/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    // Copy media: images, svg, svg png/css fallbacks
    // -----------------------------------------
    media: {
        cwd: 'development/media',
        src: ['img/**/*'],
        dest: 'deploy/media/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    media_svg: {
        cwd: 'development/media/svgmin',
        src: ['*.svg'],
        dest: 'deploy/media/svg/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    // Copy our js
    // -----------------------------------------
    js_custom: {
        cwd: 'development/js',
        src: ['**/*.js', '!vendor/**'],
        dest: 'deploy/js/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    // Copy vendor js
    // -----------------------------------------
    js_require: {
        cwd: 'development/js/vendor/require',
        src: ['**/*.js', '!source/**'],
        dest: 'deploy/js/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    js_webshims: {
        cwd: 'development/js/vendor/webshim',
        src: ['**/*', '!source/**'],
        dest: 'deploy/js/',
        expand: true,
        flatten: false,
        filter: 'isFile'
    },
    js_vendor: {
        cwd: 'development/js/vendor',
        src: ['**/*.js', '**/*.map', '!**/*.txt', '!source/**', '!jquery/source/**/*', '!require/**/*', '!webshim/**/*'],
        dest: 'deploy/js/vendor',
        expand: true,
        flatten: false,
        filter: 'isFile'
    }
}