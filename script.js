var debugText = document.getElementById("title").innerHTML;

// === Variables for displaying time ===
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
// ===


// Detect language used
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
// ===


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

    if (getMonth < 10) {
        getMonth = "0" + getMonth;
    }
    if (getDate < 10) {
        getDate = "0" + getDate;
    }

    switch (getDay) {
        case 1:
            if (myLang == "id") {
                dayExplanation = "Senin";
            } else {
                dayExplanation = "Monday";
            }
            break;

        case 2:
            if (myLang == "id") {
                dayExplanation = "Selasa";
            } else {
                dayExplanation = "Tuesday";
            }
            break;

        case 3:
            if (myLang == "id") {
                dayExplanation = "Rabu";
            } else {
                dayExplanation = "Wednesday";
            }
            break;

        case 4:
            if (myLang == "id") {
                dayExplanation = "Kamis";
            } else {
                dayExplanation = "Thursday";
            }
            break;

        case 5:
            if (myLang == "id") {
                dayExplanation = "Jumat";
            } else {
                dayExplanation = "Friday";
            }
            break;

        case 6:
            if (myLang == "id") {
                dayExplanation = "Sabtu";
            } else {
                dayExplanation = "Saturday";
            }
            break;

        default:
            if (myLang == "id") {
                dayExplanation = "Minggu";
            } else {
                dayExplanation = "Sunday";
            }
            break;
    }

    if (myLang == "id") {
        getFullDate = dayExplanation + " / " + getMonth + "-" + getDate + "-" + getYear;
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
var currentState = "";

let getClockButton = document.getElementById("clock-btn").style;
let getTimerButton = document.getElementById("timer-btn").style;
let getAlarmButton = document.getElementById("alarm-btn").style;
let getStopwatchButton = document.getElementById("stopwatch-btn").style;

function resetButtonVisibility() {

    if (currentButton[0] == "timer" || currentButton[0] == "alarm") {
        switch (currentState) {
            case "start timer":
                hideInput();
                if (document.getElementById("dates").style.backgroundColor == "cornsilk") {
                    if (myLang == "id") {
                        document.getElementById("dates").innerHTML = "Pengatur waktu dimulai...";
                    } else {
                        document.getElementById("dates").innerHTML = "Timer is running...";
                    }
                }
                break;

            case "start alarm":
                hideInput();
                if (document.getElementById("dates").style.backgroundColor == "cornsilk") {
                    if (myLang == "id") {
                        document.getElementById("dates").innerHTML = "Alarm dimulai...";
                    } else {
                        document.getElementById("dates").innerHTML = "Alarm is running...";
                    }
                }
                break;

            default:
                displayInput();
                document.getElementById("hours").innerHTML = "";
                document.getElementById("minutes").innerHTML = "";
                document.getElementById("seconds").innerHTML = "";
                break;
        }
        myDate = clearInterval(myDate);

    } else {
        hideInput();
        resetDate();
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
    exitStopwatchMode();
    exitTimerMode();
}

function toggleTimerMode() {
    currentButton.pop();
    currentButton.push("timer");
    checkState();
    resetButtonVisibility();
    exitStopwatchMode();
    enterTimerMode();
}

function toggleAlarmMode() {
    currentButton.pop();
    currentButton.push("alarm");
    checkState();
    resetButtonVisibility();
    exitStopwatchMode();
    enterAlarmMode();
}

function toggleStopwatchMode() {
    exitTimerMode();
    
    if (currentButton[0] == "stopwatch") {

    } else {
        stopwatch = setInterval(runStopwatch, 1000);
        currentButton.pop();
        document.getElementById("hours").innerHTML = "";
        document.getElementById("minutes").innerHTML = "";
        document.getElementById("seconds").innerHTML = "";
    }
    currentButton.push("stopwatch");
    resetButtonVisibility();
}

// 



// Button Hover Animation
function buttonHoverAnimation(buttonParam) {
    if (buttonParam == currentButton[0] + "-btn") {
        if (currentButton[0] == "clock") {
            document.getElementById(buttonParam).style.backgroundColor = "orange";
        } else {
            switch (currentState) {
                case "set timer":
                    document.getElementById(buttonParam).style.backgroundColor = "lime";
                    break;

                case "set alarm":
                    document.getElementById(buttonParam).style.backgroundColor = "lime";
                    break;

                case "start stopwatch":
                    document.getElementById(buttonParam).style.backgroundColor = "lime";
                    break;

                default:
                    document.getElementById(buttonParam).style.backgroundColor = "orange";
                    break;
            }
        }
    } else {
        document.getElementById(buttonParam).style.backgroundColor = "rgb(255, 255, 255)";
    }
}

function buttonHoverUnanimated(buttonParam) {
    resetButtonVisibility();
}





// === Timer Mode ===
var getCountdownSecs;
var getCountdownMins;
var getCountdownHours;
var ringtone = document.getElementById("myRingtone");
var countdownEnd = 0;

function enterTimerMode() {

    if (currentState == "set timer") {
        if (myLang == "id") {
            document.getElementById("timer-button").innerHTML = "Mulai Waktu";
        } else {
            document.getElementById("timer-button").innerHTML = "Start Timer";
        }
    } else {
        if (myLang == "id") {
            document.getElementById("timer-button").innerHTML = "Jeda Waktu";
        } else {
            document.getElementById("timer-button").innerHTML = "Pause Timer";
        }
    }

}

function exitTimerMode() {

    currentState = "";
    if (myLang == "id") {
        document.getElementById("timer-button").innerHTML = "Pengatur Waktu";
        document.getElementById("alarm-button").innerHTML = "Alarm";
    } else {
        document.getElementById("timer-button").innerHTML = "Timer Mode";
        document.getElementById("alarm-button").innerHTML = "Alarm Mode";
    }

    document.getElementById("dates").style.backgroundColor = "cornsilk";

}

function startCountdown(timerHours, timerMins, timerSecs) {

    if (currentState == "start timer" || currentState == "start alarm") {

        setTimeout(function () {
            // Adds 0 if time are less than 10
            if (timerHours < 10) {
                document.getElementById("hours").innerHTML = "0" + timerHours;
            } else {
                document.getElementById("hours").innerHTML = timerHours;
            }

            if (timerMins < 10) {
                document.getElementById("minutes").innerHTML = "0" + timerMins;
            } else {
                document.getElementById("minutes").innerHTML = timerMins;
            }

            if (timerSecs < 10) {
                document.getElementById("seconds").innerHTML = "0" + timerSecs;
            } else {
                document.getElementById("seconds").innerHTML = timerSecs;
            }
            // 

            // Timer Cycle
            if (timerSecs >= 1) {
                timerSecs -= 1;
            } else if (timerMins >= 1) {
                timerMins -= 1;
                timerSecs = 59;
            } else if (timerHours >= 1) {
                timerHours -= 1;
                timerMins = 59;
                timerSecs = 59;
            } else {

                if (currentButton[0] == "timer" || currentButton[0] == "alarm") {
                    if (myLang == "id") {
                        document.getElementById("dates").innerHTML = "Pengatur waktu selesai !";
                    } else {
                        document.getElementById("dates").innerHTML = "Timer is over !";
                    }
                    document.getElementById("dates").style.backgroundColor = "red";
                }

            }
            //


            // Display blinking light
            if (timerSecs % 2 == 0) {
                document.getElementById("clock-colon1").style.opacity = "100%";
                document.getElementById("clock-colon2").style.opacity = "100%";
            } else {
                document.getElementById("clock-colon1").style.opacity = "0%";
                document.getElementById("clock-colon2").style.opacity = "0%";
            }
            // 

            startCountdown(timerHours, timerMins, timerSecs);
        }, 1000)
    }

}

function playRingtone() {
    ringtone.play();
}
function stopRingtone() { }

function pauseTimer() { }






// Alarm Mode
function enterAlarmMode() {

    if (currentState == "set alarm") {
        if (myLang == "id") {
            document.getElementById("alarm-button").innerHTML = "Mulai Alarm";
        } else {
            document.getElementById("alarm-button").innerHTML = "Start Alarm";
        }
    } else {
        if (myLang == "id") {
            document.getElementById("alarm-button").innerHTML = "Hentikan Alarm";
        } else {
            document.getElementById("alarm-button").innerHTML = "Stop Alarm";
        }
    }

}





// Stopwatch Mode
var stopwatch = setInterval(runStopwatch, 1000);
var stopwatchSecs = -1;
var stopwatchMins = 0;
var stopwatchHours = 0;

clearInterval(stopwatch);

function enterStopwatchMode() {

    if (myLang == "id") {
        document.getElementById("stopwatch-button").innerHTML = "Jeda";
    } else {
        document.getElementById("stopwatch-button").innerHTML = "Pause";
    }

}

function runStopwatch() {
    if (stopwatchSecs < 60) {
        stopwatchSecs += 1;
    } else {
        stopwatchSecs = 0;
        stopwatchMins += 1;
    }

    document.getElementById("hours").innerHTML = stopwatchHours;
    document.getElementById("minutes").innerHTML = stopwatchMins;
    document.getElementById("seconds").innerHTML = stopwatchSecs;
}

function pauseStopwatch() {}

function exitStopwatchMode() {

    stopwatchSecs = -1;
    stopwatchMins = 0;
    stopwatchHours = 0;
    clearInterval(stopwatch);

    if (myLang == "id") {
        document.getElementById("stopwatch-button").innerHTML = "Stopwatch";
    } else {
        document.getElementById("stopwatch-button").innerHTML = "Stopwatch";
    }

}


// Submit Form (Debug)
function submit() {
    document.getElementById("output1").innerHTML = document.getElementById("timeform").value;
    document.getElementById("output2").innerHTML = document.getElementById("dateform").value;
    document.getElementById("output3").innerHTML = document.getElementById("datetimeform").value;
    document.getElementById("output4").innerHTML = document.getElementById("datetimelocalform").value;
}



// Toggle Input
function displayInput() {
    document.getElementById("time-1").style.display = "inline";
    document.getElementById("time-2").style.display = "inline";
    document.getElementById("time-3").style.display = "inline";
}

function hideInput() {
    document.getElementById("time-1").style.display = "none";
    document.getElementById("time-2").style.display = "none";
    document.getElementById("time-3").style.display = "none";
}
// 





// Debugging

function debug() {
    debugText = "Debugging Done !";
    console.log("Debugging is done");
    console.log(currentButton);
}

// Checks if the button either alarm or timer
function checkState() {
    if (currentState == "set timer" || currentState == "set alarm") {
        if (document.getElementById("time-3").value == "") {

            if (myLang == "id") {
                document.getElementById("dates").innerHTML = "Detik tidak boleh kosong !";
            } else {
                document.getElementById("dates").innerHTML = "Seconds should not empty !";
            }
            document.getElementById("time-3").style.color = "red";
            document.getElementById("time-3").style.border = "2px solid red";

        } else if (document.getElementById("time-3").value > 60 || document.getElementById("time-3").value < 0) {

            if (myLang == "id") {
                document.getElementById("dates").innerHTML = "Detik harus diantara 0 dan 60 !";
            } else {
                document.getElementById("dates").innerHTML = "Seconds must between 0 to 60 !";
            }
            document.getElementById("time-3").style.color = "red";
            document.getElementById("time-3").style.border = "2px solid red";
            document.getElementById("time-2").style.color = "white";
            document.getElementById("time-2").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-1").style.color = "white";
            document.getElementById("time-1").style.border = "2px solid rgb(63, 63, 63)";

        } else if (document.getElementById("time-2").value > 60 || document.getElementById("time-2").value < 0) {

            if (myLang == "id") {
                document.getElementById("dates").innerHTML = "Menit harus diantara 0 dan 60 !";
            } else {
                document.getElementById("dates").innerHTML = "Minutes must between 0 to 60 !";
            }
            document.getElementById("time-3").style.color = "white";
            document.getElementById("time-3").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-2").style.color = "red";
            document.getElementById("time-2").style.border = "2px solid red";
            document.getElementById("time-1").style.color = "white";
            document.getElementById("time-1").style.border = "2px solid rgb(63, 63, 63)";

        } else if (document.getElementById("time-1").value > 24 || document.getElementById("time-1").value < 0) {

            if (myLang == "id") {
                document.getElementById("dates").innerHTML = "Jam harus diantara 0 dan 24 !";
            } else {
                document.getElementById("dates").innerHTML = "Hours must between 0 to 24 !";
            }
            document.getElementById("time-3").style.color = "white";
            document.getElementById("time-3").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-2").style.color = "white";
            document.getElementById("time-2").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-1").style.color = "red";
            document.getElementById("time-1").style.border = "2px solid red";

        }
        else {
            document.getElementById("time-3").style.color = "white";
            document.getElementById("time-3").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-2").style.color = "white";
            document.getElementById("time-2").style.border = "2px solid rgb(63, 63, 63)";
            document.getElementById("time-1").style.color = "white";
            document.getElementById("time-1").style.border = "2px solid rgb(63, 63, 63)";
            
            switch (currentButton[0]) {
                case "timer":
                    currentState = "start timer";
                    break;

                case "alarm":
                    currentState = "start alarm";
                    break;
            
                default:
                    break;
            }

            getCountdownHours = document.getElementById("time-1").value;
            getCountdownMins = document.getElementById("time-2").value;
            getCountdownSecs = document.getElementById("time-3").value;
            if (getCountdownHours == "") {
                getCountdownHours = 0;
            }
            if (getCountdownMins == "") {
                getCountdownMins = 0;
            }
            if (getCountdownHours == "") {
                getCountdownHours = 0;
            }
            startCountdown(getCountdownHours, getCountdownMins, getCountdownSecs);
        }
    } else if (currentState == "start timer") {

    } else {
        if (currentButton[0] == "timer") {
            currentState = "set timer";
        } else if (currentButton[0] == "alarm") {
            currentState = "set alarm";
        }

        if (myLang == "id") {
            document.getElementById("dates").innerHTML = "Masukkan waktu: ";
        } else {
            document.getElementById("dates").innerHTML = "Enter the time: ";
        }
    }

}