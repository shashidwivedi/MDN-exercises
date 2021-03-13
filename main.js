const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

const clock = document.querySelector(".clock");

function displayTime() {
    let date = new Date();
    let time = date.getSeconds();
    clock.textContent = time;
}

let createClock;
startBtn.addEventListener("click", function () {
    displayTime();
    createClock = setInterval(displayTime, 1000);
});

stopBtn.addEventListener("click", function () {
    clearInterval(createClock);
});

resetBtn.addEventListener('click', function () {
    clearInterval();
    clock.textContent = 0;
});
