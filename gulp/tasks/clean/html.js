var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var trash = require('trash');

gulp.task(
	'clean:html',
	[],
	function (done) {
		trash(['dist/*.html'], function (error) {
			if (error)
			{
				gulpUtil.log(gulpUtil.colors.red('Clean Error:'), error.message);
				gulpUtil.log(error.stack);
			}
			done();
		});
	}
);
