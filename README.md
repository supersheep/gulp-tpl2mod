gulp-tpl2mod
============

gulp plugin to transform plain text to javascript string

## Usage
```javascript
var gulp = require('gulp');
var tpl = require('gulp-tpl2mod');
```
Build to CommonJS module
```javascript
  gulp.src(path.join(__dirname, 'templates/*.html'))
      .pipe(tpl({
        prefix: 'module.exports=require("tpl").compile(',
        suffix: ')'
      }))
      .pipe(gulp.dest(path.join(__dirname, 'built_templates/')));
```
Build to AMD module
```javascript
  gulp.src(path.join(__dirname, 'templates/*.html'))
      .pipe(tpl({
        prefix: 'define(["tpl"],function(tpl){return tpl.compile(',
        suffix: ')})'
      }))
      .pipe(gulp.dest(path.join(__dirname, 'built_templates/')));
```
You may adjust `tpl` in prefix string as need.

## Options
Same as [tpl2mod](https://www.npmjs.org/package/tpl2mod).
