var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('default', function() {
	gulp.src('./src/main.scss')
	    .pipe(sass())
	    .pipe(gulp.dest('./dist'));
});

gulp.task('product', function() {
	gulp.src('./src/main.scss')
	    .pipe(sass({
	    	outputStyle: 'compressed'
	    }))
	    .pipe(gulp.dest('./dist'));	
});