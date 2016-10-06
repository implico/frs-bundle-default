  /***********************
    Agnostic mode / BEGIN
  ************************/

  //copy sass sources
  config.customDirs.items.push({
    name: 'agnostic mode SASS',
    src: dirs.src.styles + '**/*',
    dest: dirs.dist.main + 'app/sass/',
    inject: {
      src: true,
      limit: false,
      dest: true,

      watch: false,

      clean: true
    }
  });

  //copy app directory
  config.customDirs.items.push({
    name: 'agnostic mode app',
    src: null,
    dest: dirs.dist.main + 'app/',
    inject: {
      src: function(stream) {
        //we need the "dot" option set to true to copy .bowerrc
        stream = this.appData.gulp.src(this.appData.app.taskUtils.sanitizeGlob(this.appData.dirs.src.main + 'app/**/*'), { dot: true });
        return this.cancel(stream);
      },
      limit: false,
      dest: true,

      watch: false,

      clean: true
    }
  });

  //delete dist bower_components on clean
  config.clean.inject.del = function(glob) {
    glob.push(dirs.dist.main + 'bower_components');
    return glob;
  }

  /***********************
    Agnostic mode / END
  ************************/
