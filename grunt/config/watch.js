/* ---------------------------------------------
  @@ watch
================================================ */
module.exports = {
    all: {
        files: [
            'development/css/**/*.scss',
            '!development/css/vendor/**/*',
            'development/js/**/*',
            '!development/js/vendor/**/*',
            'development/html/**/*',
            'development/index.html',
            'development/html.html'
        ],
        tasks: ['watch-all-task'],
        options: {
            livereload: true,
            interrupt: true
        }
    },
    css: {
        files: [
            'development/css/**/*.scss',
            '!development/css/vendor/**/*'
        ],
        tasks: ['watch-css-task'],
        options: {
            livereload: true,
            interrupt: true,
            spawn: false
        }
    },
    lint: {
        files: [
            'development/css/**/*.scss'
        ],
        tasks: ['watch-lint-task'],
        options: {
            livereload: true,
            interrupt: true
        }
    },
    js: {
        files: [
            'development/js/**/*'
        ],
        tasks: ['watch-js-task'],
        options: {
            livereload: true
        }
    }
}