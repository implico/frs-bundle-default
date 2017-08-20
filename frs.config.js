//custom config options
module.exports = function(config, dirs, appData) {

  // Useful path helper
  let path = require('path');

  // Handy comps references
  let comps = config.js.comps,
      compMain = comps.main;

  // Handy Browsersync options reference
  let bsOpts = config.browserSync.options;


  // Require a module from core
  // var extend = require(dirs.rootModules + 'extend');


  /********************
    JS
  *********************/

  // Your custom config goes here...


  /********************
    Lint
  *********************/

  // Your custom config goes here...


  /********************
    Styles
  *********************/

  // Your custom config goes here...


  /********************
    Sprites
  *********************/

  // Your custom config goes here...


  /********************
    Images
  *********************/

  // Your custom config goes here...


  /********************
    Fonts
  *********************/

  // Your custom config goes here...


  /********************
    Views
  *********************/

  // Your custom config goes here...


  /********************
    Custom dirs
  *********************/

  // Your custom config goes here...


  /********************
    Browsersync
  *********************/

  // Your custom config goes here...


  /********************
    Clean
  *********************/

  // Your custom config goes here...






  // ****************** Examples ******************


  /********************
    JS
  *********************/

  // Enable webpack (ES2015 imports)
  // compMain.filename = 'app';  // Set entry filename (default extension if does not contain a dot: js) - possible a glob, preferred single to watch separately
  // compMain.webpack = ['**/*.{js,jsx}']; // Watched files (remove jsx if not needed)
  // config.lint.options.parserOptions = {
  //   sourceType: 'module',
  //   ecmaVersion: 5
  // }

  // Store vendor and app code in separate files
  // config.js.concatVendorApp = false;

  // Change sourcemaps root
  // config.js.sourceMapsRoot = '/src/';

  // Enable lint on change
  // config.js.inject.lint = true;

  // Allow build even if lint errored
  // config.js.inject.lintFailAfterError = false;

  // Disable Babel
  // config.js.inject.babel = false;
  // config.lint.options.parserOptions = {
  //   ecmaVersion: 5
  // }

  // Main JS: change filename to script.js
  // compMain.filename = 'script.js';

  // Main JS: add prioritized files
  // compMain.priority.vendor = ['carousel.js'];
  // compMain.priority.app = ['core.js', 'app/init.js'];

  // Add a html5shiv comp (add a dependency in in your bower.json file first)
  // comps.html5shiv = {
  //   bower: ['html5shiv'],
  //   excludeIn: true,
  //   watch: false
  // }

  // Add a comp (full parameters)
  // comps.comp_name = {
  //   filename: 'app',      // Set to false to not produce any output file (for sub-comps); if not set, defaults to comp id
  //                         // .js extension added automatically unless the name contains a dot
  //                         // For webpack: enter a filename or glob, e.g. ['app', 'app2'] (.js extension appended automatically if dot not found)

  //   bower: ['**/*.js'],   // Set only name of the package
  //   vendor: ['**/*.js'],  // Path relative to the appropriate directory
  //   app: ['**/*.js'],     // Path relative to the appropriate directory
  //   webpack: false,       // Disabled by default
  //   // webpack: ['app/**/*.js'],  // Example webpack use, disables bower, vendor and app props

  //   // Set prioritized paths (does not apply for webpack)
  //   priority: {
  //     vendor: [],
  //     app: []
  //   },

  //   // Set other comp ids to include (does not apply for webpack)
  //   dependencies: [],

  //   // Set comps to exclude all loaded scripts in other comps, e.g.
  //   // excludeIn: ['comp1', 'comp2'] // Excluded in selected comps
  //   // excludeIn: true   // Excluded in all other comps
  //   // excludeIn: false  // No exclusion
  //   // Does not apply for webpack
  //   excludeIn: false,

  //   watch: true  // Not needed, watch blocked only if false
  // }



  /********************
    Lint
  *********************/

  // For switching to modules (require/import) instead of global packages, see "enable webpack" in JS section

  // Add allowed globals
  // config.lint.options.globals = {
  //   angular: false
  // }

  // Customize rules
  // config.lint.options.rules = {
  //   'quotes': [2, 'single'],
  //   'comma-dangle': [2, 'only-multiline']
  // }



  /********************
    Styles
  *********************/

  // Change sourcemaps root
  // config.styles.sourceMapsRoot = '/src/';

  // Enable sourcemaps for prod
  // config.styles.prod.sourceMaps = true;

  // Change autoprefixer options
  // config.styles.autoprefixer.remove = false;

  // Change cssnano options
  // config.styles.cssnano.safe = false;

  // Inject - enable group-css-media-queries plugin (disabled by default as unsafe)
  // config.styles.inject.optimizeMediaQueries = true;



  /********************
    Sprites
  *********************/

  // Modify default sprites item - example for animations (change Spritesmith algorithm options)
  // config.sprites.items[0].options.algorithm = 'left-right';
  // config.sprites.items[0].options.algorithmOpts = { sort: false };

  // Add a sprites item (directory) - basic options, use @include sprite(dirname-filename) in the SASS stylesheets
  // See the source configuration to check all available options
  // config.sprites.items.push({ name: 'dirname' });

  // config.sprites.items.push({
  //   name: 'dirname',
  //   options: {
  //     // Spritesmith options
  //   }
  // });



  /********************
    Images
  *********************/

  // Change imagemin optimization level
  // config.images.imagemin.optimizationLevel = 4;



  /********************
    Fonts
  *********************/

  // Inject - add a middleware plugin before writing the output
  // var myPlugin = require('my-plugin');
  // config.fonts.inject.dest = function(stream) {
  //   return stream.pipe(myPlugin());
  // };



  /********************
    Views
  *********************/

  // Change htmlmin options
  // config.views.htmlmin.collapseWhitespace = false;
  // config.views.htmlmin.removeComments = false;


  // Disable htmlmin
  // config.views.inject.optimize = false;



  /********************
    Custom dirs
  *********************/

  // Watch and copy contents of "php" dir from src to dist
  /*
  config.customDirs.items.push({
    name: 'php views',  // Optional, displayed in the console during watch
    src: dirs.src.main + 'php/**' + '/*.php',
    srcDot: false,   // Whether to include files starting with a dot
    dest: dirs.dist.main + 'php/',  // Set to null to just watch the dir without copying (e.g. external backend views)
    inject: {
      // An object { dirInfo } (with this config) available as this.taskData from within inject functions
      src: true,   // Function must return: a stream (if canceled) or a glob array passed to the src
      limit: true, // gulp-changed plugin
      dest: true,

      // Watch task, receives undefined and { id, dirInfo } with id and definition as a second parameter
      watch: true,

      // Clean task, receives current glob to delete (see the clean task injector docs) and { dirInfo } with definition object as a second parameter
      clean: false
    }
  });
*/



  /********************
    Browsersync
  *********************/

  // bsOpts.host = 'website.local';
  // bsOpts.port = 81;

  // Set proxy
  // bsOpts.server = false;
  // bsOpts.open = 'external';
  // bsOpts.proxy = 'proxy.local';



  /********************
    Clean
  *********************/

  // Disable images dir cleaning
  // config.clean.inject.images = false;

}
