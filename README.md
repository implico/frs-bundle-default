# Frontend-starter default bundle

This is a bundle for [Frontend-starter][frontend-starter] with default directory structure.

<br>
## Directory structure

* `fonts`: font files for font-face generation
* `img`: images; `img/sprites` is the default directory for sprites
* `js`: your JavaScript files concatenated into the `app.js` (by default) file; `js/vendor` contains third-party scripts, that you can't or don't want to install via Bower - they are watched and handled separately and prepended to the `app.js` file
* `styles`: see below
* `views`: see below

### Styles
A simple direcotry structure is taken from [SASS-starter (see the docs)][sass-starter].

Additionally, [SASS-core][sass-core] mixins and functions are available. If you don't need them:
* remove the dependency from the `bower.json` file
* remove import from `styles/style.scss`

### Views
Thanks to the [Twig plugin][gulp-twig], you can use features brought by this templating system: extending layouts, including partials, variables/if and for blocks/macros and so on. See the [docs][twig].

The proposed structure is:
* `views/layouts`: contains layout templates (i.e. common markup for all views, like header and footer). Usually there is only one layout.
* `views/scripts`: contains script (particular pages) templates. Scripts [extend](http://twig.sensiolabs.org/doc/tags/extends.html) layouts.

You can inject custom code using blocks - by default there are 3 of them:
* `content` - page content
* `headTitle` - page title in the &lt;head&gt; section
* `bodyAttr` - attributes appended to the &lt;body&gt; tag




[frontend-starter]: https://github.com/implico/frontend-starter
[gulp-twig]: https://github.com/zimmen/gulp-twig
[sass-core]: https://github.com/implico/sass-core
[sass-starter]: https://github.com/implico/sass-starter
[twig]: http://twig.sensiolabs.org/doc/templates.html
