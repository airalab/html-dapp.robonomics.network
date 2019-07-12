document.addEventListener('DOMContentLoaded',function(){
  

	//popper.js, tooltip.js
  	var reference = document.querySelectorAll('.js-tooltip');

  	console.log(reference);

  	if ( reference )
  		{
  			reference.forEach(function(e){
  				new Tooltip(
				  	e,
				  	{
					    title: e.getAttribute('data-tooltip'),
					    placement: 'auto'
				  	});
  			});

  		}

});