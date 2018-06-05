var critical = require('critical');

critical.generate({
    inline: true,
    base: 'deploy/',
    src: 'index.html',
    dest: 'index.html',
    minify: true,
    width: 1300,
    height: 900
});