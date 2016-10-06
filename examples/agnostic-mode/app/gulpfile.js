const gulp          = require('gulp'),
      autoprefixer  = require('gulp-autoprefixer'),
      cssnano       = require('gulp-cssnano'),
      minimist      = require('minimist'),
      path          = require('path'),
      sourcemaps    = require('gulp-sourcemaps'),
      sass          = require('gulp-sass'),
      sassGlob      = require('gulp-sass-glob');

var paths = {
  styles: {
    src: 'sass/**/*.scss',
    dest: '../css/'
  }
}

//parse cli
var opts = minimist(process.argv.slice(2), {
  boolean: ['prod'],
  alias: {
    'prod': 'p'
  }
});

//prod vs dev mode
var prodMode = opts.prod;
    
//options
var options = {
  sourceMaps: !prodMode
}



/*
 * Tasks - definitions
 */

function styles() {
  var stream = gulp.src(paths.styles.src);
  if (options.sourceMaps) {
    stream = stream.pipe(sourcemaps.init());
  }

  stream = stream
    .pipe(sassGlob())
    .pipe(sass({}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 3 versions', 'IE >= 9']
    }));

  if (prodMode) {
    stream = stream.pipe(cssnano({
      safe: true
    }));
  }

  if (options.sourceMaps) {
    stream = stream.pipe(sourcemaps.write('.', { sourceRoot: '/app/sass/' }));
  }

  stream = stream.pipe(gulp.dest(paths.styles.dest));

  return stream;
}

function watch() {
  gulp.watch(paths.styles.src, styles);
}


/*
 * Tasks - CLI
 */

gulp.task('styles', styles);
gulp.task('build', gulp.parallel(styles));
gulp.task('start', gulp.series(styles, watch));
gulp.task('default', watch);
