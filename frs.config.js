//custom config options
module.exports = function(config, dirs) {

  //require a core module
  //var extend = require(dirs.rootModules + 'extend');


  /********************
    Styles example
  *********************/

  //change sourcemaps root
  // config.styles.sourceMapsRoot = '/src/';

  //enable sourcemaps for prod
  // config.styles.prod.sourceMaps = true;


  /********************
    Sprites example
  *********************/

  //modify default sprites item - example for animations
  // config.sprites.items[0].options.algorithm = 'left-right';
  // config.sprites.items[0].options.algorithmOpts = { sort: false };


  //add a sprites item (for directory "img/sprites-home")
  /*
  config.sprites.items.push({
    imgSource: dirs.src.img + 'sprites-home/',
    imgDest: dirs.dist.img,
    options: {
      imgName: 'sprites-home.png',
      imgPath: '../img/sprites-home.png',
      cssName: '_sprites-home.scss',  //remember to include in your stylesheets
      cssSpritesheetName: 'spritesheet-home',
      cssVarMap: function (sprite) {
        sprite.name = 'sprite-home_' + sprite.name;
      }            
    }
  });
  */


  /********************
    JS example
  *********************/

  //store vendor and app code in separate files
  // config.js.concatVendorApp = false;

  //change sourcemaps root
  // config.js.sourceMapsRoot = '/src/';

  //enable lint
  // config.js.inject.lint = true;

  //allow build even if lint errored
  // config.js.inject.lintFailAfterError = false;

  //disable Babel
  // config.js.inject.babel = false;
  // config.lint.options.parserOptions.ecmaVersion = 5;


  //handy comps references
  var comps = config.js.comps,
      compMain = comps.main;

  //main JS: change filename to script.js
  // compMain.filename = 'script.js';

  //main JS: add prioritized files
  // compMain.priority.vendor = ['carousel.js'];
  // compMain.priority.app = ['core.js', 'app/init.js'];

  //add a html5shiv comp (add a dependency in in your bower.json file first)
  // comps.html5shiv = {
  //   bower: ['html5shiv'],
  //   excludeIn: true,
  //   watch: false
  // }

  //add a comp (full parameters)
  // comps.comp_name = {
  //   filename: 'comp_filename',      //set to false to not produce any output file (for sub-comps); if not set, defaults to comp id

  //   bower: ['**/*.js'],   //set only name of the package
  //   vendor: ['**/*.js'],  //path relative to the appropriate directory
  //   app: ['**/*.js'],     //path relative to the appropriate directory

  //   //set prioritized paths
  //   priority: {
  //     vendor: [],
  //     app: []
  //   },

  //   //set other comp ids to include
  //   dependencies: [],

  //   //set comps to exclude all loaded scripts in other comps, e.g.
  //   //excludeIn: ['comp1', 'comp2'] //excluded in selected comps
  //   //excludeIn: true   //excluded in all other comps
  //   //excludeIn: false  //no exclusion
  //   excludeIn: false,

  //   watch: true  //not needed, watch blocked only if false
  // }


  /********************
    Views example
  *********************/

  //enable swig templating engine
  //first run: npm i gulp-swig -S
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


  /********************
    Images example
  *********************/

  //change imagemin optimization level
  // config.images.imagemin.optimizationLevel = 4;


  /********************
    Browsersync example
  *********************/

  //handy browser sync options reference
  var browserSyncOpts = config.browserSync.options;

  // browserSyncOpts.host = 'website.localhost.com';
  // browserSyncOpts.port = 81;

  //set proxy
  // browserSyncOpts.server = false;
  // browserSyncOpts.open = 'external';
  // browserSyncOpts.proxy = 'proxy.localhost.com';


  /********************
    Clean example
  *********************/

  //disable images dir cleaning
  // config.clean.inject.images = false;

}