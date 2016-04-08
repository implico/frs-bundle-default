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

On Windows, remember to run Bower from Git Shell. Bower files are by default placed in `bower_components` - to change this, edit the `.bowercc` file and change `dirs.vendor` config definition.

Then use the [Frontend-starter gulp tasks](https://github.com/implico/frontend-starter#cli-tasks). For example, for the first init, use:

```
frs dev
```

**To fully customize directory structure** and other parameters, see the [docs config section](https://github.com/implico/frontend-starter#directories-and-configuration).


<br>
## Directory structure of the `src/`:

### Fonts: `/fonts`
Font files for font-face generation.


### Images: `/img`
Your images, that will be optimized and saved in the dist directory . `img/sprites` is the default directory for sprites (see more in the [Sprites](#styles-sprites) section).


### Javascript: `/js`
All your JavaScript files (including those installed with Bower) are by default concatenated into one file: `app.js`. Thanks to this, you don't have to change markup when adding/removing any files or packages.

`js/vendor` contains third-party scripts, that you can't or don't want to install via Bower - they are watched and handled separately and prepended to the `app.js` file.

If you want to skip any of the Bower packages, use the `overrides` option in the `bower.json` file or edit the configuration `config.js.common.mainBowerFiles.overrides` value. See [main-bower-files] docs.




### Styles: `/styles`
A simple directory structure is taken from [SASS-starter (see the docs)][sass-starter].

By default, [meyer-reset] is included. Additionally, [SASS-core][sass-core] mixins and functions are available.

If you don't need any them:
* remove the dependency from the `bower.json` file
* remove import from `styles/style.scss`

<a name="styles-sprites"></a>
#### Sprites
Sprites are generated automatically by [gulp-spritesmith] for all images placed in the `img/sprites` directory. To use a sprite, you have to uncomment the line in style.scss with sprites sheet import. See more in [SASS-core][sass-core] docs.

You can generate multiple, separate sprite files - see the [Frontend-starter configuration section][frontend-starter] section.


### Views: `/views`
Thanks to the [Swig plugin][gulp-swig], you can use features brought by this templating system: extending layouts, including partials, variables/if and for blocks/macros and so on. See the [docs][swig-docs].

The proposed structure is:
* `views/layouts`: contains layout templates (i.e. common markup for all views, like header and footer). Usually there is only one layout.
* `views/scripts`: contains script (particular pages) templates. Scripts [extend](http://twig.sensiolabs.org/doc/tags/extends.html) layouts.

You can inject custom code using blocks - by default there are 3 of them:
* `content` - page content
* `headTitle` - page title in the &lt;head&gt; section
* `bodyAttr` - attributes appended to the &lt;body&gt; tag




[bower]: http://bower.io/
[frontend-starter]: https://github.com/implico/frontend-starter
[gulp-spritesmith]: https://github.com/twolfson/gulp.spritesmith
[gulp-swig]: https://github.com/colynb/gulp-swig
[main-bower-files]: https://github.com/ck86/main-bower-files
[meyer-reset]: https://github.com/adamstac/meyer-reset
[sass-core]: https://github.com/implico/sass-core
[sass-starter]: https://github.com/implico/sass-starter
[swig-docs]: http://paularmstrong.github.io/swig/docs/
