
	
// THIS IS THE JAVASCRIPT USED FOR THE CV


//FOR THE LOADER
window.onload = function(){
  document.querySelector(".load").style.display="none";
};



//FOR THE SIDEBAR(HAMBURGER)
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
    	navmenuul.style.transform = "scale(1)";	
    }

	}


