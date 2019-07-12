var 
	selector = 'on-toggle',
	onclose  = 'on-close',
	classOpen = 'open',
	classSwitchOn = 'on';


// function close(e){
// 	var o, link;

// 	o = document.querySelectorAll( e.getAttribute(onclose) );
// 	o.forEach(function(i){
// 		i.classList.remove(classOpen);
// 	});

// 	link = document.querySelectorAll('[' + selector + ']');
// 	link.forEach(function(i){
// 		i.classList.remove(classSwitchOn);
// 	});
// }


// function open(e){

// 	e.classList.toggle(classSwitchOn);

// 	o = document.querySelectorAll( e.getAttribute(selector) );
// 	o.forEach(function(i){
// 		i.classList.toggle(classOpen);
// 	});
// }


function init(){

	var e = document.querySelectorAll('.js-sidebar-link');
	var c = document.querySelectorAll('.js-sidebar-content');

	e.forEach(function(i){
		i.addEventListener("click", function(event){
			event.preventDefault();

			var
				t = this,
				contentID = t.getAttribute(selector);

			e.forEach(function(i){
				if (i != t){
					i.classList.remove(classSwitchOn);
				}
				else{
					if (t.classList.contains(classSwitchOn))
						t.classList.remove(classSwitchOn);
					else
						t.classList.add(classSwitchOn);
				}
			});


			c.forEach(function(i){

				var id = '#'+i.id;

				if (id != contentID ){
					i.classList.remove(classOpen);
				}
				else{
					if (i.classList.contains(classOpen))
						i.classList.remove(classOpen);
					else
						i.classList.add(classOpen);

				}
			});


		});
	});

	// var e = document.querySelectorAll('[' + selector + ']');

	// e.forEach(function(i){

	// 	i.addEventListener("click", function(event){
	// 		event.preventDefault();
	// 		close(this);
	// 		open(this);
	// 	});

	// });
}


window.addEventListener('load', init, false);