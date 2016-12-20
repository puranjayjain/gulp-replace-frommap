// test index .js
var gulp = require('gulp');
var gtest = require('./index.js');

gulp.task('test', function () {
  return gulp.src('src/index.html')
    .pipe(gtest({
      before: 'class="',
      after: '"',
      map: './renaming.js'
    }))
    .pipe(gulp.dest('dist'));
});