'use strict';
const bulk = require('bulk-require');
const App = require('./app.js');

// Register Vue components, filters, and directives
bulk(__dirname, [
	'components/**/*.js', 'filters/**/*.js', 'directives/**/*.js'
]);

const app = new App();
app.$appendTo('body');
