$(function(){
	var p = 0;
	if ($(window).width() > 767)
		p = 135;
	else
		p = 80;
	$('a[href^="#"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
		bl_top = $(target).offset().top - p;
		$('body, html').animate({scrollTop: bl_top}, 1500);
		return false;
	});
	$(".menu nav ul li a").click(function(){
		if ($(window).width() <= 1250)
		{
			$(".cross-1").toggleClass("trans");
			$("body").removeClass("overflow");
			$(".menu").removeClass("fadeInLeft");
			$(".menu").addClass("fadeOutLeft");
			setTimeout(function(){
				$(".menu").removeClass("show fadeOutLeft animated");
				$(".menu nav ul li:nth-child(1)").removeClass("slideInDown animated opacity");
				$(".menu nav ul li:nth-child(2)").removeClass("slideInDown animated opacity");
				$(".menu nav ul li:nth-child(3)").removeClass("slideInDown animated opacity");
				$(".menu nav ul li:nth-child(4)").removeClass("slideInDown animated opacity");
				$(".menu nav ul li:nth-child(5)").removeClass("slideInDown animated opacity");
			}, 500);
		}
	});
});
