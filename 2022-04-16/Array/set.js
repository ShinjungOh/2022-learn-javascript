import items from "../resource/items.js";

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Set

// TODO: items 브랜드 배열 중복 제거

// const set = new Set();
// set.add(1)
// set.add(1)
// set.add(1)
// set.add(1)
// set.add(1)
// set.add(2)
// set.add(3)
// set.add(3)
// set.add(3)
// set.add(4)
//
// console.log(set)
// console.log(set.size)

//const set = new Set();
//console.log(items.size);

const result = items.map(el =>
    el.브랜드)

const result1 = [...new Set(result)]
console.log(result1)