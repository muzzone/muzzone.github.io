$(document).ready(function() {
	$('#menu').show();
	$('.menuOpenClose').click(function() {
		if($("#menu").hasClass("menuClose")){
			$("#menu").removeClass("menuClose");
		}
		else{
			$("#menu").addClass("menuClose");
		}
	});
	$('.cd-primary-nav').click(function() {
		$("#menu").addClass("menuClose");
	});

	var win_h = $(window).height();
	var win_w = $(window).width();

	if (win_h < 899 || win_w < 766){
		$('#navFirstPage').attr('href', '#section0');
		$('#navAbout').attr('href', '#section1');
		$('#navServices').attr('href', '#section2');
		$('#navClients').attr('href', '#section4');
		$('#navPrices').attr('href', '#section5');
		$('#navContacts').attr('href', '#section6');

		$('a[href*=#]').bind("click", function(e){
	 	var anchor = $(this);
	 	$('html, body').stop().animate({
	 	scrollTop: $(anchor.attr('href')).offset().top
	 	}, 300);
	 	e.preventDefault();
	 	});
	};


	window.onresize = function() {
		if (($(window).height() < 899 && win_h > 899) || ($(window).width() < 766 && win_w > 766)){
			location.reload();
		};
	};
});