$(document).ready(function(){
	$('.form-1 .submit-1').click(function(){
		$.ajax({
			type: "POST",
			url: "php/check.php",
			data: {
				name: $('.form-1 .name').val(),
				email: $('.form-1 .mail').val(),
				tel: $('.form-1 .tel').val()
			},
			success: function(msg){
				data = JSON.parse(msg);
				if (data.flag)
				{
					$(".form-1 .information").removeClass("green");
					$(".form-1 .information").removeClass("red");
					$(".form-1 .information").removeClass("block");

					$(".form-1 .information").addClass("block");
					$(".form-1 .information").addClass("green");
					$('.form-1 .information .text').text('Спасибо, Ваша заявка отправлена! Наши специалисты свяжутся с Вами в ближайшее время.');
				}
				else
				{
					$(".form-1 .information").removeClass("green");
					$(".form-1 .information").removeClass("red");
					$(".form-1 .information").removeClass("block");

					$(".form-1 .information").addClass("block");
					$(".form-1 .information").addClass("red");
					$('.form-1 .information .text').text('Заполните все поля!');
				}
			}
		});
	});
	$('.form-2 .marg .submit-1').click(function(){
		$.ajax({
			type: "POST",
			url: "php/check.php",
			data: {
				name: $('.form-2 .marg .name').val(),
				email: $('.form-2 .marg .mail').val(),
				tel: $('.form-2 .marg .tel').val()
			},
			success: function(msg){
				data = JSON.parse(msg);
				if (data.flag)
				{
					$(".form-2 .marg .information").removeClass("green");
					$(".form-2 .marg .information").removeClass("red");
					$(".form-2 .marg .information").removeClass("block");

					$(".form-2 .marg .information").addClass("block");
					$(".form-2 .marg .information").addClass("green");
					$('.form-2 .marg .information .text').text('Спасибо, Ваша заявка отправлена!');
				
					setTimeout(function(){
						$(".form .form-2").removeClass("zoomIn zoomOut animated");
						$(".form .form-2").addClass("zoomOut animated");
						setTimeout(function(){
						$(".form").removeClass("open");
						$("body").toggleClass("overflow-1");
						}, 500);
					}, 3000);
					setTimeout(function(){
						$('body, html').animate({scrollTop: 0}, 2000);
					}, 5000);
				}
				else
				{
					$(".form-2 .marg .information").removeClass("green");
					$(".form-2 .marg .information").removeClass("red");
					$(".form-2 .marg .information").removeClass("block");

					$(".form-2 .marg .information").addClass("block");
					$(".form-2 .marg .information").addClass("red");
					$('.form-2 .marg .information .text').text('Заполните все поля!');
				}
			}
		});
	});
});