(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function () {
	
	$(".big-slider").not(".slick-initialized").slick({
		dots: false,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 10000,
		speed: 1200,
		slidesToShow: 1,
		fade: true,
		asNavFor : $(".miniature-slider")
	});

	$(".miniature-slider").not(".slick-initialized").slick({
		dots: false,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 10000,
		speed: 1200,
		vertical: true,
		slidesToShow: 4,
		slidesToScroll : 1,
		focusOnSelect: true,
		asNavFor : $(".big-slider")
		// responsive: [
		//     {
		//       breakpoint: 1024,
		//       settings: {
		//         slidesToShow: 2
		//       }
		//     },
		//     {
		//      breakpoint: 768,
		//       settings: {
		//         slidesToShow: 2
		//       }
		//     },
		//     {
		//      breakpoint: 700,
		//       settings: {
		//         slidesToShow: 3,
		//         vertical: false
		//       }
		//     },
		//     {
		//      breakpoint: 532,
		//       settings: {
		//         slidesToShow: 2,
		//         vertical: false
		//       }
		//     },
		//     {
		//       breakpoint: 350,
		//       settings: {
		//         slidesToShow: 1,
		//         vertical: false
		//       }
		//     }
		//   ]
	});


	if( $(".last-goods-slider").length > 0 ) {

		var $example = $(".last-goods-slider-block");

		var $frame = $example.find('.iframe');
		var sly = new Sly($frame, {
			horizontal: 1,
			itemNav: 'forceCentered',
			activateMiddle: false,
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 2,
			scrollBar: $example.find('.scrollbar'),
			scrollBy: 1,
			// pagesBar: $example.find('.pages'),
			activatePageOn: 'click',
			speed: 1200,
			moveBy: 700,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1

			// Buttons
			// forward: $example.find('.forward'),
			// backward: $example.find('.backward'),
			// prev: $example.find('.prev'),
			// next: $example.find('.next'),
			// prevPage: $example.find('.prevPage'),
			// nextPage: $example.find('.nextPage')
		}).init();

	}

});