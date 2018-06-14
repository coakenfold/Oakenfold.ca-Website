
var fs = require('fs');
var minify = require('html-minifier').minify;

console.log('htmlMinify - STARTING...');
fs.readFile('_site/index.html', 'utf8', function(err, data){
    if (err) {
        console.log('htmlMinify - ERROR: opening file.');
        return;
    }
    var result = minify(data, {
        collapseWhitespace: true,
        removeComments: true,
        removeEmptyAttributes: true

    });
    fs.writeFile('_site/index.html', result, 'utf8', function(err){
        if (err) {
            console.log('htmlMinify - ERROR: writing file.');
            return;
        }
        console.log('htmlMinify - SUCCESS: writing file.');
    })
});
