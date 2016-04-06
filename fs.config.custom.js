//custom config options
module.exports = function(config, dirs) {

  /********************
    Styles example
  *********************/

  //change sourcemaps root
  // config.styles.common.sourceMapsRoot = '/src/';

  //enable sourcemaps for prod
  // config.styles.prod.sourceMaps = true;


  /********************
    Sprites example
  *********************/

  //add a sprites item (for directory "img/sprites-home")
  /*
  config.sprites.item.push({
    imgSource: dirs.src.img + 'sprites-home/',
    imgDest: dirs.dist.img,
    options: {
      imgName: 'sprites-home.png',
      imgPath: '../img/sprites-home.png',
      cssName: '_sprites-home.scss',
    }
  });
  */


  /********************
    JS example
  *********************/

  //store vendor and app code in separate files
  // config.js.common.concatVendorApp = false;

  //enable JSHint
  // config.js.common.jsHint = true;

  //handy main references
  var comps = config.js.common.comps,
      compMain = comps.main;

  //main JS: change filename
  // compMain.filename = 'script.js';

  //main JS: add prioritized files
  // compMain.priority.vendor = ['carousel.js'];
  // compMain.priority.app = ['core.js', 'app/init.js'];

  //add a comp
  // comp.comp_name = {
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

  //disable Swig
  // config.views.common.useSwig = false;


  /********************
    Browsersync example
  *********************/

  //handy browser sync options reference
  var browserSyncOpts = config.browserSync.common.options;

  //set proxy
  // browserSyncOpts.server = false;
  // browserSyncOpts.host = 'website.localhost.com';
  // browserSyncOpts.open = 'external';
  // browserSyncOpts.proxy = 'proxy.localhost.com';


  /********************
    Clean example
  *********************/

  //disable fonts dir cleaning
  // config.clean.fonts = false;

}