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

function resetDate() {
    clock = new Date();
    getYear = clock.getFullYear();
    getMonth = clock.getMonth();
    getDate = clock.getDate();
    getDay = clock.getDay();

    switch (getDay) {
        case 1:
            dayExplanation = "Monday";
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
            dayExplanation = "Friday";
            break;

        case 6:
            dayExplanation = "Saturday";
            break;
    
        default:
            dayExplanation = "Sunday";
            break;
    }

    getFullDate = dayExplanation + "," + getDate + "/" + getMonth + "/" + getYear;
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
// Alarm Mode
// Stopwatch Mode






// Debugging

function debug() {
    debugText = "Debugging Done !";
    console.log("Debugging is done");
    console.log(currentButton);
}