
	function myFunction(x) {
	 	x.classList.toggle("change");
	}


	(function() {
  		var video = document.getElementById("Vid");
  		video.addEventListener( "canplay", function() {
    	video.play();
  		});
	})();
