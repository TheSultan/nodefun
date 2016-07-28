var fs = require('fs');
var path = require('path');
fs.readdir(process.argv[2], (err, data) => {
  for (var i = 0; i < data.length; i++) {
    file = data[i];
    if (path.extname(file) === '.' + process.argv[3]) { console.log(file); } 
  }
});
