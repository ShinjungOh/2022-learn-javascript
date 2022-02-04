//2번

/*
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm("보호자의 동의를 받으셨나요?");
    }
}
*/

function checkAge(age) {
    return (age > 18) || confirm("보호자의 동의를 받으셨나요?");
}


function checkAge(age) {
    return (age > 18) ? true : confirm("보호자의 동의를 받으셨나요?");
}


//3번
function getMin(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}


getMin(2, 5);
getMin(3, -1);
getMin(1, 1);


//
function calcDan(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(i + " * " + n + " = " + i * n)
    }
}

function testGugu() {
    for (let i = 2; i <= 9; i++) {
        calcDan(i)
    }
}

function printGugu() {
    for (let i = 2; i <= 9; i++) {
        console.log(`${i} 단`)
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${j * i}`);
        }
    }
}


