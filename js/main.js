

$(document).scroll(function() {
	if($(window).scrollTop() >= 100){
       $('.burger span').css({
       	"background":"#ffe23f"
       })
	} else {
		$('.burger span').css({
			"background":"#ffffff"
		})
	}
});


$offsetform = $('#form').offset().top;
$(document).scroll(function() {
	if($(window).scrollTop() >= $offsetform){
		$('header').css({
			"position":"fixed",
			"top":'0',
			"padding":"20px 0"
		});
		$('.burger').css("top","50px");
	} else {
		$('header').css({
			"position":"static",
			"padding":"50px 0"
		});
		$('.burger').css("top","75px");
	}
});

$('.header_nav-mobail .header_nav-mobail-items li a').click(function(){
	$('.header_nav-mobail').removeClass('header_nav-mobail_active');
	$('.burger').removeClass('burger_active');
	$("header .logo:not('.header_nav-mobail .logo')").css('opacity','1');
})

$('.burger').click(function(){
	$(this).toggleClass('burger_active');
});
$('.burger').click(function(){
	if($('.burger').hasClass('burger_active')){
		$("header .logo:not('.header_nav-mobail .logo')").css('opacity','0');
	} else {
		$("header .logo:not('.header_nav-mobail .logo')").css('opacity','1');
	}
});


jQuery(document).ready(function() {
	$(".burger").click(function(){
		$('.header_nav-mobail').toggleClass('header_nav-mobail_active');
	});
	$("section").click(function(){
		$('.header_nav-mobail').removeClass('header_nav-mobail_active');
		$('.burger').removeClass('burger_active');
		$("header .logo:not('.header_nav-mobail .logo')").css('opacity','1');
	});
});

