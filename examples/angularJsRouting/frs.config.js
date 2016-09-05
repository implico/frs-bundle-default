  // enable routling for AngularJS and other frontend-routing based frameworks
  // source: https://github.com/BrowserSync/browser-sync/issues/204 (@lucasmotta)

  var fs = require("fs"),
      path = require("path"),
      url = require("url");

  var bsOpts = config.browserSync.options;

  // default url to rewrite the request
  var rewriteUrl = "/index.html";

  bsOpts.server.middleware = function(req, res, next) {
      var fileName = url.parse(req.url);
      fileName = fileName.href.split(fileName.search).join("");
      var fileExists = fs.existsSync(bsOpts.server.baseDir + fileName);
      if (!fileExists && fileName.indexOf("browser-sync-client") < 0) {
          req.url = rewriteUrl;
      }
      return next();
  };
