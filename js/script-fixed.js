$(document).ready(function(){
	if ($(window).width() > 767)
	{
		$(window).scroll(function() {
			if ($(this).scrollTop() > 300)
				$(".substrate").addClass("position");
			else
				$(".substrate").removeClass("position");
		});
	}
	if ($(window).width() <= 980)
	{
		$(window).scroll(function() {
			if ($(this).scrollTop() > 800)
				$(".button-up").addClass("position");
			else
				$(".button-up").removeClass("position");
		});
	}
	$(".button-up .up").bind('click.smoothscroll', function(){
		$('body, html').animate({scrollTop: 0}, 1000);
		return false;
	});
});