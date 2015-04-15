<div class="controls">
	<button class="controls__button" v-on="click: previous"><i class="fa fa-arrow-circle-left fa-3x"></i></button>
	<button class="controls__button" v-on="click: next"><i class="fa fa-arrow-circle-right fa-3x"></i></button>
</div>
<boomer-slideshow v-with="images: images" v-ref="slideshow"></boomer-slideshow>
