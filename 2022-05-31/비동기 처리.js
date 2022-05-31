function work(callback) {
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) {

        }
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}

console.log('작업 시작!');
work((ms) => {
    console.log('작업 끝!!');
    console.log(ms + 'ms 걸렸다.');
});
console.log('다음 작업');