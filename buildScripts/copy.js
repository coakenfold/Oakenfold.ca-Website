var copy = require('copy');

console.log('copy - STARTING...');
copy('./public/favicons/**', './_site', function(err, files) {
    if (err) throw err;
    console.log('copy - SUCCESS: favicons');
});

copy('./public/images/**', './_site/images', function(err, files) {
    if (err) throw err;
    console.log('copy - SUCCESS: images');
});
