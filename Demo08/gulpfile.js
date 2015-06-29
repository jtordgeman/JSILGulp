var gulp=require('gulp'),
    $=require('gulp-load-plugins')({lazy:true});

gulp.task('styles',function(){
  return gulp.src('src/styles/**/*.scss')
  .pipe($.plumber())
  .pipe($.sass())
  //.pipe($.sass().on('error',handleError))
  .pipe($.autoprefixer({browsers: ['last 2 versions']}))
  .pipe(gulp.dest('dist/styles'));
});

gulp.task('sass-watcher',function(){
  gulp.watch('src/styles/**/*.scss',['styles']);
});

gulp.task('default',['sass-watcher']);


/*function handleError(err) {
   console.log(err.toString());
    this.emit('end');
}*/
