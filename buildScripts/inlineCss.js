var critical = require('critical');
console.log('critical - STARTING...');
critical.generate({
    inline: true,
    base: '_site/',
    src: 'index.html',
    dest: 'index.html',
    minify: true,
    width: 1300,
    height: 1850
});
