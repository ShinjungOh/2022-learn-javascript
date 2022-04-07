const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const replayBtn = document.querySelector('.replayBtn');
const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();

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
    console.log(`${currentSecond}초`);
    currentSecond -= 1;
    timer.innerHTML = currentSecond;
    if (currentSecond === 0) {
        isStop = true;
        clearInterval(time);
        console.log('0!');
        stopBtn.style.display = "none"
        playBtn.style.display = "block"
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


const carrotSize = 80;

function initGame() {
    //console.log(fieldRect);
    createGameItem('carrot', '5', 'img/carrot.png');
    createGameItem('bug', '5', 'img/bug.png');
}

function createGameItem(className, count, imgPath) {
    const x1 = 0;
    const y1 = 0;
    const x2 = fieldRect.width - carrotSize;
    const y2 = fieldRect.height - carrotSize;
    for (let i = 0; i < count; i++) {
        const item = document.createElement('img');
        item.setAttribute('class', className);
        item.setAttribute('src', imgPath);
        item.style.position = 'absolute';
        const x = randomNum(x1, x2);
        const y = randomNum(y1, y2);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
        field.appendChild(item);
    }
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

initGame();

