var gulp=require('gulp'),
    $=require('gulp-load-plugins')({lazy:true});

gulp.task('styles',function(){
  return gulp.src('src/styles/**/*.scss')
  .pipe($.sass())
  .pipe($.autoprefixer({browsers: ['last 2 versions']}))
  .pipe(gulp.dest('dist/styles'));
});

