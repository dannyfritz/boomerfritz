var path = require('path');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var npmImportPlugin = require('less-plugin-npm-import');
var npmImport = new npmImportPlugin({});
var autoPrefixPlugin = require('less-plugin-autoprefix');
var autoprefix = new autoPrefixPlugin({ browsers: ["last 2 versions"] });

gulp.task(
	'css',
	['clean:css'],
	function (done) {
		return gulp
			.src(path.resolve(__dirname, '../..', 'src/styles/main.less'))
			.pipe(less({
				paths: [ path.resolve(__dirname, '../..', 'src', 'styles') ],
				plugins: [autoprefix, npmImport]
			}))
			.on('error', function (error) {
				gulpUtil.log(gulpUtil.colors.red('LESS Error:'), error.message);
				done();
			})
			.pipe(sourcemaps.init())
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./dist'));
	}
);
