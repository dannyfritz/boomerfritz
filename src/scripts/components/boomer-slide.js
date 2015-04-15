'use strict';
const Vue = require('vue');
const template = require('../templates/boomer-slide.vue');

Vue.component('boomer-slide', {
	template: template,
	data () {
		return {
			src: null
		};
	}
});
