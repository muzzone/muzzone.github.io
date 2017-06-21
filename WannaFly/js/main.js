$(document).ready(function(){
 	$('a[href*=#]').bind("click", function(e){
 	var anchor = $(this);
 	$('html, body').stop().animate({
 	scrollTop: $(anchor.attr('href')).offset().top
 	}, 300);
 	e.preventDefault();
 	});
 	return false;
 });

$(document).ready(function(){
	jQuery(function($){
   		$("#phone").mask("(999) 99 999-99-99");
   		$("#phone2").mask("(999) 99 999-99-99");
	});
});