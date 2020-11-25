let start = document.getElementById("start");
let stop1 = document.getElementById("stop");
let reset = document.getElementById("reset");

//get working minutes and sec
var wm = document.getElementById("w_min");
var ws = document.getElementById("w_sec");

//get breaking minutes and sec
var bm = document.getElementById("b_min");
var bs = document.getElementById("b_sec");

//store a reference to a timer variable
var startTimer = undefined;

//event on start button click
start.addEventListener("click", function () {
	if (startTimer === undefined) {
		startTimer = setInterval(timer, 1000);
	} else {
		alert("timer is already running");
	}
});

//event on stop button click
stop1.addEventListener("click", function () {
	stopInterval();
	startTimer = undefined;
});

//event on reset button click
reset.addEventListener("click", function () {
	//reset timer
	wm.innerText = 25;
	ws.innerText = "00";
	bm.innerText = 5;
	bs.innerText = "00";
	document.getElementById("counter").innerText = 0;
	stopInterval();
	startTimer = undefined;
});

//Timer function logic for pomodoro
function timer() {
	//work timer logic
	if (ws.innerText != 0) {
		ws.innerText--;
	} else if (wm.innerText != 0 && ws.innerText == 0) {
		ws.innerText = 59;
		wm.innerText--;
	}
	//break timer logic
	if (wm.innerText == 0 && ws.innerText == 0) {
		if (bs.innerText != 0) {
			bs.innerText--;
		} else if (bm.innerText != 0 && bs.innerText == 0) {
			bs.innerText = 59;
			bm.innerText--;
		}
	}

	//counter increment logic
	if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
		wm.innerText = 25;
		ws.innerText = "00";
		bm.innerText = 5;
		bs.innerText = "00";
		//increment counter by 1
		document.getElementById("counter").innerText++;
	}
}

//stop timer function
function stopInterval() {
	clearInterval(startTimer);
}
