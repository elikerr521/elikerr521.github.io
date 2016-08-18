function maze(){
    background(0);
    fill(100);
    rect(260,500,10,100); //1
    rect(310,500,10,100); //2  
    rect(310,490,170,10); //3
    rect(100,490,170,10); //4
    rect(140,450,300,10); //5
    rect(140,250,10,200); //6
    rect(100,190,10,300); //7
    rect(430,250,10,200); //8
    rect(140,250,300,10); //9
    rect(470,190,10,300); // 10
    rect(320,190,150,10); //11
    rect(100,190,150,10); //12
    rect(210,200,10,50); //13
    rect(250,50,10,150); //14
    rect(320,50,10,150); //15
}
function maze3(){
   background(0);
   fill(100);
   rect(550,500,10,10)
}
function maze2(){
    background(0);
    fill(100);
    rect(300,300,50,50)
}

function countPixels(anArray,rgb){
  var count = 0;
  for (var i = 0; i < anArray.length; i++){
    if (anArray[i]==rgb){
      count+=1;        
  }
}
return count;
}

var x = 280;
var y = 580;
var gameover = false;
var oldP
var level1
var level2
var level3
level1 = true
level2 = false
leverl3 = false
function setup(){
    createCanvas(600,600); 
    background(0); 
    maze();
    loadPixels();
    oldP = countPixels(pixels,100);
}

function draw(){
    /*var retry = $('p');
retry.click(restart);
function restart(){
    gameover = true;
    }
    if (gameover == true){
    reset();
    fill(255); 
    rect(280,580,20,20);
    x= 280;
    y = 580;
    gameover = false;
}*/ 
if (gameover == false){
    if (level1 == true){
        maze();
    }
    if (level2 == true){
        maze2();
    }
    if (level3 == true){
        maze3();
    }
    fill(255);
    rect(x,y,20,20);
    if (key == "d"){
        x += 5;
    }
    if (key == "w"){
        y -=5;
    }
    if (key == "s"){
        y += 5;
    }
    if (key == "a"){
        x -= 5;
    }
    loadPixels();
    var newP = countPixels(pixels,100);
    if (y >= 600 || y <= 10){
       gameover = true;
   }
}       
if (x >= 600 || x <= 0){
    gameover = true;
}
if (newP < oldP){
    gameover = true;
}
if (gameover == true){
   if (level1 == true){
    maze();
}
if (level2 == true){
    maze2();
}
if (level3 == true){
    maze3();
}
fill(255);
rect(280,580,20,20);
x= 280;
y = 580;
gameover = false;
}

if (level1 == true){
    if (x < 320 && x > 250  && y < 50){
        console.log("step");
        level1 = false;
        level2 = true;
        level3 = false;
    }
}
}
/*if (level2 == true){
if ('xcondition' && 'ycondition'){
    level1 = false;
    level2 = false;
    level3 = true;
}
}
if (level3 == true){
    if ('xcondition' && 'ycondition'){
        level1 = false;
        level2 = false;
        level3 = false;
}
}
if (level1 == false && level2 == false && level3 == false){
    background(255)
}*/

