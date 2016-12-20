# gulp-replace-frommap
A tiny gulp plugin for replacing text using a object map

# Usage example

## gulpfile.js
```
var gulp = require('gulp');
var gulpReplaceFrommap = require('gulp-replace-frommap.js');

gulp.task('test', function () {
  return gulp.src('src/index.html')
    .pipe(gulpReplaceFrommap({
      before: 'class="',
      after: '"',
      map: './renaming.js'
    }))
    .pipe(gulp.dest('dist'));
});
```

# Options

Its an object to be passed along with the constructor of the plugin
| Option     | Description                 | Type
| --- | --- | --- |
| before     | tag to start matching from  | `String or Regex`
| after      | tag to end matching to      | `String or Regex`
| map        | your map file relative to the current directory  | `Object`

**NOTE** if you are using regex for before and after then wrap them in a group, e.g /class/ should be done as /(class)/

```
 *  e.g
 *  
 *  before -> class="
 *  after  -> "
 *  map    -> {'goog': '2'}
 *  then
 *  it will replace all instances of goog with 2 which are between class=" and "
```

# TODO
 - [ ] streams support
 - [ ] tests