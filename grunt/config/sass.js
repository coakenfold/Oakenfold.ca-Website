/* ---------------------------------------------
    @@ sass
================================================ */
module.exports = {
    options: {
        sourceMap: false,
        sourceComments: true,
        includePaths: [
            "development/sass/vendor/foundation/scss"
        ]
    },
    development: {
        files: {
            'deploy/css/oakenfold.css': 'development/sass/oakenfold.scss'
        }
    }
}
