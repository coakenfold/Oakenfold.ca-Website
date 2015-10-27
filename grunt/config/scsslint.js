/* ---------------------------------------------
  @@ scsslint
================================================ */
module.exports = {
    development: [
        'development/css/**/*.scss'
    ],
    components: [
        'development/css/components/*.scss'
    ],
    options: {
        force: true,
        config: 'development/css/lint/scss-lint.yml',
        exclude: ['development/css/base/_normalize.scss',
            'development/css/vendor/**/*.scss'
        ],
        reporterOutput: 'development/lint/scss-lint-report.xml'
    }
}