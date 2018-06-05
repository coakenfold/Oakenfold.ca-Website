var copy = require('copy');

console.log('Starting to Copy...');

copy('./public/**', './deploy', function(err, files) {
    if (err) throw err;
    console.log("- 'public' copy successful");
});
