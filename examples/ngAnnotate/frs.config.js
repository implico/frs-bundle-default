  //inject ngAnnotate
  
  var ngAnnotate = require('gulp-ng-annotate');
  config.js.inject.concat = function(stream) {
    return stream.pipe(ngAnnotate({ add: true }));
  }
