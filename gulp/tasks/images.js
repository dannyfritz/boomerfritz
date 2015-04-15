var gulp = require('gulp');

gulp.task(
	'images',
	['clean:images'],
	function () {
		gulp.src('./src/images/**')
			.pipe(gulp.dest('./dist/images'));
	}
);
