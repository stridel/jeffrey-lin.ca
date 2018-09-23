$(document).ready(function () {
	
	$(document).on("scroll", onScroll);
	
	/* Smooth Scrolling */
	$(function() {
		$('a.smooth-scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

	/ *Navigation Bar Animation */
	$(window).scroll(function() {
		if ($(".navbar-custom").offset().top > 50) {
			$(".navbar-custom").addClass("nav-sticky");
		} else {
			$(".navbar-custom").removeClass("nav-sticky");
		}
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: 54
	});
	
	
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav-wrap a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top - (refElement.height() * 5 / 10) <= scrollPos && refElement.position().top + (refElement.height() * 7 / 10) > scrollPos) {
            $('#nav-wrap ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}