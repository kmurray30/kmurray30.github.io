// makeActive(document.getElementById("exp1"));

makeActive(document.getElementById("exp1"));

function makeActive(element) {
	var isFirst = element.classList ? true : false;
	var element = isFirst ? element : this;
	var isActive = element.classList.contains("active");
	var rPane = document.getElementById("right-pane");
	var infoEl = document.getElementById("empty-info");
	element.style.transition = "all 0.1s linear 0s";
	expList = document.getElementsByClassName("exp");
	for (var i = 0; i < expList.length; i++) {
	  	expList[i].classList.remove("active");
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
	if (!isFirst) {
		scrollToItem(rPane);
	}
}

document.addEventListener('keydown', function(event) {
	// 37: Left, 38: Up, 39: Right, 40: Down
    if(event.keyCode == 37 || event.keyCode == 38) {
        expList = document.getElementsByClassName("exp");
        var activeInd = -1;
		for (var i = 0; i < expList.length; i++) {
		  	if (expList[i].classList.contains("active")) {
		  		activeInd = i;
		  	}
		}
		makeActive(expList[(activeInd - 1 + expList.length)%expList.length]);
    }
    else if(event.keyCode == 39 || event.keyCode == 40) {
        expList = document.getElementsByClassName("exp");
        var activeInd = -1;
		for (var i = 0; i < expList.length; i++) {
		  	if (expList[i].classList.contains("active")) {
		  		activeInd = i;
		  	}
		}
		makeActive(expList[(activeInd + 1)%expList.length]);
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

$('.exp').on('mousedown', makeActive)
$('.exp').on('mouseover', makeHover)
$('.exp').on('mouseout', dehover)