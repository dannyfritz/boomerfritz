'use strict';
const Vue = require('vue');
const images = require('./getImages.js');
		const Hammer = global.Hammer;

module.exports = Vue.extend({
	el () {
		return document.createElement('div');
	},
	template: require('./templates/boomer-app.vue'),
	data () {
		return {
			images
		};
	},
	attached () {
		const gestures = Hammer(document.body);
		gestures.on('swipeleft', this.next);
		gestures.on('swiperight', this.previous);
	},
	methods: {
		previous () {
			this.$.slideshow.previous();
		},
		next () {
			this.$.slideshow.next();
		}
	}
});
