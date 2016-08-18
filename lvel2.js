var x = 280;
var y = 580;
function setup(){
    createCanvas(600,600); 
    background(0); 
    



}
function draw(){
    fill(255);
    rect(x,y,20,20);
        if (key == "d"){
            x += 1;
        }
        if (key == "w"){
            y -=1;
        }
        if (key == "s"){
            y += 1;
        }
        if (key == "a"){
            x -= 1
        }
}        