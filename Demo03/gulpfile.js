var gulp=require('gulp'),
    $=require('gulp-load-plugins')({lazy:true});


/*  jshint=require('gulp-jshint'),
  jscs=require('gulp-jscs'),
  util=require('gulp-util'),
  gulpprint=require('gulp-print');
*/

gulp.task('linting',function(){
  log("About to lint baby!");
  return gulp.src('./src/**/*.js')
  .pipe($.print())
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish',{verbose:true}))
  .pipe($.jshint.reporter('fail'));
});

gulp.task('styling',function(){
  log("And now style me!");
  return gulp.src('./src/**/*.js')
  .pipe($.jscs());
});


gulp.task('default',['linting','styling']);

function log(msg){
  $.util.log($.util.colors.red(msg));
}
