const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const count = document.querySelector('.count');
const timer = document.querySelector('.timer');
const replay = document.querySelector('.replay')

stopBtn.style.display = "none"
playBtn.addEventListener('click', () => {
    startTimer();
    stopBtn.style.display = "block"
});

stopBtn.addEventListener('click', () =>{
    stop();
    stopBtn.style.display = "none"
});

let currentSecond = 10;
let isStop = true;
let time;

const countDown = () => {
    console.log(currentSecond);
    currentSecond -= 1;
    count.innerHTML = currentSecond;
    if (currentSecond === 0) {
        isStop = true;
        clearInterval(time);
    }
};

const startTimer = () => {
    if (isStop) {
        isStop = false;
        count.innerHTML = currentSecond;
        time = setInterval(countDown, 1000);
    }
};

const stop = () => {
    clearInterval(time);
    isStop = true;
};

