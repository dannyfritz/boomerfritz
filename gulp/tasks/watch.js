var gulp = require('gulp');
var watch = require('gulp-watch');
var liveServer = require("live-server");
var runBatchTasks = require('../utils/runBatchTasks.js');

gulp.task(
	'watch',
	['default'],
	function () {
		watch('src/scripts/**', runBatchTasks('javascript:app'));
		watch('src/data/**', runBatchTasks('javascript:app'));
		watch('package.json', runBatchTasks('javascript:vendor'));
		watch('src/styles/**', runBatchTasks('css'));
		watch('src/index.html', runBatchTasks('html'));
		watch('src/images/**', runBatchTasks('images'));
		watch('tests/**', runBatchTasks('test:javascript'));
		liveServer.start({
			root: './dist',
			logLevel: 0
		});
	}
);
