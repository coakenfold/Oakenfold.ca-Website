var copy = require('copy');

console.log('Starting to Copy...');

copy('./public/favicons/**', './_site', function(err, files) {
    if (err) throw err;
    console.log("- 'favicons' copy successful");
});

copy('./public/images/**', './_site/images', function(err, files) {
    if (err) throw err;
    console.log("- 'images' copy successful");
});
