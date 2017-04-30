// -переменнаые гауп плагина
var gulp =require('gulp')
	concatCSS = require('gulp-concat-css')
	bs = require('browser-sync');
 //-выполенение функции копирования HTML
	gulp.task('default', function(){
		return gulp.src('src/**/*.*')
		.pipe(gulp.dest('dist/html'));
	});
//- запуск слияния CSS
	gulp.task('concat', function(){
		return gulp.src('src/css/*.css')
		.pipe(concatCSS('css/main.css'))
		.pipe(gulp.dest('dist/'));
	});
//- синхронизация браузера
	gulp.task('server',function(){ 
		bs.init({ 
		server: { 
		baseDir: "src/" 
		} 
		}); 
//- отслеживание изминения файлов
		gulp.watch("src/css/*.css").on('change', bs.reload); 
		gulp.watch("src/*.html").on('change', bs.reload); 
		});
