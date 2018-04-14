
	function sidebarFunction(x) {
	 	x.classList.toggle("change");


	 	 var z = document.querySelector(".nav");
    	 var navmenuul = document.querySelector(".navmenuul");
    if (z.style.width === "100%") {
        z.style.width = "0px";
    	navmenuul.style.transform = "scale(0)";
    } 
    else {
        z.style.width = "100%";
    	navmenuul.style.transform = "scale(1.1)";	
    }

	}


	(function() {
  		var video = document.getElementById("Vid");
  		video.addEventListener( "canplay", function() {
    	video.play();
  		});
	})();
