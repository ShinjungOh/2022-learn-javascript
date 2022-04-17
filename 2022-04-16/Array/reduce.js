import items from "../resource/items.js";

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

// todo: 가격이 3만원 이상인 object의 가격 합

const result = items.reduce((acc, curr, idx) => {
    if (curr.가격 >= 30000) {
        return acc + curr.가격
    } else return acc
}, 0);
console.log(result)