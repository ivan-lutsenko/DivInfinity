function show() {
	setTimeout(function(){
		$(".form").addClass("open");
		$(".form .form-2").removeClass("zoomIn zoomOut animated");
		$(".form .form-2").addClass("zoomIn animated");
		$("body").toggleClass("overflow-1");
	}, 500);
}
$(".form .form-2 .close").click(function(){
	$(".form .form-2").removeClass("zoomIn zoomOut animated");
	$(".form .form-2").addClass("zoomOut animated");
	setTimeout(function(){
		$(".form").removeClass("open");
		$("body").toggleClass("overflow-1");
	}, 500);
});
$(".click").click(function(){
	show();
});