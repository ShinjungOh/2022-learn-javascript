// 1️⃣ for문으로 2단부터 9단까지 구구단 출력
function calcGugu() {
    for (let i = 2; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}


// 2️⃣ 단 입력시 출력해주는 함수 만들기
function guguDan(n) {
    for (let i = 1; i < 10; i++) {
        console.log(`${n} * ${i} = ${i * n}`)
    }
}

console.log(guguDan(5));


// 3️⃣ 구구단 결과값 배열로 리턴
let arr = [];
for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        arr.push(i * j);
    }
}

console.log(arr);


// 4️⃣ 단 결과값 배열로 리턴

function gugugu(n) {
    let arr2 = [];
    for (let i = 1; i < 10; i++) {
        arr2.push(i * n);
    }
    return arr2
}

console.log(gugugu(7));

