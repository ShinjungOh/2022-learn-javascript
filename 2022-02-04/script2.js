function gugu() {
    for (let i = 2; i <= 9; i++) {
        console.log(`${i}단`)
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}


function guguDan(n) {
    for (let i = 1; i <= 9; i++) {
        console.log(`${n} * ${i} = ${i * n}`);
    }
}

function guguTest() {
    for (let i = 2; i <= 9; i++) {
        guguDan(i)
    }
}

