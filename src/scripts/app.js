'use strict';
const Vue = require('vue');
const $ = require('jquery');
const images = require('./getImages.js');
const Hammer = global.Hammer;

module.exports = Vue.extend({
	el () {
		return document.createElement('div');
	},
	template: require('./templates/boomer-app.vue'),
	data () {
		return {
			images,
			currentSlide: 0,
			numberOfSlides: 0
		};
	},
	created () {
		this.$on('currentSlide', function (val) {
			this.currentSlide = val;
		});
		this.$on('numberOfSlides', function (val) {
			this.numberOfSlides = val;
		});
	},
	attached () {
		const gestures = Hammer(document.body);
		gestures.on('swipeleft', this.next);
		gestures.on('swiperight', this.previous);
		$(document).on('keydown', this.$el, (event) => {
			const which = event.which;
			if (which === 37) {
				this.previous();
				event.preventDefault();
			}
			else if (which === 39) {
				this.next();
				event.preventDefault();
			}
		});
		$(document).on('wheel', this.$el, (event) => {
			event = event.originalEvent;
			const delta = event.wheelDeltaY;
			if (delta > 0) {
				this.previous();
			}
			else if (delta < 0) {
				this.next();
			}
			event.preventDefault();
		});
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
