const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const clock = document.querySelector(".clock");

let createClock;
let startTime;

function displayTime() {
    let time = Date.now() - startTime;
    let seconds = time / 1000;
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
    startBtn.disabled = true;
    startTime = Date.now();
    displayTime();
    createClock = setInterval(displayTime, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(createClock);
    startBtn.disabled = false;
});

resetBtn.addEventListener('click', function () {
    clearInterval(createClock);
    clock.textContent = 0;
    startBtn.disabled = false;
});
