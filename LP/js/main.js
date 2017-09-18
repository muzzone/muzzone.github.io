$( document ).ready(function() {
    $('.toggl').click( function() {
    	if(document.querySelector('.navMob').classList.contains("hidden")){
    		$('.navMob').css('display', 'flex');
    		document.querySelector('.navMob').classList.remove("hidden");
    	}
    	else{
    		$('.navMob').css('display', 'none');
    		document.querySelector('.navMob').classList.add("hidden");
    	}
    });

    $(window).resize(function() {		
			if (  $(window).width() > 766 ) {			
				$('.navMob').css('display', 'none');
    			document.querySelector('.navMob').classList.add("hidden");
			 }
		});
    $('a[href*=#]').bind("click", function(e){
    var anchor = $(this);
    $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top
    }, 300);
    e.preventDefault();
    });
    return false;
});