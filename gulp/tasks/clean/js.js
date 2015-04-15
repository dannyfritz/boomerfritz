var gulp = require('gulp');

gulp.task(
	'clean:js',
	['clean:appjs', 'clean:vendorjs']
);
