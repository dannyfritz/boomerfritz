'use strict';
const bulk = require('bulk-require');
// Register Vue components, filters, and directives
bulk(__dirname, [
	'components/**/*.js', 'filters/**/*.js', 'directives/**/*.js'
]);
