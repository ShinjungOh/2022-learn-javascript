function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
    await sleep(1000);
    return '강아지';
}

const getCat = async () => {
    await sleep(500);
    return '고양이';
}

const getParrot = async () => {
    await sleep(3000);
    return '앵무새';
}

async function process() {
    try {
        const [dog, cat, parrot] = await Promise.all([getDog(), getCat(), getParrot()]);
        console.log(dog);
        console.log(cat);
        console.log(parrot);
    } catch (e) {
        console.log(e);
    }
    // 하나라도 error가 발생하면 잡아낸다.

    // const first = await Promise.race([getDog(), getCat(), getParrot()]);
    // console.log(first);
    // 가장 빨리 끝난 것이 error일 경우에만 error로 간주한다.
}

process();