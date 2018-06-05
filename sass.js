var sass = require('node-sass');
var fs = require('fs');
sass.render({
  file: './development/css/oakenfold.scss'
}, function(err, result) {
    if(!err){
        // No errors during the compilation, write this result on the disk
        fs.writeFile('./deploy/css/oakenfold.css', result.css, function(err){
          if(!err){
            //file written on disk
          }
        });
      }
});