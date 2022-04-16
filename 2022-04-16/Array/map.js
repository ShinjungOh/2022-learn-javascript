import items from "../resource/items.js";

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// TODO: items 브랜드 배열 => ['라코스테', '프레드페리', '쿠팡']

const result = items.map(el =>
    el.브랜드
);
//console.log(result)

// TODO: items 브랜드, 판매링크 배열 => [{ 브랜드: 'ABC', 판매링크: 'https://nver.com' }]

const result1 = items.map(el => {
    return {
        브랜드: el.브랜드,
        판매링크: el.판매링크
    }
});
//console.log(result1);

// TODO: items 브랜드, 판매링크 배열 => [{ brand: 'ABC', link: 'https://nver.com' }]

const result2 = items.map(el => ({
    brand: el.브랜드,
    link: el.판매링크
}));
console.log(result2);