/* ---------------------------------------------
  @@ scsslint
================================================ */
module.exports = {
    development: [
        'development/sass/**/*.scss'
    ],
    components: [
        'development/sass/components/*.scss'
    ],
    options: {
        force: true,
        config: 'development/sass/lint/scss-lint.yml',
        exclude: ['development/sass/_foundation-components.scss',
            'development/sass/_foundation-settings.scss',
            'development/sass/base/_normalize.scss',
            'development/sass/vendor/**/*.scss'
        ],
        reporterOutput: 'development/sass/lint/scss-lint-report.xml'
    }
}