var ls = require('./node_modules/ls.js');
ls(process.argv[2], process.argv[3], (err, files) => {
      if (err) return console.error('An error occured: ', err);
      else files.forEach(f => console.log(f));
    });
