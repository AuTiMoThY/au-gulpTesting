var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename');

gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 35729}));
  app.use(express.static(__dirname));
  app.listen(4000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(35729);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('styles', function(){
	return gulp.src('sass/*.scss')
		.pipe(sass({
			// config_file: 'config.rb',
      // compass:true
			// css:'css',
			// sass: 'sass',
   //    image:'images'
		}))
		.on('error', function (err) { console.log(err.message); })
		.pipe(gulp.dest('web/css'));
		// .pipe(livereload());
});


/*gulp.task('styles', function() {
      return gulp.src('sass/*.scss')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest('web/css'));
        // .pipe(rename({suffix: '.min'}))
        // .pipe(minifycss())
        // .pipe(gulp.dest('css'));
});*/

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
  gulp.watch('web/*.html', notifyLiveReload);
  gulp.watch('web/css/*.css', notifyLiveReload);
	gulp.src('css/**')
	  .pipe(gulp.dest('web/css'));
	  console.log('css copy to web complete');
	gulp.src('js/**')
	  .pipe(gulp.dest('web/js'));
	  console.log('js copy to web complete');
	gulp.src('images/**')
	  .pipe(gulp.dest('web/images'));
	  console.log('images copy to web complete');
});

gulp.task('default', ['styles', 'express', 'livereload', 'watch'], function() {
});