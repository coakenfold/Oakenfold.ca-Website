/* ---------------------------------------------
  @@ watch
================================================ */
module.exports = {
    all: {
        files: [
            'development/sass/**/*.scss',
            '!development/sass/vendor/**/*',
            'development/js/**/*',
            '!development/js/vendor/**/*',
            'development/html/**/*'
        ],
        tasks: ['watch-all-task'],
        options: {
            livereload: true,
            interrupt: true
        }
    },
    css: {
        files: [
            'development/sass/**/*.scss',
            '!development/sass/vendor/**/*'
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
            'development/sass/**/*.scss'
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