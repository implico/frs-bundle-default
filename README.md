# Frontend-starter default bundle

This is a bundle for [Frontend-starter][frontend-starter] with default directory structure.


## Installation

Before start you need:
* [Bower][bower]
* Git, e.g. [Github desktop](https://desktop.github.com/)

Install [Frontend-starter][frontend-starter], then unpack this repo to the desired project location (if you clone, you'd rather want to remove the `.git` directory, because as it is just a kind of template, it won't be under version control). Remember **not to use a directory containing an exclamation mark (!)** - it breaks glob patterns used by the tasks.

Then run:

```
bower install
```

On Windows, remember to run Bower from Git Shell. Bower files are by default placed in `bower_components` - to change this, edit the `.bowercc` file and change `dirs.bower` config definition.

Then use the [Frontend-starter gulp tasks](https://github.com/implico/frontend-starter#cli-tasks). For example, for the first init, use:

```
frs start
```

**To fully customize directory structure** and other parameters, see the [docs config section](https://github.com/implico/frontend-starter#directories-and-configuration).


<br>
## Directory structure of the `src/`:

### Fonts: `/fonts`
Font files for font-face generation.


### Images: `/img`
Your images, that will be optimized and saved in the dist directory.


### Sprites: `/sprites`
Image sprites, see more in the [Sprites](#styles-sprites) section.


### Javascript: `/js`
All your JavaScript files (including those installed with Bower) are by default concatenated into one file: `app.js`. Thanks to this, you don't have to change markup when adding/removing any files or packages.

By default, [jQuery](https://jquery.com/)@2 is installed.

`/vendor/js` contains third-party scripts, that you can't or don't want to install via Bower - they are watched and handled separately and prepended to the `app.js` file.

If you want to skip any of the Bower packages, you have 2 options:
- create a [comp](https://github.com/implico/frontend-starter#javascript-compositions) that uses selected packages, set its `filename` to `null` and `excludeIn` to `true`
- use the `overrides` option in `bower.json` file or edit configuration `config.js.mainBowerFiles.overrides` value (see [main-bower-files] docs).


### Styles: `/styles`
A simple directory structure is taken from [SASS-starter][sass-starter].

By default, the following libraries are included:
- [meyer-reset] - provides CSS reset
- [Breakpoint](http://breakpoint-sass.com/) for convenient media queries handling
- [SASS-core][sass-core] - mixins and functions such as: automatic rem/vw/percentage unit converters for dimensions and fonts, responsive sprites, grids

If you don't need any of them:
* remove the dependency from the `bower.json` file
* remove import from `styles/style.scss`

Place any third-party scripts that you can't or don't want to install via Bower in `/vendor/styles`.


<a name="styles-sprites"></a>
#### Sprites
Sprites are generated automatically by [gulp-spritesmith] for all images placed in the `/sprites` directory. To use a sprite, you have to uncomment the line in `style.scss` with sprite sheet import and then use the mixin `@include sprite($filename)`. See more in [Frontend-starter sprite docs](https://github.com/implico/frontend-starter#sprites) and [SASS-core docs][sass-core].


### Views: `/views`
See [examples](examples/) to enable [Swig][gulp-swig] support.



[bower]: http://bower.io/
[frontend-starter]: https://github.com/implico/frontend-starter
[gulp-spritesmith]: https://github.com/twolfson/gulp.spritesmith
[gulp-swig]: https://github.com/colynb/gulp-swig
[main-bower-files]: https://github.com/ck86/main-bower-files
[meyer-reset]: https://github.com/adamstac/meyer-reset
[sass-core]: https://github.com/implico/sass-core
[sass-starter]: https://github.com/implico/sass-starter
