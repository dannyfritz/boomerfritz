var gulp = require('gulp');

gulp.task(
	'clean',
	['clean:images', 'clean:html', 'clean:css', 'clean:js']
);
