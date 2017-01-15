# Agnostic mode

Basic dist version with SASS compiler. Use if your employer needs a framework-independent version.


## Installation

1. Update configuration.
2. Place the `app` directory under `src`, i.e. `src/app`


## Gulp CLI

In the `dist/app` directory, run:

```
npm install
bower install
```

Then use gulp:

```
gulp
gulp watch
```

Watches and compiles SASS files.

```
gulp build
```

Compliles.

Add the `-p` parameter to get the production version (minified, without source maps), e.g.

```
gulp build -p
```

Remember, that `bower_components` directory must be placed 2 levels up (`../..`) from the `app/sass` dir. To change it, you will have also to modify Frontend-starter configuration. Or you can put the Bower's SASS libs "inline", into e.g. `app/sass/vendor` dir (loosing the package control system).