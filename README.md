# gulp-named-modules
named a unnamed requirejs module

## Install

``` bash
npm install gulp-named-modules --save-dev
```

## Usage

``` javascript
var gulp = require('gulp'),
    named = require('gulp-named-modules');

gulp.task('default', function (fun) {
    gulp.src("index.js")
        .pipe(named({
          baseUrl:"app"
        }))
        .pipe(gulp.dest('dest'));
});
```

## Options

__baseUrl__  
Type:`string`  
description:the baseUrl configured in requirejs's config.  
  
__useUglify__  
Type:`boolean`    
description:use uglify-js or not

## License
__MIT__
