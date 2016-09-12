  /********************
  * Incremental assets / BEGIN
  *
  * @author Bartosz Sak <bartosz.sak@implico.pl>
  *********************/

  var fs = require('fs'),
      minimist = require('minimist'),
      dirCompare = require('dir-compare'),
      newer = require('gulp-newer'),
      tinypng, clone, filter, merge2;

  var opts = minimist(process.argv.slice(2), {
    boolean: ['iaclean']
  });

  config.custom.incrementalAssets = {
    distImagesDir: dirs.dist.main + 'img/',
    clean: opts.iaclean,
    tinyPngApiKey: ''
  }

  var iaConfig = config.custom.incrementalAssets;

  if (iaConfig.tinyPngApiKey) {
    tinypng = require('gulp-tinypng');
    clone = require('gulp-clone');
    gulpIgnore = require('gulp-ignore');
    merge = require('merge2');
  }

  //incremental images - change dest dir
  dirs.dist.images = dirs.src.main + 'z-cache/img/';
  dirs.dist.sprites.main = dirs.src.main + 'z-cache/sprites/';

  //images: replace gulp-changed with gulp-newer
  config.images.inject.limit = function(stream) {
    return this.cancel(stream.pipe(newer(dirs.dist.images)));
  }

  //images: enable optimization
  delete config.images.dev.inject.optimize;

  //images: optimize with tinypng
  config.images.inject.optimize = function(stream) {
    if (tinypng) {
      this.iaStreamTinyPng = stream
        .pipe(clone())
        .pipe(gulpIgnore.include(['**/*.png']))
        .pipe(tinypng(iaConfig.tinyPngApiKey))
        .pipe(this.appData.gulp.dest(this.appData.dirs.dist.images));
      stream = stream.pipe(gulpIgnore.exclude(['**/*.png']));//.pipe(debug());
    }
    return stream;
  }

  //images: merge with tinypng stream
  config.images.inject.finish = function(stream) {
    if (tinypng && this.iaStreamTinyPng) {
      stream = merge(stream, this.iaStreamTinyPng);
    }
    return stream;
  }

  //images: disable reload
  config.images.inject.reload = false;

  //images: replace removal with synchronization
  config.clean.inject.images = function(glob) {
    if (!iaConfig.clean) {
      //get dir difference
      try {
        var compareRes = dirCompare.compareSync(dirs.src.images, dirs.dist.images, {
          excludeFilter: dirs.dist.images
        });
        //extract "right" redundant files
        var redundantFiles = compareRes.diffSet.filter((v) => {
          return v.state == 'right';
        }).map((v) => {
          return v.path2 + v.name2;
        });
        glob = glob.concat(redundantFiles);
      }
      catch (ex) {}
    }
    else {
      glob.push(dirs.dist.images);
    }
    return this.cancel(glob);
  }

  //images: watch optimized _cache dir and copy to dist
  config.customDirs.items.push({
    name: 'incremental assets:images',
    src: dirs.dist.images + '**/*',
    dest: iaConfig.distImagesDir
  });

  //sprites: enable optimization
  delete config.sprites.dev.inject.imgOptimize;

  //sprites generated only: if watch mode or the dest sprite does not exist
  config.sprites.inject.src = function() {
    if (!this.taskParams.isWatch) {
      var spriteExists = true;
      try {
        fs.accessSync(dirs.dist.sprites.main + this.taskData.itemInfo.options.imgName, fs.R_OK);
      }
      catch (ex) {
        spriteExists = false;
      }
      if (spriteExists) {
        this.cancel();
      }
    }
  }

  //sprites: optimize with tinypng
  config.sprites.inject.imgOptimize = function(stream) {
    if (tinypng) {
      stream = stream.pipe(tinypng(iaConfig.tinyPngApiKey));
      this.cancel();
    }
    return stream;
  }

  //images: disable reload
  config.sprites.inject.reload = false;

  //sprites: clean all styles only if forced, otherwise remove redundant
  config.clean.inject.spritesStyles = function(glob) {
    if (!iaConfig.clean) {
      //remove redundant stylesheets
      glob.push(dirs.dist.sprites.styles + '**/*');
      glob = glob.concat(config.sprites.items.map((v) => {
        return '!' + dirs.dist.sprites.styles + v.options.cssName;
      }));
      this.cancel();
    }
    return glob;
  }

  //sprites: clean all images only if forced, otherwise remove redundant
  config.clean.inject.spritesImages = function(glob) {
    if (!iaConfig.clean) {
      //remove redundant sprite images
      glob.push(dirs.dist.sprites.main + '**/*');
      glob = glob.concat(config.sprites.items.map((v) => {
        return '!' + dirs.dist.sprites.main + v.options.imgName;
      }));
      this.cancel();
    }
    return glob;
  }

  //sprites: watch optimized _cache dir and copy to dist
  config.customDirs.items.push({
    name: 'incremental assets:sprites',
    src: dirs.dist.sprites.main + '**/*',
    dest: iaConfig.distImagesDir
  });

  /********************
    Incremental assets / END
  *********************/
