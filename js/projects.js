// makeActive(document.getElementById("proj1"));

makeActive(document.getElementById("proj1"));

function makeActive(element) {
	var isFirst = element.classList ? true : false;
	var element = isFirst ? element : this;
	var isActive = element.classList.contains("active");
	var rPane = document.getElementById("right-pane");
	var infoEl = document.getElementById("empty-info");
	element.style.transition = "all 0.1s linear 0s";
	projList = document.getElementsByClassName("proj");
	for (var i = 0; i < projList.length; i++) {
	  	projList[i].classList.remove("active");
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
	if (!isFirst) {
		scrollToItem(rPane);
	}
}

document.addEventListener('keydown', function(event) {
	// 37: Left, 38: Up, 39: Right, 40: Down
    if(event.keyCode == 37 || event.keyCode == 38) {
        projList = document.getElementsByClassName("proj");
        var activeInd = -1;
		for (var i = 0; i < projList.length; i++) {
		  	if (projList[i].classList.contains("active")) {
		  		activeInd = i;
		  	}
		}
		makeActive(projList[(activeInd - 1 + projList.length)%projList.length]);
    }
    else if(event.keyCode == 39 || event.keyCode == 40) {
        projList = document.getElementsByClassName("proj");
        var activeInd = -1;
		for (var i = 0; i < projList.length; i++) {
		  	if (projList[i].classList.contains("active")) {
		  		activeInd = i;
		  	}
		}
		makeActive(projList[(activeInd + 1)%projList.length]);
    }
});

function makeHover(element) {
	this.classList.add("hovered");
}

function dehover(element) {
	this.classList.remove("hovered");
}

function scrollToItem(item) {
    var diff=(item.offsetTop-window.scrollY)/20;
    if(!window._lastDiff){
        window._lastDiff = 0;
    }

    if (Math.abs(diff)>0) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)

        if(diff !== window._lastDiff){
            window._lastDiff = diff;
            window._TO=setTimeout(scrollToItem, 1, item);
        }
    } else {
        window.scrollTo(0, item.offsetTop)
    }
}

$('.proj').on('mousedown', makeActive)
$('.proj').on('mouseover', makeHover)
$('.proj').on('mouseout', dehover)