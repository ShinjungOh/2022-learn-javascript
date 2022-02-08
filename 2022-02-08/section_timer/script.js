const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");


function getTime(){
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() +1
    let date = now.getDate()
    let hour = now.getHours()
    let minute = calcNumber(now.getMinutes())
    let second = calcNumber(now.getSeconds())

    todayDiv.textContent = `${year}년 ${month}월 ${date}일`
    timeDiv.textContent = `${hour}:${minute}:${second}`
}

function calcNumber (n) {
    return n < 10 ?`0${n}` : n;
}

getTime()
setInterval(getTime, 1000)
