
var timerMin;
var timerSec;

// Clock on the page 
function CurrentTime(){
  
  var hours = hour();
  if(hours > 12){
    hours = hours - 12;
  }
   
  var minutes =  minute();
  if(minutes <10){
    minutes = "0" + minutes;
  }
  // console.log(hours,minutes);
  var Time = hours +' : '+ minutes;
  if (hour() > 11){
    Time =  Time + " PM";
  }else{
    Time = Time + " AM";
  }

  document.getElementById("time").innerHTML = Time;
  setTimeout('CurrentTime()',1000);
}



function countdown(){
  if ($("#Minutes").val() == 0){
  window .alert("Please Enter The Amount of minutes you would like to study");
    
  }else{
    timerMin = $("#Minutes").val() -1 ;
    timerSec = 60;
    tick()//mins-1,60);
    $("#Minutes").val("");
  }
}
function tick(){
  var time = document.getElementById("Timer");
  timerSec --;
  time.innerHTML = timerMin + ":" + (timerSec < 10 ? "0" : "") + timerSec;
  if (timerSec > 0 ){
    setTimeout(tick, 1000)
  }else{
    if (timerMin > 0){
      timerMin--;
      setTimeout(tick, 1000);
      timerSec = 60
      
    }
  }
  if (timerMin == 0){
    if(timerSec == 00){
      window.alert("TIME IS UP !!!!")

    }
  }
}


function setup(){
  CurrentTime()
}

function draw(){
}
