var gulp        = require('gulp');
var sass 		= require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

gulp.task('html', function(){
  	gulp.src('index.html')
  .	pipe(reload({stream:true}));
});

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(reload({stream:true}));
});

gulp.task('js', function () {
	gulp.src('./js/*.js')
  .	pipe(reload({stream:true}));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('watcher', ['html', 'sass', 'js'], function(){
  gulp.watch('index.html', ['html']);
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./js/*.js', ['js']);
});

gulp.task('default', ['watcher', 'browserSync']);