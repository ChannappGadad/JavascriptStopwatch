const timeDispaly = document.querySelector("#timeDisplay")
const startBtn = document.querySelector("#start")
const stopBtn = document.querySelector("#stop")
const resetBtn = document.querySelector("#reset")

let startTime = 0;
let elpasedTime = 0;
let currentTime = 0;
let hrs = 0;
let mins = 0;
let secs = 0;
let paused = true;
let intervalId;

startBtn.addEventListener("click", () => {
    if(paused) {
        paused = false
        startTime = Date.now() - elpasedTime;
        intervalId = setInterval(updateTime, 75);
    }
})

stopBtn.addEventListener("click", () => {
    if(!paused) {
        paused = true
        elpasedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
})

resetBtn.addEventListener("click", () => {
    paused = true;
    startTime = 0;
    elpasedTime = 0;
    currentTime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    clearInterval(intervalId);
    timeDispaly.textContent = "00:00:00";

})

function updateTime() {
    elpasedTime = Date.now() - startTime;

    secs = Math.floor((elpasedTime/1000) % 60)
    mins = Math.floor((elpasedTime/(1000 * 60)) % 60)
    hrs = Math.floor((elpasedTime/(1000 *60 * 60)) % 60)  

    secs = addingZeros(secs)
    mins = addingZeros(mins)
    hrs = addingZeros(hrs)

    timeDispaly.textContent = `${hrs}:${mins}:${secs}`

    function addingZeros(value) {
        return (("0") + value).length > 2 ? value : "0" + value;
    }
}