
$(document).ready(function() {

	$('#no').click(function(){
		document.querySelector('.age').innerHTML = 'You must be over 18 years old to join our site.';
	});
	$('#yes').click(function(){
		$('.first').hide();
		$('.second').fadeIn();
		changerPrize();// запускает смену картинок 
	});
	$('#stop').click(function(){
		$('.final').hide();
		$('.takePrize').fadeIn();
		clearInterval(interval);// останавливает смену картинок 
	});
///////////////////////////////рандомный приз////////////////////////////////
	var prizeList = ["i7.png", "px.png", "card.png", "vch.png"];// массив для хранения имен картинок 

	function changerPrize() {// поочередно выводит на экран картинки взятые с массива 
		var listNum = 0
		interval = setInterval(function() {
		  var val = "url(img/"+prizeList[listNum]+")"; // добавляет к имени картинки путь
		  $('.randomPrize').css('background-image', val); // выводит очередную картинку на экран 
		  listNum++
		  if(listNum >= prizeList.length){
		  	listNum = 0;
		  }
		  //console.log(listNum);
		}, 200);
	};
/////////////////////////////обработчик//////////////////////////////////////
	document.querySelector('.gameField').onclick = function(event) {
	  var target = event.target; // где был клик?
	  open(target); // открыть ячейку
	};
////////////////////////функция обработчика//////////////////////////////////
	var counter = 0; //счетчик кликов 
	function open (node){// принимает event.target (где был клик)
		if (!node.classList.contains("open") && counter < 2){
			node.classList.add("open");
			counter++;
		}

		else if(!node.classList.contains("open") && counter == 2){
			node.classList.add("prize");
			counter++;
			setTimeout(function(){
				$('.second').hide();
				$('.final').fadeIn();
			}, 500);
		}
	};
	///////////////////////////////////////////////////////////////////////
});