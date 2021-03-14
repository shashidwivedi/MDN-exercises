const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const clock = document.querySelector(".clock");

let createClock;
let startTime;
let milliseconds = 0;
let reset = true;
let stopTime;
let restartTime;

function displayTime() {
    milliseconds = Date.now() - startTime;
    let seconds = milliseconds / 1000;
    let hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    seconds = Math.floor(seconds);
    clock.textContent = `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;
}

function formatDigit(digit) {
    return Math.floor(digit / 10) ? digit : "0" + digit;
}

startBtn.addEventListener("click", function () {
    clearInterval(createClock);
    restartTime = Date.now();
    startBtn.disabled = true;
    if (reset === true) {
        startTime = Date.now();
    } else {
        startTime += (restartTime - stopTime);
    }
    displayTime();
    createClock = setInterval(displayTime, 1000);
});

stopBtn.addEventListener("click", function () {
    stopTime = Date.now();
    clearInterval(createClock);
    reset = false;
    startBtn.disabled = false;
});

resetBtn.addEventListener('click', function () {
    clearInterval(createClock);
    reset = true;
    milliseconds = 0;
    clock.textContent = "00:00:00";
    startBtn.disabled = false;
});
