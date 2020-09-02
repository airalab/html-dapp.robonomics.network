function sidebar(){
	document.querySelector('#mobile-menutoggle').addEventListener("click", function(event){
		event.preventDefault();

		document.querySelector('#mobile-sidebarmenu').classList.add('open');
		document.querySelector('.outback').classList.add('open');
	});

	document.querySelector('.outback').addEventListener("click", function(event){
		event.preventDefault();

		var popups = document.querySelectorAll('.popup');
		popups.forEach(function(i){
			i.classList.remove('open');
		});

		this.classList.remove('open');
	});
}

window.addEventListener('load', sidebar, false);


// var 
// 	selector = 'on-toggle',
// 	onclose  = 'on-close',
// 	classOpen = 'open',
// 	classSwitchOn = 'active';


// function init(){

// 	var e = document.querySelectorAll('.js-sidebar-link');
// 	var c = document.querySelectorAll('.js-sidebar-content');

// 	e.forEach(function(i){
// 		i.addEventListener("click", function(event){
// 			event.preventDefault();

// 			var
// 				t = this,
// 				contentID = t.getAttribute(selector);

// 			e.forEach(function(i){
// 				if (i != t){
// 					i.classList.remove(classSwitchOn);
// 				}
// 				else{
// 					if (t.classList.contains(classSwitchOn))
// 						t.classList.remove(classSwitchOn);
// 					else
// 						t.classList.add(classSwitchOn);
// 				}
// 			});


// 			c.forEach(function(i){

// 				var id = '#'+i.id;

// 				if (id != contentID ){
// 					i.classList.remove(classOpen);
// 				}
// 				else{
// 					if (i.classList.contains(classOpen))
// 						i.classList.remove(classOpen);
// 					else
// 						i.classList.add(classOpen);

// 				}
// 			});


// 		});
// 	});
// }


// window.addEventListener('load', init, false);