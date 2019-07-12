var 
	selector = 'on-toggle',
	onclose  = 'on-close',
	classOpen = 'open',
	classSwitchOn = 'active';


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
}


window.addEventListener('load', init, false);