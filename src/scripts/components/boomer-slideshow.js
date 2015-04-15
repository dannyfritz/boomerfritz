'use strict';
const Vue = require('vue');
const $ = require('jquery');
const template = require('../templates/boomer-slideshow.vue');

Vue.component('boomer-slideshow', {
	template: template,
	data () {
		return {
			images: [],
			currentSlide: 0
		};
	},
	watch: {
		currentSlide (val) {
			$(this.$el).find('.slide').get(val).scrollIntoView();
		}
	},
	methods: {
		previous () {
			this.currentSlide = this.currentSlide - 1;
			if (this.currentSlide < 0) {
				this.currentSlide = 0;
			}
		},
		next () {
			this.currentSlide = this.currentSlide + 1;
			if (this.currentSlide >= this.numberOfSlides) {
				this.currentSlide = this.numberOfSlides - 1;
			}
		}
	},
	computed: {
		numberOfSlides () {
			return $(this.$el).find('> .slide').length;
		}
	}
});
