var gulp = require('gulp'),  
	lr = require('tiny-lr'),
    sass = require('gulp-ruby-sass'),
    compass = require('gulp-compass'),
    autoprefixer = require('gulp-autoprefixer'),
    // minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload');
    server = lr;


gulp.task('style', function(){
	gulp.src('sass/*.scss')
		.pipe(compass({
			config_file: 'config.rb',
			css:'css',
			sass: 'sass'
		}))
		.on('error', function (err) { console.log(err.message); })
		// .pipe(gulp.dest('web/css'))
		.pipe(livereload());
});

gulp.task('move', function() {
	gulp.src('css/**')
	  .pipe(gulp.dest('web/css'));
	gulp.src('js/**')
	  .pipe(gulp.dest('web/js'));
});
/*
// 樣式
gulp.task('styles', function() {  
  return gulp.src('sass/style.scss')
    // .pipe(compass())
    .pipe(sass({ require: 'ceaser-easing',
        style: 'expanded', 
        compass: true,
        sourcemap: 'none'
        // loadPath: 'sass/*'
    }))
    .on('error', function (err) { console.log(err.message); })
    // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    // .pipe(gulp.dest('css'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(minifycss())
    .pipe(gulp.dest('web/css'))
    .pipe(livereload());
    // .pipe(notify({ message: 'Styles task complete' }));
});*/

// 腳本
gulp.task('scripts', function() {  
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('web/js'))
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(uglify())
    // .pipe(gulp.dest('web/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});




gulp.task('default', function(){

	gulp.run('style');
	// gulp.run('scripts');
	// gulp.run('move');

	gulp.run('watch');
 
});

// 圖片
gulp.task('images', function() {  
  return gulp.src('images/**')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('images'))
    // .pipe(notify({ message: 'Images task complete' }));
});

// 清理
// gulp.task('clean', function() {  
//   return gulp.src(['css', 'js', 'images'], {read: false})
//     .pipe(clean());
// });
/*
// 預設任務
gulp.task('default', function() {
    gulp.start('styles', ['watch']);
});

*/

/*
// 看手
gulp.task('watch', function() {
    livereload.listen();
  // 看守所有.scss檔
  // gulp.watch('web/css/style.css', ['styles']);
  gulp.watch('sass/style.scss', ['styles']);

  // 看守所有.js檔
  // gulp.watch('web/js/*.js', ['scripts']);

  // 看守所有圖片檔
  // gulp.watch('images/**', ['images']);

  // 建立即時重整伺服器
  var server = livereload();

  // 看守所有位在 web/  目錄下的檔案，一旦有更動，便進行重整
  gulp.watch('web/**').on('change reload', function(file) {
    
    server.changed();
    console.log('File ' + file.path + ' was ' + file.type + ', running tasks...');
  });

});*/

gulp.task('watch', function() {
	// var server = livereload();
    server.listen(80);

  gulp.watch('sass/*.scss', function () {
    gulp.run('style');
  });
  gulp.watch('web/css/*.css', function (e) {
    server.changed({
      body: {
        files: [e.path]
      }
    });
    // console.log('File ' + file.path + ' was ' + file.type + ', running tasks...');
  });

  // 建立即時重整伺服器

  // 看守所有位在 web/  目錄下的檔案，一旦有更動，便進行重整
  gulp.watch('web/**').on('change reload', function(file) {
    
    server.changed();
    console.log('File ' + file.path + ' was ' + file.type + ', running tasks...');
  });

});

