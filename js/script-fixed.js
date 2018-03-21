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
});