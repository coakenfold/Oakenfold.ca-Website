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
        cwd: 'development/media/svg/source',
        src: ['**/*.svg'],
        dest: 'development/media/svg/svgmin',
        ext: '.svg'
    }
}