  /*****************************************
    Enable Swig templating engine / BEGIN
  ******************************************/
  
  var swig = require('gulp-swig');
  //change src glob to scripts dir
  config.views.inject.src = function() {
    return [dirs.src.views + 'scripts/**/*'];
  }
  //replace gulp-changed plugin with gulp-swig
  config.views.inject.limit = function(stream) {
    stream = stream.pipe(swig({
      defaults: { cache: false },
      setup: function(swig) {
        swig.setDefaults({
          //set base dir to layouts, thanks to this you can use e.g. {% extends "default.swig" %}
          loader: swig.loaders.fs(dirs.src.views + 'layouts')
        });
      },
      //variable context (data) passed to all templates
      data: {}
    }));

    this.cancel();
    return stream;
  }

  /*****************************************
    Enable Swig templating engine / END
  ******************************************/
