'use strict';
const fs = require('fs');
const path = require('path');
const images = fs.readdirSync(path.resolve(__dirname, '../images'));
module.exports = images.map((image) => {
		return {
			src: 'images/' + image
		};
	});
