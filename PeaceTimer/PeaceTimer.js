
let twentySecondsBtnElement = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnElement = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnElement = document.getElementById("fortySecondsBtn");
let oneMinuteBtnElement = document.getElementById("oneMinuteBtn");
let timerTextElement = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

twentySecondsBtnElement.onclick = function () {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();

}
thirtySecondsBtnElement.onclick = function () {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
}
fortySecondsBtnElement.onclick = function () {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
}
oneMinuteBtnElement.onclick = function () {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
}

function setTimerAndShow() {
    timerTextElement.textContent = secondsLeft + "seconds left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextElement.textContent = secondsLeft + "seconds left";
    } else {
        clearPreviousTimers();
        timerTextElement.textContent = timerCompletedText;
    }
}
