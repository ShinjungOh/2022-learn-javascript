// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/values

import items from "../resource/items.js";

const obj = items[0];

// TODO: Object.keys 를 이용하여 key 값 출력

const result = Object.keys(obj);
console.log(result);


// TODO: Object.keys 를 이용하여 value 값 출력

const result1 = Object.keys(obj).map(el => obj[el]);
console.log(result1);