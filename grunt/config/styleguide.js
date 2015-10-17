/* ---------------------------------------------
  @@ styleguide
================================================ */
module.exports = {
    'options': {
        'template': {
            'src': 'development/sass/vendor/styleguide/kss'
        },
        'framework': {
            'name': 'kss',
            'options': {
                'css': [
                    'deploy/css/fyndit.css',
                    'deploy/css/fyndit-styleguide.css'
                ]
            }
        }
    },
    'all': {
        'files': [{
            'deploy/styleguide': ['development/sass/**/*.scss', '!development/sass/base/_normalize.scss']
        }]
    }
}