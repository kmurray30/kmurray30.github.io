$(document).ready(function(){
    var $window = $(window);

 //    for (info of document.getElementsByClassName("info")) {
	// 	info.style.display = "none";
	// }

    $window.on('resize', function () {
    windowsize = $window.width();

        console.log(windowsize);
        if (windowsize < 850) 
        {
            document.getElementById("nav").style.display = "none";
            document.getElementById("button").style.display = "block";
        	document.getElementById("header-text").style.paddingTop="10px";
			var disp = document.getElementById("dropdown").style.display;
        	if (disp == "none" || disp == "") {
				document.getElementById("header").style.height = "100px";
        	}
        } else {
        	document.getElementById("nav").style.display = "block";
        	document.getElementById("button").style.display = "none";
        	document.getElementById("dropdown").style.display = "none";
        	document.getElementById("header-text").style.paddingTop="40px";
			document.getElementById("header").style.height = "160px";
        }
    }).resize();

});

// var $window = $(window);
// windowsize = $window.width();
// if (windowsize < 850) {
// 	setTimeout(function(){
// 		// if (!document.getElementById("dropdown").firstElementChild.firstElementChild.classList.contains("active")) {
// 		// 	toggleMenu();
// 		// }
// 	}, 50);;
// }

function toggleMenu() {
	var disp = document.getElementById("dropdown").style.display;
	document.getElementById("button").style.color = "black";
	document.getElementById("button").style.backgroundColor = "white";
	if (disp == "none" || disp == "") {
		document.getElementById("dropdown").style.display = "block";
		document.getElementById("header").style.transition = "all 0.2s linear 0s"
		document.getElementById("header").style.height = "360px";
		setTimeout(function(){
			document.getElementById("dropdown").style.transition = "all 0.2s linear 0s";
			document.getElementById("dropdown").style.opacity = "1";
  		}, 50);;
	}
	if (disp == "block") {
	document.getElementById("button").style.color = "white";
	document.getElementById("button").style.backgroundColor = "black";
		document.getElementById("header").style.transition = "all 0.2s linear 0s"
		document.getElementById("dropdown").style.transition = "all 0.2s linear 0s";
		document.getElementById("dropdown").style.opacity = "0";
		setTimeout(function(){
			document.getElementById("header").style.height = "100px";
  		}, 50);;
  		setTimeout(function(){
			document.getElementById("dropdown").style.display = "none";
  		}, 100);;
		
	}
}