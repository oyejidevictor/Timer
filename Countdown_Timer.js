
document.querySelector('#setTime').classList.add('d-none');
document.querySelector('#reset').classList.add('d-none');

//proceed button
function proceed(){
    document.querySelector('#welcome').classList.add('d-none');
    document.querySelector('#reset').classList.add('d-none');
    document.querySelector('#setTime').classList.remove('d-none');
}

let seconds;
let minutes;
let hours;

function reset(){
    location.reload();
}

//Set time button
function setTime(){
    seconds = document.getElementById("seconds").value
    minutes = document.getElementById("minutes").value
    hours = document.getElementById("hours").value
    var regEx = /^[\d]$/i;

    //Seconds
    if (seconds == ""){
            seconds = 0;
        }
    else if(seconds > 59){
            seconds = 59;
        }
    else if (!(seconds.match(regEx))){
            seconds = 0;
        }

   //Minutes     
    if (minutes == ""){
            minutes = 0;
        }
    else if(minutes > 59){
        minutes = 59;
    }
    else if (!(minutes.match(regEx))){
        minutes = 0;
    }

    //Hours
    if (hours == ""){
            hours = 0;
        }
    else if(hours > 24){
        hours= 24;
    }
    else if (!(hours.match(regEx))){
        hours = 0;
    }

    timer()
}

//add seconds button
function addS(){
    if(seconds > 49){
        seconds = seconds + 0;
    }
    else{
        seconds = seconds + 10;
    }
}

//add minutes button
function addM(){
    if(minutes > 54){
        minutes = minutes + 0;
    }
    else{
        minutes = minutes + 5;
    }
}

//add hours button
function addH(){
    if(hours > 23){
        hours = hours + 0;
    }
    else{
        hours = hours + 1;
    }
}

//substract seconds button
function subS(){
    if(seconds < 0 || seconds <= 10){
        seconds = seconds + 0;
    }
    else{
        seconds = seconds - 10;
    }
}

//substract minutes button
function subM(){
    if(minutes < 0 || minutes <= 0){
        minutes = minutes + 0;
    }
    else{
        minutes = minutes - 1;
    }
}

//subtract hours button
function subH(){
    if(hours < 0 || hours <= 0){
        hours = hours + 0;
    }
    else{
        hours = hours - 1;
    }
}

//Timer function counts down by a second
function timer() {
    startTime();
    document.querySelector('#setTime').classList.add('d-none'); 
    document.querySelector('#reset').classList.remove('d-none');
    interval = setInterval( function() {
        document.querySelector('#timer').innerHTML = `<p class="counter">${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}</p>`;
        if (seconds == 0 && minutes > 0) {
            seconds +=59
            if(minutes > 0){

                minutes -=1;
            }
            document.querySelector('#timer').innerHTML = `<p class="counter">${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}</p>`;
        }
        else if (minutes == 0 && hours > 0) {
            minutes +=59;
            if(seconds == 0){
                seconds =59;
            }
            if(hours > 0){
                hours -=1;
            }
            document.querySelector('#timer').innerHTML = `<p class="counter">${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)}</p>`;
        }
        else if (hours == 0 && minutes == 0 && seconds == 0){
            document.querySelector('#timer').innerHTML = `<p class="counter1">TIME UP</p>`;
            var blink = document.querySelector('#timer')
            setInterval(function(){
                blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
            },1000);
            return clearInterval(interval);
        }
        seconds--;
    }, 1000)
    
}

//Check time function checks if seconds, minutes and hours is than two digits
//if less than two digits it add 0 to the left side of the digit
function checkTime(i) {
    if (i < 10) {return  "0" + i}
    else{
        return i;
    };  // add zero in front of numbers < 10
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('#currentTime').innerHTML = `<p class="currentTimeShape currentTime">${h}:${m}:${s}</p>`;
    var t = setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }