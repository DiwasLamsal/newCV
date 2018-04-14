
	function myFunction(x) {
	 	x.classList.toggle("change");


	 	 var z = document.querySelector(".nav");
    	 var navmenuul = document.querySelector(".navmenuul");
    if (z.style.width === "300px") {
        z.style.width = "0px";
    	navmenuul.style.visibility = "hidden";
    } 
    else {
        z.style.width = "300px";
    	navmenuul.style.visibility = "visible";	
    }

	}


	(function() {
  		var video = document.getElementById("Vid");
  		video.addEventListener( "canplay", function() {
    	video.play();
  		});
	})();
