import items from "../resource/items.js";

const obj = items[0];
// console.log(obj);

// TODO: for in 을 이용하여 obj 순회

for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}
