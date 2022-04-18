//1️⃣
const gugu = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//console.log(gugu)

function calcGugu(dan) {
    return gugu.map(el => {
        return el * dan
    });
}

console.log(calcGugu(9));


//2️⃣
function calcGugu2(dan) {
    return Array(9).fill(0).map((_, index) => index + 1).map(el => el * dan)
}

console.log(calcGugu2(5))



//3️⃣
function range(n, startIndex = 0) {
    return Array(n).fill('').map((_, index) => index + startIndex)
}

//console.log(range(5))

function calcGugu3(dan) {
    return range(9, 1).map(el => el * dan)
}

console.log(calcGugu3(7))