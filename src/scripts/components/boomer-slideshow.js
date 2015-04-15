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
	attached () {
		this.$dispatch('numberOfSlides', this.numberOfSlides);
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
			this.$dispatch('currentSlide', this.currentSlide);
		},
		next () {
			this.currentSlide = this.currentSlide + 1;
			if (this.currentSlide >= this.numberOfSlides) {
				this.currentSlide = this.numberOfSlides - 1;
			}
			this.$dispatch('currentSlide', this.currentSlide);
		}
	},
	computed: {
		numberOfSlides () {
			const numberOfSlides = $(this.$el).find('> .slide').length;
			this.$dispatch('numberOfSlides', numberOfSlides);
			return numberOfSlides;
		}
	}
});
