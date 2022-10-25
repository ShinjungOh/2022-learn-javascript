function getData() {
    return new Promise(function (resolve, reject) {
        $.get('url 주소/product/1', function (response) {
            if (response) {
                resolve(response);
            }
            reject(new Error("오류가 발생했습니다."));
        });
    });
}


// 위 $.get() 호출 결과에 따라 'response' 또는 'Error' 출력
getData().then(function (data) {
    console.log(data);  // response 값 출력
}).catch(function (err) {
    console.log(err);  // Error 출력
})



// Promise Chaining
new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1);
    }, 3000);
}).then(function (result) {
    console.log(result);  // 1
    return result + 10;
}).then(function (result) {
    console.log(result);  // 11
    return result + 20;
}).then(function (result) {
    console.log(result);  // 31
})
