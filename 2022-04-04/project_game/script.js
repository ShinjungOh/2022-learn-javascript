const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const replayBtn = document.querySelector('.replayBtn')

stopBtn.style.display = "none"
playBtn.addEventListener('click', () => {
    startTimer();
    stopBtn.style.display = "block"
    playBtn.style.display = "none"
    console.log('start!')
});

stopBtn.addEventListener('click', () => {
    stop();
    stopBtn.style.display = "none"
    playBtn.style.display = "block"
    console.log('stop!')
});

let currentSecond = 10;
let isStop = true;
let time;

const countDown = () => {
    console.log(currentSecond);
    currentSecond -= 1;
    timer.innerHTML = currentSecond;
    if (currentSecond === 0) {
        isStop = true;
        clearInterval(time);
    }
};

const startTimer = () => {
    if (isStop) {
        isStop = false;
        timer.innerHTML = currentSecond;
        time = setInterval(countDown, 1000);
    }
};

const stop = () => {
    clearInterval(time);
    isStop = true;
};

