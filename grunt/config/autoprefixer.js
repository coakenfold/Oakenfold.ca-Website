/* ---------------------------------------------
    @@ autoprefixer
================================================ */
module.exports = {
    deploy: {
        expand: true,
        flatten: true,
        src: 'deploy/css/*.css',
        dest: 'deploy/css/',
        extDot: 'last'
    }
}
