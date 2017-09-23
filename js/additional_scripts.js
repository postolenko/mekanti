(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function () {

	var $lastGoodsSlider;
	var $frame;
	var sly;
	
	$(".big-slider").not(".slick-initialized").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 1200,
		slidesToShow: 1,
		fade: true,
		asNavFor : $(".miniature-slider")
	});

	$(".miniature-slider").not(".slick-initialized").slick({
		dots: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 10000,
		speed: 1200,
		vertical: true,
		slidesToShow: 4,
		slidesToScroll : 1,
		focusOnSelect: true,
		asNavFor : $(".big-slider"),
		responsive: [
		    {
		     breakpoint: 600,
		      settings: {
		      	vertical: false,
		        slidesToShow: 3
		      }
		    },
		    {
		     breakpoint: 480,
		      settings: {
		        slidesToShow: 2,
		        vertical: false
		      }
		    }
		  ]
	});


	if( $(".last-goods-slider").length > 0 ) {

		$lastGoodsSlider = $(".last-goods-slider-block");

		$frame = $lastGoodsSlider.find('.iframe');
		sly = new Sly($frame, {
			horizontal: 1,
			itemNav: 'basic',
			smart: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 3,
			scrollBar: $lastGoodsSlider.find('.scrollbar'),
			scrollBy: 1,
			activatePageOn: 'click',
			speed: 300,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1

		}).init();

	}

	$(window).resize(function(){

		sly.reload();

	});


});

