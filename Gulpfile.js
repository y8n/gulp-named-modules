var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('default', function() {
  return gulp.src(['index.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
