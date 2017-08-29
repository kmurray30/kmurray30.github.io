// makeActive(document.getElementById("exp1"));

function makeActive(element) {
	var isActive = element.classList.contains("active");
	var rPane = document.getElementById("right-pane");
	var infoEl = document.getElementById("empty-info");
	element.style.transition = "all 0.1s linear 0s";
	for (exp of document.getElementsByClassName("exp")) {
		exp.classList.remove("active");
	}
	// document.getElementById("right-pane").style.background = "#c0745d";
	if (isActive) {
		element.classList.remove("active");
		// rPane.style.background = "white";
	} else {
		element.classList.add("active");
		if (element.id == "exp1") {
			var infoEl = document.getElementById("exp1-info");
		}
		if (element.id == "exp2") {
			var infoEl = document.getElementById("exp2-info");
		}
		if (element.id == "exp3") {
			var infoEl = document.getElementById("exp3-info");
		}
		if (element.id == "exp4") {
			var infoEl = document.getElementById("exp4-info");
		}
		if (element.id == "exp5") {
			var infoEl = document.getElementById("exp5-info");
		}
		if (element.id == "exp6") {
			var infoEl = document.getElementById("exp6-info");
		}
		if (element.id == "exp7") {
			var infoEl = document.getElementById("exp7-info");
		}
	}
	rPane.innerHTML = infoEl.innerHTML;
}


function onHover(element) {
	element.classList.add("hovered");
}

function dehover(element) {
	for (exp of document.getElementsByClassName("exp")) {
		exp.classList.remove("hovered");
	}
}