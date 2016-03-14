# Frontend-starter default bundle

This is a bundle for [Frontend-starter][frontend-starter] with default directory structure.


## Installation
Clone [Frontend-starter][frontend-starter], then create a directory named `app` and unpack this repo into (if you clone, you'd rather want to remove the `.git` directory to avoid an accidental pull from the origin). Then run (in the `app` directory):

```
bower install
```

On Windows, remember to run Bower from Git Shell.

<br>
## Directory structure

* `fonts`: font files for font-face generation
* `img`: images; `img/sprites` is the default directory for sprites
* `js`: your JavaScript files concatenated into the `app.js` (by default) file; `js/vendor` contains third-party scripts, that you can't or don't want to install via Bower - they are watched and handled separately and prepended to the `app.js` file
* `styles`: see below
* `views`: see below

### Styles
A simple direcotry structure is taken from [SASS-starter (see the docs)][sass-starter].

By default, [meyer-reset] is included. Additionally, [SASS-core][sass-core] mixins and functions are available.

If you don't need any them:
* remove the dependency from the `bower.json` file
* remove import from `styles/style.scss`

#### Sprites
Sprites are generated automatically by [gulp-spritesmith][gulp-spritesmith] for all images placed in the `img/sprites` directory. To use a sprite, you have to uncomment the line in style.scss with sprites sheet import. See more in [SASS-core][sass-core] docs.

You can generate multiple, separate sprite files - see the [Frontend-starter configuration section][frontend-starter] section.


### Views
Thanks to the [Swig plugin][gulp-swig], you can use features brought by this templating system: extending layouts, including partials, variables/if and for blocks/macros and so on. See the [docs][swig-docs].

The proposed structure is:
* `views/layouts`: contains layout templates (i.e. common markup for all views, like header and footer). Usually there is only one layout.
* `views/scripts`: contains script (particular pages) templates. Scripts [extend](http://twig.sensiolabs.org/doc/tags/extends.html) layouts.

You can inject custom code using blocks - by default there are 3 of them:
* `content` - page content
* `headTitle` - page title in the &lt;head&gt; section
* `bodyAttr` - attributes appended to the &lt;body&gt; tag




[frontend-starter]: https://github.com/implico/frontend-starter
[gulp-swig]: https://github.com/colynb/gulp-swig
[meyer-reset]: https://github.com/adamstac/meyer-reset
[sass-core]: https://github.com/implico/sass-core
[sass-starter]: https://github.com/implico/sass-starter
[swig-docs]: http://paularmstrong.github.io/swig/docs/
