$(document).ready(function() {
	$('#menu').show();
	$('.menuOpenClose').click(function() {
		if($("#menu").hasClass("menuClose")){
			$("#menu").removeClass("menuClose");
			console.log('work');
		}
		else{
			$("#menu").addClass("menuClose");
		}
	});
	$('.cd-primary-nav').click(function() {
		$("#menu").addClass("menuClose");
	});
});