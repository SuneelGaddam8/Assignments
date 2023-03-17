let startBtn = document.getElementById('start');
let stopBtn = document.getElementById("stop");
let resetBtn = document.getElementById("reset");


let minute = 00;
let second = 00;


startBtn.addEventListener('click', function () {
	if(this.click){
	timer = true;
	stopWatch();}
	this.click=false;
});

stopBtn.addEventListener('click', function () {
	timer = false;
	startBtn.click=true;
});

resetBtn.addEventListener('click', function () {
	timer = false;
	startBtn.click=true;
	minute = 0;
	second = 0;
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
});
let count=0;
function stopWatch() {
    if (timer) {
		
        count++;
        if(count==100){
            second++;
            count=0;
        }

		if (second == 60) {
			minute++;
			second = 0;
		}

		if (minute == 60) {
			
			minute = 0;
			second = 0;
		}
		let minString = minute;
		let secString = second;
		if (minute < 10) {
			minString = "0" + minString;
		}

		if (second < 10) {
			secString = "0" + secString;
		}
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		setTimeout(stopWatch, 10);
	}

}
