var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var trash = require('trash');

gulp.task(
	'clean:images',
	[],
	function (done) {
		trash(['dist/images'], function (error) {
			if (error)
			{
				gulpUtil.log(gulpUtil.colors.red('Clean Error:'), error.message);
				gulpUtil.log(error.stack);
			}
			done();
		});
	}
);
