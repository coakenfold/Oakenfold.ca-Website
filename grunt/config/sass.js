/* ---------------------------------------------
    @@ sass
================================================ */
module.exports = {
    options: {
        sourceMap: false,
        sourceComments: true,
        /*includePaths: [
        ]*/
    },
    development: {
        files: {
            'deploy/css/oakenfold.css': 'development/css/oakenfold.scss'
        }
    }
}
