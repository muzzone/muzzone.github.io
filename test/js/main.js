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
});