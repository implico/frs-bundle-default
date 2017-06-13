# [Swig](http://paularmstrong.github.io/swig/) support


## Installation

1. Run:
  ```
  npm install gulp-swig --save-dev
  ```
2. Update configuration.
3. Optionally use the views bootstrap structure.


## Description

You can use features brought by this templating system: extending layouts, including partials, variables/if and for blocks/macros and so on. See the [docs](http://paularmstrong.github.io/swig/docs/).

The proposed structure is:
* `views/layouts`: contains layout templates (i.e. common markup for all views, like header and footer). Usually there is only one layout.
* `views/scripts`: contains script (particular pages) templates. Scripts [extend](http://twig.sensiolabs.org/doc/tags/extends.html) layouts.

You can inject custom code using blocks - by default there are 2 of them:
* `content` - page content
* `bodyAttr` - attributes appended to the &lt;body&gt; tag
