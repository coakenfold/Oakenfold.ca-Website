var critical = require('critical');

critical.generate({
    inline: true,
    base: 'public/',
    src: 'index.html',
    dest: 'index-critical.html',
    minify: true,
    width: 1300,
    height: 900
});