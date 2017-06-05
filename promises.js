var fs = require('fs');





var readFile = function() {
  return new Promise(function(resolve, reject) {
    fs.readFile('./package.json', function(err, file){
        return err ? reject(err) : resolve(file.toString());
    });

  });
}

var readAllFiles = function(){
  var promises = [readFile(), readFile(), readFile()];
  return Promise.all(promises);
}




readAllFiles()
  .then(function(files) {
    console.log((files.length));
  });
