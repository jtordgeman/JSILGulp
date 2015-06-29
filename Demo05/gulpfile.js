var gulp=require('gulp'),
    $=require('gulp-load-plugins')({lazy:true});

gulp.task('images',function(){
  return gulp.src('src/images/**/*.png')
  .pipe($.imagemin())
  .pipe(gulp.dest('dist/images'));
});

