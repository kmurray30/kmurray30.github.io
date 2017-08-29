// makeActive(document.getElementById("proj1"));

function makeActive(element) {
	var isActive = element.classList.contains("active");
	var rPane = document.getElementById("right-pane");
	var infoEl = document.getElementById("empty-info");
	element.style.transition = "all 0.1s linear 0s";
	for (proj of document.getElementsByClassName("proj")) {
		proj.classList.remove("active");
	}
	// document.getElementById("right-pane").style.background = "#c0745d";
	if (isActive) {
		element.classList.remove("active");
		// rPane.style.background = "white";
	} else {
		element.classList.add("active");
		if (element.id == "proj1") {
			var infoEl = document.getElementById("proj1-info");
		}
		if (element.id == "proj2") {
			var infoEl = document.getElementById("proj2-info");
		}
		if (element.id == "proj3") {
			var infoEl = document.getElementById("proj3-info");
		}
		if (element.id == "proj4") {
			var infoEl = document.getElementById("proj4-info");
		}
		if (element.id == "proj5") {
			var infoEl = document.getElementById("proj5-info");
		}
		if (element.id == "proj6") {
			var infoEl = document.getElementById("proj6-info");
		}
		if (element.id == "proj7") {
			var infoEl = document.getElementById("proj7-info");
		}
	}
	rPane.innerHTML = infoEl.innerHTML;
}


function onHover(element) {
	element.classList.add("hovered");
}

function dehover(element) {
	for (proj of document.getElementsByClassName("proj")) {
		proj.classList.remove("hovered");
	}
}