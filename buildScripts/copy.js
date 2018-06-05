var copy = require('copy');

console.log('Starting to Copy...');

copy('oakenfold/**', 'public/libraries/oakenfold', function(err, files) {
    if (err) throw err;
    console.log('- Oakenfold copy successful');
});
