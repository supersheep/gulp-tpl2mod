gulp-tpl2mod
============

gulp plugin to transform plain text to javascript string

## Usage
```javascript
var gulp = require('gulp');
var tpl = require('gulp-tpl2mod');
gulp.task('template', function(){
  gulp.src(path.join(__dirname, 'templates/*.html'))
      .pipe(tpl({
        suffix: '-tmpl'
      }));
```

## Options
Same as [tpl2mod](https://www.npmjs.org/package/tpl2mod).
