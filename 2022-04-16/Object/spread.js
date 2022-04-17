import items from "../resource/items.js";

const obj = items[0];

// TODO: obj 값 중 이름, 가격 변경해서 출력

const result = {
    ...obj,
    이름: '허스키',
    가격: 3000
}
console.log(result);