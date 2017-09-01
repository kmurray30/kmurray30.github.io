
makeActive(document.getElementById("skydive-hobby"));

function makeActive(element) {
	alert("Hello1");
	console.log("makeActive called")
	var element = element.classList ? element : this;
	alert("Hello2");
	// var isEmpty = element.id == "empty-info";
	var isActive = element.classList.contains("active");
	var rPane = document.getElementById("right-pane");
	var infoEl = document.getElementById("empty-info");
	element.style.transition = "all 0.1s linear 0s";
	for (hobby of document.getElementsByClassName("hobby")) {
		hobby.classList.remove("active");
	}
	// document.getElementById("right-pane").style.background = "#c0745d";

	alert("Hello3");
	if (isActive) {
		element.classList.remove("active");
		// rPane.style.background = "#372019";
	} else {
		element.classList.add("active");
		if (element.id == "piano-hobby") {
			var infoEl = document.getElementById("piano-info");
		}
		if (element.id == "skydive-hobby") {
			var infoEl = document.getElementById("skydive-info");
		}
		if (element.id == "cat-hobby") {
			var infoEl = document.getElementById("cat-info");
		}
		if (element.id == "logic-hobby") {
			var infoEl = document.getElementById("logic-info");
		}
		if (element.id == "unity-hobby") {
			var infoEl = document.getElementById("unity-info");
		}
		if (element.id == "track-hobby") {
			var infoEl = document.getElementById("track-info");
		}
	}

	alert("Hello4");
	rPane.innerHTML = infoEl.innerHTML;



	// var delay = 1;
	// element.style.transition = "all " + delay + "s linear 0s";
	// invis(rPane);
	// fadeIn(rPane, delay)
	// if (isEmpty) {
	// 	rPane.innerHTML = infoEl.innerHTML;
	// 	setTimeout(function(){
	// 		fadeIn(rPane, delay);
	//   	}, delay*1000);;
	// } else {
	// 	fadeOut(rPane, delay/2);
	// 	setTimeout(function(){
	// 		rPane.innerHTML = infoEl.innerHTML;
	//   	}, delay*500);;
	// 	setTimeout(function(){
	// 		fadeIn(rPane, delay/2);
	//   	}, delay*1000);;
	// }
	








	// element.parentElement.getElementsByTagName('div')[1].classList.add("active");

	// // alert(txt);
	
	// if (element == element.parentElement.getElementsByTagName('div')[0]) {

	// 	// var im1 = element.parentElement.getElementsByTagName('div')[0].firstElementChild.firstElementChild.src;
	// 	// var im2 = element.parentElement.getElementsByTagName('div')[1].firstElementChild.firstElementChild.src;
	// 	// element.parentElement.getElementsByTagName('div')[0].firstElementChild.firstElementChild.src=im2;
	// 	// element.parentElement.getElementsByTagName('div')[1].firstElementChild.firstElementChild.src=im1;


	// 	var html1 = element.parentElement.getElementsByTagName('div')[0].firstElementChild.innerHTML;
	// 	var html2 = element.parentElement.getElementsByTagName('div')[1].firstElementChild.innerHTML;
	// 	element.parentElement.getElementsByTagName('div')[0].firstElementChild.innerHTML=html2;
	// 	element.parentElement.getElementsByTagName('div')[1].firstElementChild.innerHTML=html1;
	// }
	// element.firstElementChild.firstElementChild.src=imSwap;
}

// function invis(element) {
// 	if (element == null || element.style == null) {
// 		return;
// 	}
// 	element.style.transition = "opacity 0s linear 0s";
// 	element.style.transition = "background 0s linear 0s";
// 	element.style.opacity = "0";
// 	for (child of element.childNodes) {
// 		fadeOut(child);
// 	}
// }

// function fadeOut(element, delay) {
// 	if (element == null || element.style == null) {
// 		return;
// 	}
// 	// alert("fading " + element + " in");
// 	element.style.transition = "opacity " + delay + "s linear 0s";
// 	element.style.opacity = "0";
// 	for (child of element.childNodes) {
// 		fadeOut(child);
// 	}
// }

// function fadeIn(element, delay) {
// 	if (element == null || element.style == null) {
// 		return;
// 	}
// 	// alert("fading " + element + " in");
// 	element.style.transition = "opacity 1s linear 0s";
// 	element.style.transition = "background 1s linear 0s";
// 	setTimeout(function(){
// 		element.style.opacity = "1";
//   	}, 0);;
// 	for (child of element.childNodes) {
// 		fadeIn(child);
// 	}
// }

function onHover(element) {
	// for (hobby of document.getElementsByClassName("hobby")) {
	// 	hobby.classList.remove("hovered");
	// }
	element.classList.add("hovered");
}

function dehover(element) {
	for (hobby of document.getElementsByClassName("hobby")) {
		hobby.classList.remove("hovered");
	}
}

function sleep(ms) {
  setTimeout(function(){
    //do what you need here
  }, ms);;
}

$('.hobby').on('mousedown', makeActive)


