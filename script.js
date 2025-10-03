var debugText = document.getElementById("title").innerHTML;

var clock = new Date();
var getSeconds;
var getMinutes;
var getHours;

var getYear;
var getMonth;
var getDate;
var getDay;
var dayExplanation;
var getFullDate;

var myLang = navigator.language;

if (myLang == "id") {
    document.getElementById("title").innerHTML = "Jam Digital";
    document.getElementById("clock-button").innerHTML = "Jam";
    document.getElementById("timer-button").innerHTML = "Pengatur Waktu";
    document.getElementById("alarm-button").innerHTML = "Alarm";
}

document.getElementById("hours").innerHTML = clock.getHours();
document.getElementById("minutes").innerHTML = clock.getMinutes();
document.getElementById("seconds").innerHTML = clock.getSeconds();

let myClock = setInterval(resetClock, 1000);
let myDate = setInterval(resetDate, 1000);
// clearInterval(myClock);


function resetClock() {
    clock = new Date();
    getHours = clock.getHours();
    getMinutes = clock.getMinutes();
    getSeconds = clock.getSeconds();

    if (currentButton[0] == "clock") {

        if (getHours < 10) {
            document.getElementById("hours").innerHTML = "0" + getHours;
        } else {
            document.getElementById("hours").innerHTML = getHours;
        }

        if (getMinutes < 10) {
            document.getElementById("minutes").innerHTML = "0" + getMinutes;
        } else {
            document.getElementById("minutes").innerHTML = getMinutes;
        }
    
        if (getSeconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + getSeconds;
        } else {
            document.getElementById("seconds").innerHTML = getSeconds;
        }


        if (getSeconds % 2 == 0) {
            document.getElementById("clock-colon1").style.opacity = "100%";
            document.getElementById("clock-colon2").style.opacity = "100%";
        } else {
            document.getElementById("clock-colon1").style.opacity = "0%";
            document.getElementById("clock-colon2").style.opacity = "0%";
        }
    }
}

function resetDate() {
    clock = new Date();
    getYear = clock.getFullYear();
    getMonth = clock.getMonth();
    getDate = clock.getDate();
    getDay = clock.getDay();

    switch (getDay) {
        case 1:
            if (myLang == "id") {
                dayExplanation = "Senin";
            } else {
                dayExplanation = "Monday";
            }
            break;

        case 2:
            dayExplanation = "Tuesday";
            break;

        case 3:
            dayExplanation = "Wednesday";
            break;

        case 4:
            dayExplanation = "Thursday";
            break;

        case 5:
            if (myLang == "id") {
                dayExplanation = "Jumat";
            } else {
                dayExplanation = "Friday";
            }
            break;

        case 6:
            dayExplanation = "Saturday";
            break;
    
        default:
            dayExplanation = "Sunday";
            break;
    }

    if (myLang == "id") {
        getFullDate = dayExplanation + " / " + getDate + "-" + getMonth + "-" + getYear;
    } else {
        getFullDate = dayExplanation + "," + getDate + "/" + getMonth + "/" + getYear;
    }
    document.getElementById("dates").innerHTML = getFullDate;
}

resetDate();



// Buttons

const buttonActive = "yellow";
const buttonActiveBorder = "2px solid red";
const buttonInactive = "rgb(76, 76, 76)";
const buttonInactiveBorder = "2px solid rgb(200, 200, 200)";
const buttonStop = "orange";

var currentButton = ["clock"];

let getClockButton = document.getElementById("clock-btn").style;
let getTimerButton = document.getElementById("timer-btn").style;
let getAlarmButton = document.getElementById("alarm-btn").style;
let getStopwatchButton = document.getElementById("stopwatch-btn").style;

function resetButtonVisibility() {

    if (currentButton[0] == "alarm" || currentButton[0] == "timer") {
        document.getElementById("time-1").style.display = "inline";
        document.getElementById("time-2").style.display = "inline";
        document.getElementById("time-3").style.display = "inline";
    } else {
        document.getElementById("time-1").style.display = "none";
        document.getElementById("time-2").style.display = "none";
        document.getElementById("time-3").style.display = "none";
    }

    switch (currentButton[0]) {
        case "clock":
            getClockButton.backgroundColor = buttonActive;
            getClockButton.border = buttonActiveBorder;
            getTimerButton.backgroundColor = buttonInactive;
            getTimerButton.border = buttonInactiveBorder;
            getAlarmButton.backgroundColor = buttonInactive;
            getAlarmButton.border = buttonInactiveBorder;
            getStopwatchButton.backgroundColor = buttonInactive;
            getStopwatchButton.border = buttonInactiveBorder;
            enterClockMode();
            break;
        
        case "timer":
            getTimerButton.backgroundColor = buttonActive;
            getTimerButton.border = buttonActiveBorder;
            getClockButton.backgroundColor = buttonInactive;
            getClockButton.border = buttonInactiveBorder;
            getAlarmButton.backgroundColor = buttonInactive;
            getAlarmButton.border = buttonInactiveBorder;
            getStopwatchButton.backgroundColor = buttonInactive;
            getStopwatchButton.border = buttonInactiveBorder;
            enterTimerMode();
            break;

        case "alarm":
            getAlarmButton.backgroundColor = buttonActive;
            getAlarmButton.border = buttonActiveBorder;
            getTimerButton.backgroundColor = buttonInactive;
            getTimerButton.border = buttonInactiveBorder;
            getClockButton.backgroundColor = buttonInactive;
            getClockButton.border = buttonInactiveBorder;
            getStopwatchButton.backgroundColor = buttonInactive;
            getStopwatchButton.border = buttonInactiveBorder;
            enterAlarmMode();
            break;

        case "stopwatch":
            getStopwatchButton.backgroundColor = buttonActive;
            getStopwatchButton.border = buttonActiveBorder;
            getAlarmButton.backgroundColor = buttonInactive;
            getAlarmButton.border = buttonInactiveBorder;
            getTimerButton.backgroundColor = buttonInactive;
            getTimerButton.border = buttonInactiveBorder;
            getClockButton.backgroundColor = buttonInactive;
            getClockButton.border = buttonInactiveBorder;
            enterStopwatchMode();
            break;

        default:
            break;
    }
}

resetButtonVisibility();



// Change Button Visibility on Click

function toggleClockMode() {
    currentButton.pop();
    currentButton.push("clock");
    resetButtonVisibility();
}

function toggleTimerMode() {
    currentButton.pop();
    currentButton.push("timer");
    resetButtonVisibility();
}

function toggleAlarmMode() {
    currentButton.pop();
    currentButton.push("alarm");
    resetButtonVisibility();
}

function toggleStopwatchMode() {
    currentButton.pop();
    currentButton.push("stopwatch");
    resetButtonVisibility();
}



// Button Hover Animation
function buttonHoverAnimation(buttonParam) {
    if (buttonParam == currentButton[0] + "-btn") {
        document.getElementById(buttonParam).style.backgroundColor = "red";
    } else {
        document.getElementById(buttonParam).style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function buttonHoverUnanimated(buttonParam) {
    resetButtonVisibility();
}





// Timer Mode
function enterTimerMode() {

}

// Alarm Mode
// Stopwatch Mode



// Submit Form (Debug)
function submit() {
    document.getElementById("output1").innerHTML = document.getElementById("timeform").value;
    document.getElementById("output2").innerHTML = document.getElementById("dateform").value;
    document.getElementById("output3").innerHTML = document.getElementById("datetimeform").value;
    document.getElementById("output4").innerHTML = document.getElementById("datetimelocalform").value;
}





// Debugging

function debug() {
    debugText = "Debugging Done !";
    console.log("Debugging is done");
    console.log(currentButton);
}