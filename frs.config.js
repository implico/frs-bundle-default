//custom config options
module.exports = function(config, dirs) {

  //require a module from core
  //var extend = require(dirs.rootModules + 'extend');



  /********************
    Styles example
  *********************/

  //change sourcemaps root
  // config.styles.sourceMapsRoot = '/src/';

  //enable sourcemaps for prod
  // config.styles.prod.sourceMaps = true;

  //change autoprefixer options
  // config.styles.autoprefixer.remove = false;

  //change cssnano options
  // config.styles.cssnano.safe = false;

  //inject - disable group-css-media-queries plugin
  // config.styles.inject.optimizeMediaQueries = false;



  /********************
    Fonts example
  *********************/

  //inject - add a middleware plugin before writing the output
  // var myPlugin = require('my-plugin');
  // config.fonts.inject.dest = function(stream) {
  //   return stream.pipe(myPlugin());
  // };



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
    Images example
  *********************/

  //change imagemin optimization level
  // config.images.imagemin.optimizationLevel = 4;



  /********************
    Views example
  *********************/

  //change htmlmin options
  // config.views.htmlmin.collapseWhitespace = false;

  //disable htmlmin
  // config.views.inject.optimize = false;



  /********************
    Lint example
  *********************/

  //change eslint options - add allowed globals
  // config.lint.options.globals = {
  //   angular: false
  // }

  //change eslint options - customize rules
  // config.lint.options.rules = {
  //   'quotes': [2, 'single'],
  //   'comma-dangle': [2, 'only-multiline']
  // }



  /********************
    Browsersync example
  *********************/

  //handy browser sync options reference
  var browserSyncOpts = config.browserSync.options;

  // browserSyncOpts.host = 'website.local';
  // browserSyncOpts.port = 81;

  //set proxy
  // browserSyncOpts.server = false;
  // browserSyncOpts.open = 'external';
  // browserSyncOpts.proxy = 'proxy.local';



  /********************
    Clean example
  *********************/

  //disable images dir cleaning
  // config.clean.inject.images = false;

}