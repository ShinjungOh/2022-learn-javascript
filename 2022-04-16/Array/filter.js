import items from "../resource/items.js";

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter


// TODO: items 나쁜지성 3 이상인 배열

const result = items.filter(el => (
    el.나쁜지성 >= 3
));
console.log(result);

// TODO: items 나쁜지성 3 이상인 브랜드 배열   @ filter, map 응용 => ['비오템 (BIOTHERM)','러쉬 (LUSH)']

const result1 = items.filter(el => (
    el.나쁜지성 >= 3
)).map(el =>
    el.브랜드);
console.log(result1);

//TODO: items 가격 30000 이상인 배열   @ 브랜드, 이름, 가격만 => [{ '브랜드': '한율 (HANYUL)', '이름': '빨간쌀 진액 에멀젼', '가격': 40000 }, { '브랜드': '빌리프 (belif)', '이름': '프라블럼 솔루션 모이스춰라이저', '가격': 39000 }]

const result2 = items.filter(el => (
    el.가격 >= 30000
)).map(el => ({
    브랜드: el.브랜드,
    이름: el.이름,
    가격: el.가격
}));
console.log(result2);