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
});