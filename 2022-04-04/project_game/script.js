const playBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
const replayBtn = document.querySelector('.replayBtn');
const field = document.querySelector('.game_field');
const fieldRect = field.getBoundingClientRect();
const popup = document.querySelector('.pop-up');
const carrot = document.querySelector('.carrot');
const bug = document.querySelector('.bug');

let gameScore = 0;
let gameTimer = undefined;

stopBtn.style.display = "none"
playBtn.addEventListener('click', () => {
    startTimer();
    showTimerAndScore();
    stopBtn.style.display = "block"
    playBtn.style.display = "none"
    console.log('start!')
    initGame();
});

stopBtn.addEventListener('click', () => {
    stop();
    stopBtn.style.display = "none";
    playBtn.style.display = "block";
    console.log('stop!');
});

askRetry();

function showTimerAndScore() {
    timer.style.visibility = 'visible';
    score.style.visibility = 'visible';
}

let currentSecond = 10;
let isStop = true;
let time;

const countDown = () => {
    console.log(`${currentSecond}초`);
    currentSecond -= 1;
    timer.innerHTML = `0:${currentSecond}`;
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
        timer.innerHTML = `0:${currentSecond}`;
        time = setInterval(countDown, 1000);
    }
};

const stop = () => {
    clearInterval(time);
    isStop = true;
};


const carrotSize = 80;
const carrotCount = 5;
const bugCount = 5;


function initGame() {
    //console.log(fieldRect);
    field.innerHTML = '';
    score.innerText = carrotCount;
    createGameItem('carrot', carrotCount, 'img/carrot.png');
    createGameItem('bug', bugCount, 'img/bug.png');
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

function askRetry() {
    stopBtn.addEventListener('click', () => {
        popup.style.visibility = "block";
    })
}

field.addEventListener('click', onFieldClick);

function onFieldClick(event) {
    if (isStop) {
        return;
    }
    const target = event.target;
    if (target.matches('.carrot')) {
        //console.log('carrot');
        target.remove();
        gameScore++;
        updateScore();
    } else if (target.matches('.bug')) {
        //console.log('bug');
        stop();
    }
}

function updateScore() {
    score.innerText = carrotCount - gameScore;
}

function showPopup() {

}


replayBtn.addEventListener('click', () => {
    retry();
});

function retry() {
    console.log('retry');
    startTimer();
    showTimerAndScore();
    initGame();
}
