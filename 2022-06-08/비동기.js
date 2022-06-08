function taskA(a, b, cb) {
    setTimeout(() => {
        const result = a + b;
        cb(result);
    }, 3000);
}

function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000)
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}


// taskA(3, 4, (result) => {
//     console.log("A task result : ", result);
// });
//
// taskB(7, (res) => {
//     console.log("B task result : ", res);
// });
//
// taskC(14, (res) => {
//    console.log("C task result :", res);
// });


taskA(4, 5, (a_res) => {
    console.log("A result : ", a_res);
    taskB(a_res, (b_res) => {
        console.log("B result :", b_res);
        taskC(b_res, (c_res) => {
            console.log("C result : ", c_res);
        });
    });
});

console.log("코드 끝");