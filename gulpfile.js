var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// create the production file
gulp.task('product', function() {
	gulp.src('./src/main.scss')
	    .pipe(sass({
	    	outputStyle: 'compressed'
	    }))
	    .pipe(gulp.dest('./dist'));	
});

// start local server on port 3000
gulp.task('server', function() {
  return plugins.connect.server({
    root: './',
    port: 3000,
    livereload: true,
    fallback: 'test/ui.html'
  });
});

// compile the scss files
gulp.task('sass', function() {
	gulp.src('./src/main.scss')
		.pipe(plugins.plumber())
	    .pipe(plugins.sass())
	    .pipe(gulp.dest('./dist'));
});

// watch sass and js files
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('default', [ 'server', 'sass', 'watch' ]);