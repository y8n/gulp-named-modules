'use strict';

var UglifyJS = require("uglify-js");
var through = require('through2');
module.exports = function (options) {
  return through.obj(function (file, enc, cb) {

    if (file.isNull()) {
      this.push(file);
      return cb();
    }
    var REPLACE_REG = /^define\(\s*(?=\[|function)/;
    var baseUrl = options.baseUrl ? options.baseUrl + '/' : '',
      tempPath = file.cwd + '/' + baseUrl,
      subpath = file.path.replace(tempPath, '');

    var result = UglifyJS.minify(file.contents.toString(), {fromString: true}).code;
    result = result.replace(REPLACE_REG, function () {
      return "define(\"" + subpath + "\",";
    });
    file.contents = new Buffer(result);
    this.push(file);
    cb();

  });
};
