function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function helloAsync() {
    // return delay(3000).then(() => {
    //     return 'hello async';
    // });
    await delay(3000);
    return 'hello async';
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();