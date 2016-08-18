var x;
var stop;
var dx;
function setup(){
	createCanvas(500,500);
	x=0;
	dx = 1;
	stop = true;
}

function draw(){
	background(0);
	rectMode(CENTER);
	rect(x,250,30,40);
	x+=dx
		if (x>width/2 && stop) {
		var myBtn
		myBtn = document.createElement("button");
		myBtn.textContent = "ChangeDirection";
		$("body").append(myBtn)
		stop = false
	}
	$("button").click(changeDxn)
}
function changeDxn(){
	dx =- dx
}