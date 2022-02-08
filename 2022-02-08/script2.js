const h1 = document.querySelector("h1")

const now = new Date();
console.log(now)

//const then = new Date(2020, 5, 19); 월은 0부터 시작
//console.log(then)

const hour = now.getHours()
const minu = now.getMinutes()
const seco = now.getSeconds()

const nowTime = `${hour}:${minu}:${seco}`

h1.textContent = nowTime


console.log(now.toLocaleTimeString("en")) //지역별 날짜 및 시간