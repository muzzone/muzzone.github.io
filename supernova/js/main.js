 // ВИЗУАЛЬНАЯ ОБРАБОТКА ЛАЙКОВ 
 function like(lbtn){
	var val = lbtn.children[0].innerHTML;
		if (lbtn.style.backgroundImage.indexOf("img/like.png")>0) {
			lbtn.style.backgroundImage = "url(img/like1.png)";
			lbtn.style.color = "#dd3f19";
			val ++;
			lbtn.children[0].innerHTML = val;
		}
		else{
			lbtn.style.backgroundImage = "url(img/like.png)";
			lbtn.style.color = "#adadad";
			val --;
			lbtn.children[0].innerHTML = val;
		};

	}


$(document).ready(function(){
	// СЛАЙДЕР
	$('.slider').flicker();
	// ВЫПАДАЮЩЕЕ МЕНЮ
	$('.menu-trigger').click(function(){
		
		$('.menu ul').slideToggle(100);
	});

	$(window).resize(function() {		
		if (  $(window).width() > 679 ) {			
			$('.menu ul').removeAttr('style');
		 }
	});
	// ПРОКРУТКА
	$('a[href*=#]').bind("click", function(e){
 	var anchor = $(this);
 	$('html, body').stop().animate({
 	scrollTop: $(anchor.attr('href')).offset().top
 	}, 300);
 	e.preventDefault();
 	});
 	return false;
});