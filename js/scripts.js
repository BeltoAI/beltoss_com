(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		$('.blankSlider').owlCarousel({
			items: 1,
			loop: true,
			smartSpeed: 1000
		});

		$(".accordion-content").css("display", "none");
		// Open the first accordion content by default
		$(".accordion-title").first().addClass("open");
		$(".accordion-content").first().slideDown(300);
		$(".accordion-title").click(function() {
			$(".accordion-title").not(this).removeClass("open");
			$(".accordion-title").not(this).next().slideUp(300);
			$(this).toggleClass("open");
			$(this).next().slideToggle(300);
		});

		//Animation Handler
		new WOW().init();		
	});
})(jQuery);