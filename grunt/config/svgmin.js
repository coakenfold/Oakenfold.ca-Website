/* ---------------------------------------------
  @@ svgmin
================================================ */
module.exports = {
    options: {
        plugins: [{
            removeViewBox: false
        }, {
            removeUselessStrokeAndFill: false
        }]
    },
    dist: {
        expand: true,
        cwd: 'development/media/svg',
        src: ['**/*.svg'],
        dest: 'development/media/svgmin',
        ext: '.svg'
    }
    
    //dist: {
    //    files: {
    //        'development/media/svgmin/logo-twitter.svg': 'development/media/svg/logo-twitter.svg'
    //    }
    //}
}
