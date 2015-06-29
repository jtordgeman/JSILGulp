var gulp=require('gulp'),
    runSequence = require('run-sequence'),
    $=require('gulp-load-plugins')({lazy:true});



gulp.task('lint',function(){
  runSequence('linting','styling');
});

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


gulp.task('default',['lint']);

function log(msg){
  $.util.log($.util.colors.red(msg));
}
