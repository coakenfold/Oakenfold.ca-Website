/* ---------------------------------------------
  @@ grunticon
================================================ */
module.exports = {
    development: {
        files: [{
            expand: true,
            cwd: '.',
            src: ['development/media/svg/svgmin/**/*.svg'],
            dest: 'development/media/svg/grunticon'
        }],
        options: {
            pngfolder: 'fallback/',
            pngpath: '/media/img/fallback',
            cssprefix: '.icon-'//,
            // colors: {
            //     'want': '#75bad5',
            //     'find': '#a3c966',
            //     'mine': '#f19429'
            // },
            // customselectors: {
            //   "*": [".btn--$1 .icon"]
            // }
        }
    }
}