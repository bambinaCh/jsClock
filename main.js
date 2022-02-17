
/*clock*/
setInterval(function getTime() {
    const dateNow = new Date();
      
    document.querySelector(".clock").innerHTML = 
    `${dateNow.getHours().toString().padStart(2, "0")}:${dateNow.getMinutes().toString().padStart(2, "0")}:${dateNow.getSeconds().toString().padStart(2, "0")}`;
    },1000
);


 /*date*/
setInterval(function() {
  const dateNow = new Date();

  const months = ["Januar","Februar","März","April","Mai","Juni"
  ,"July","August","September","Oktober","November","Dezember"];


  document.getElementById("date").innerHTML =
  `${dateNow.getDate().toString().padStart(2, "0")} ${months[dateNow.getMonth()]} ${dateNow.getFullYear()}`;
  },1000
);
  
/* contdown*/

let dateTarget = new Date("2022-02-17T17:15:00");

let x = setInterval(function() {
  const dateNow = new Date().getTime();
  let distance  = dateTarget - dateNow;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2,"0");
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2,"0");
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,"0");
  const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2,"0");

  document.querySelector(".timer").innerHTML =
    days + ":" + hours + ":" + minutes + ":" + seconds;

  if (distance <= 0) {
    clearInterval(x);
    document.querySelector(".timer").innerHTML = "TIME IS UP";
  }
}, 1000);

document.querySelector(".date-button").addEventListener("click",function() {
  dateTarget = new Date(document.querySelector(".date-input").value);
});

/* TIMER */
function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;

let buttonPlay = document.querySelector(".buttonPlay");
let buttonPause = document.querySelector(".buttonPause");
let buttonReset = document.querySelector(".buttonPause");
function print(txt) {
  document.getElementById("display").innerHTML = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
  }, 10);
  showButton("PAUSE");
}

function pause() {
  clearInterval(timerInterval);
  showButton("PLAY");
}

function reset() {
  clearInterval(timerInterval);
  print("00:00:00");
  elapsedTime = 0;
  showButton("PLAY");
}

function showButton(buttonKey) {
  const buttonToShow = buttonKey === "PLAY" ? buttonPlay : buttonPause;
  const buttonToHide = buttonKey === "PLAY" ? buttonPause : buttonPlay;
  buttonToShow.style.display = "block";
  buttonToHide.style.display = "none";
}


buttonPlay.addEventListener("click", start);
buttonPause.addEventListener("click", pause);
buttonReset.addEventListener("click", reset);


 




/*
 <p id="demo"></p>


alert("Juli is so gut");
function()
const d = new Date();
document.getElementById("demo").innerHTML = `${d.getHours()}:${d.getMinutes()}`;


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();*/
