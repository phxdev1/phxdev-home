var album_element_mapping = {}
var max_img_enlarge = 1.1;

var artificialResponsiveness = function (e) {
	for (var key in album_element_mapping) {
		var destination_id = album_element_mapping[key].element_;
		var album_div = document.getElementById(destination_id.replace("#", ""));
		var new_width = album_div.parentNode.clientWidth;
		var flickr_data = album_element_mapping[key].data_st;
		if (new_width !== album_element_mapping[key].last_width) {
			$(destination_id).css("width", new_width);
			showPhotos(flickr_data.photoset.photo, destination_id, album_element_mapping[key].row_height_, album_element_mapping[key].margin);
			// since showPhotos destroys the contents of description_id element, we need to re-create the photoswipe, too :/
			initPhotoSwipeFromDOM(destination_id);
			last_width = new_width;
		};
	};
};

window.onresize = artificialResponsiveness;

var prepareFlickrAlbum = function (album_id, destination_id, max_pictures, row_height, margin) {
	// initialize element width
	max_pictures = typeof max_pictures !== 'undefined' ? max_pictures : 30;
	row_height = typeof row_height !== 'undefined' ? row_height : 200;
	margin = typeof margin !== 'undefined' ? margin : 3;

	destination_id = "#" + destination_id;
	$.ajax({
		url: 'https://api.flickr.com/services/rest/?jsoncallback=?',
		method: 'get',
		data: {
			method: 'flickr.photosets.getPhotos',
			api_key: '92da12e7f9430472a8ce2276d8bfb3e5',
			format: 'json',
			photoset_id: album_id,
			extras: "o_dims, url_k, url_s, url_m, url_o, url_t,url_q,url_n,url_z,url_c,url_l,date_taken,date_upload",
			per_page: max_pictures,
		},
		dataType: 'json',
		success: function (data) {
			album_element_mapping[album_id] = {
				element_: destination_id,
				data_st: data,
				last_width: 0,
				max_pictures_: max_pictures,
				row_height_: row_height,
				margin: margin
			};

			artificialResponsiveness();
		}
	});
}

var showPhotos = function (unsorted_photos, destination_id, row_height, margin) {
$(destination_id).html('');
	
const photos = unsorted_photos.slice().sort(
	function(a,b){
  		
  		return new Date(b.datetaken) - new Date(a.datetaken);
	}
);
	console.log(photos);
	for (var index in photos) {
		var photo = photos[index];
		var htmlString = "";
		//console.log(photo);
		htmlString += '    <div class="photo-container">';

		htmlString += '    <a href="' + photo.url_o + '" target="_blank">';

		htmlString += '	    <img class="image-thumb" src="' + photo.url_z + '">';

		htmlString += '    </a>';
		htmlString += '    </div>';


		$(destination_id).append(htmlString);
	}

	$(destination_id).justifiedGallery({
		"sizeRangeSuffixes": {
			'lt100': '_t',
			'lt240': '_m',
			'lt320': '_n',
			'lt500': '',
			'lt640': '_z',
			'lt1024': '_b'
		}
	});

	// $(destination_id).empty().justifiedGallery({
	// 	images : photos,
	// 	rowHeight: row_height,
	// 	maxRowHeight: row_height * 2,
	// 	thumbnailPath: function(photo, width, height){
	// 		var purl = photo.url_s;
	// 		if( photo.url_n && (width > photo.width_s * max_img_enlarge || height > photo.height_s * max_img_enlarge) ) purl = photo.url_n;
	// 		if( photo.url_m && (width > photo.width_n * max_img_enlarge || height > photo.height_n * max_img_enlarge) ) purl = photo.url_m;
	// 		if( photo.url_z && (width > photo.width_m * max_img_enlarge || height > photo.height_m * max_img_enlarge) ) purl = photo.url_z;
	// 		if( photo.url_l && (width > photo.width_z * max_img_enlarge || height > photo.height_z * max_img_enlarge) ) purl = photo.url_l;
	// 		return purl;
	// 	},
	// 	getSize: function(photo){
	// 		return {width: photo.width_s, height: photo.height_s};
	// 	},
	// 	margin: margin,

	// 	template: function(photo){

	// 	},
	// 	imageSelector: "image-thumb",
	// 	imageContainer: "photo-container",

	// });
}
