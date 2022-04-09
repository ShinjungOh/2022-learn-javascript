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
const win = document.querySelector('.win');
const lose = document.querySelector('.lose');
const askReplay = document.querySelector('.askReplay');

const carrotSound = new Audio('./sound/carrot_pull.mp3')
const bugSound = new Audio('./sound/bug_pull.mp3')
const bgSound = new Audio('./sound/bg.mp3')
const winSound = new Audio('./sound/game_win.mp3')
const alertSound = new Audio('./sound/alert.wav')

let gameScore = 0;
let gameTimer = undefined;

stopBtn.style.display = "none"
playBtn.addEventListener('click', () => {
    startTimer();
    showTimerAndScore();
    stopBtn.style.display = "block"
    playBtn.style.display = "none"
    popup.style.visibility = "hidden";
    console.log('start!')
    initGame();
    playSound(bgSound);
});

stopBtn.addEventListener('click', () => {
    stop();
    stopSound(bgSound);
    playSound(alertSound);
    stopBtn.style.visibility = "hidden";
    playBtn.style.visibility = "visible";
    popup.style.visibility = "visible";
    console.log('stop!');
});

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

function stopSound(sound) {
    sound.pause();
}

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
    stopSound(bgSound);
};


const carrotSize = 80;
const carrotCount = 5;
const bugCount = 5;


function initGame() {
    //console.log(fieldRect);
    gameScore = 0;
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
        playSound(carrotSound);
        if(carrotCount - gameScore === 0) {
            //console.log('0이다');
            stop();
            playSound(winSound);
            stopBtn.style.visibility = "hidden";
            playBtn.style.visibility = "hidden";
            popup.style.visibility = "visible";
            win.style.display = 'block';
            lose.style.display = 'none';
            askReplay.style.display = "none";
            clearInterval(time);
        }
    } else if (target.matches('.bug')) {
        //console.log('bug');
        playSound(bugSound);
        stopBtn.style.visibility = "hidden";
        playBtn.style.visibility = "hidden";
        popup.style.visibility = "visible";
        win.style.display = 'none';
        lose.style.display = 'block';
        askReplay.style.display = "none";
        stop();
    }
}

function updateScore() {
    score.innerText = carrotCount - gameScore;
}

function askRetry() {
    stopBtn.addEventListener('click', () => {
        popup.style.visibility = "visible";
        popup.style.display = "block";
        askReplay.style.display = "block";
    })
}

replayBtn.addEventListener('click', () => {
    retry();
    askRetry();
    playSound(bgSound);
    playBtn.style.display = "none";
    stopBtn.style.display = "block";
});

function retry() {
    console.log('retry');
    //stop();
    startTimer();
    showTimerAndScore();
    initGame();
    popup.style.visibility = "hidden";
    stopBtn.style.visibility = "visible";
    playBtn.style.visibility = "hidden";
    win.style.display = 'none';
    lose.style.display = 'none';
}
