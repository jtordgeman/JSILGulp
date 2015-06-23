var gulp = require('gulp');

gulp.task('moveFiles',function(){
  return gulp
  .src('./src/**/*.min.js')
  .pipe(gulp.dest('./dist/'));
});


gulp.task('default',['moveFiles']);
