$(document).ready(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300) 
			$(".substrate").addClass("position");
		else
			$(".substrate").removeClass("position");
	});
});