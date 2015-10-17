({
    mainConfigFile: 'app.js',
    baseUrl: "./",
    name: "main",
    out: "../rjs-test/app.js",
    removeCombined: true,
    findNestedDependencies: true,
    optimize: "uglify2",
    uglify2: {
        compress: {
            dead_code: true,
            drop_debugger: true,
            unused: true,
            warnings: true,
            drop_console: true
        }
    }
})