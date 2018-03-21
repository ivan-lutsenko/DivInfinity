$(document).ready(function(){
	//Note osob
	$(".menu-1").click(function(){
		//animation hamburger (open)
		$(".menu-1").toggleClass("trans");
		$("body").toggleClass("overflow");
		$(".menu").removeClass("fadeInDown animated");
		$(".menu").addClass("show fadeInLeft animated");

		setTimeout(function(){
			$(".menu nav ul li:nth-child(1)").addClass("slideInDown animated opacity");
		}, 200);
		setTimeout(function(){
			$(".menu nav ul li:nth-child(2)").addClass("slideInDown animated opacity");
		}, 400);
		setTimeout(function(){
			$(".menu nav ul li:nth-child(3)").addClass("slideInDown animated opacity");
		}, 600);
		setTimeout(function(){
			$(".menu nav ul li:nth-child(4)").addClass("slideInDown animated opacity");
		}, 800);
		setTimeout(function(){
			$(".menu nav ul li:nth-child(5)").addClass("slideInDown animated opacity");
		}, 1000);
	});
	$(".cross-1").click(function(){
		//animation hamburger
		$(".cross-1").toggleClass("trans");
		$("body").toggleClass("overflow");
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
	});
});