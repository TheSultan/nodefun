var fs = require('fs');
var path = require('path');
dir = process.argv[2];
ext = '.' + process.argv[3];
fs.readdir(dir, (err, files) => {
  if (err) return console.error(err)
  files.forEach( file => {
    if (path.extname(file) === ext) console.log(file) 
  });
});
