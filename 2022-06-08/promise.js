// 콜백함수 이용
function isPositive(num, resolve, reject) {
    setTimeout(() => {
        if (typeof num === "number") {
            // resolve
            resolve(num >= 0 ? "양수" : "음수");
        } else {
            // reject
            reject("숫자형 값이 아닙니다.");
        }
    }, 2000);
}

// isPositive([], (res) => {
//     console.log("성공 :", res);
// }, (err) => {
//     console.log("실패 : ", err);
// });



// promise
function isPositiveP(num) {
    const executor = (resolve, reject) => {  // 실행자
        setTimeout(() => {
            if (typeof num === "number") {
                // resolve
                console.log(num);
                resolve(num >= 0 ? "양수" : "음수");
            } else {
                // reject
                reject("숫자형 값이 아닙니다.");
            }
        }, 2000);
    }
    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP(101);

res.then((res) => {
    console.log("성공 : ", res);
}).catch((err) => {
    console.log("실패 : ", err);
});



// 콜백 지옥 벗어나기
function taskA(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function taskB(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

const bPromiseRes = taskA(5, 1).then((a_res) => {
    console.log("A result : ", a_res);
    return taskB(a_res);
});

console.log('다른 작업 수행');
console.log('다른 작업 수행');
console.log('다른 작업 수행');
console.log('다른 작업 수행');

bPromiseRes.then((b_res) => {
    console.log("B result :", b_res);
    return taskC(b_res);
}).then((c_res) => {
    console.log("C result : ", c_res);
});

// taskA(4, 5, (a_res) => {
//     console.log("A result : ", a_res);
//     taskB(a_res, (b_res) => {
//         console.log("B result :", b_res);
//         taskC(b_res, (c_res) => {
//             console.log("C result : ", c_res);
//         });
//     });
// });