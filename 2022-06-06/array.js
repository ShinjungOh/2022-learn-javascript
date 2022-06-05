// 배열 내장 함수

const arr = [1, 2, 3, 4];

// 1️⃣ forEach
const newArr = [];
arr.forEach(e => {
    newArr.push(e * 2)
})
console.log(newArr);


// 2️⃣ map
const mapArr = arr.map(e => {
    return e * 3
})
console.log(mapArr);


// 주어진 값이 존재하는지 찾아내기
// 1️⃣ forEach
let number = 3;
arr.forEach(e => {
    if (e === number) {
        console.log(true);
    }
});

// 3️⃣ includes(===)
console.log(arr.includes(number));

// 4️⃣ indexOf
number = '3';
console.log(arr.indexOf(number));


// 5️⃣ findIndex : 요소의 인덱스를 반환
const arr2 = [
    {color: "red"},
    {color: "black"},
    {color: "white"},
    {color: "green"},
];

const findIdx = arr2.findIndex(e =>
    e.color === "green");

console.log('findIndex:', findIdx);
console.log(arr2[findIdx]);


// 6️⃣ find : 요소 자체를 반환
const el = arr2.find(e =>
    e.color === "black");
console.log(el);


// 7️⃣ filter : 배열 필터링
const arr3 = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "white"},
    {num: 4, color: "green"},
    {num: 5, color: "black"},
];

console.log(arr3.filter(e =>
    e.color === "black"
));


// 8️⃣ slice : 배열 자르기
console.log(arr3.slice(0, 2));


// 9️⃣ concat : 배열 이어붙이기
const array1 = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "white"},
];

const array2 = [
    {num: 4, color: "green"},
    {num: 5, color: "black"},
];

console.log('concat:', array1.concat(array2));


// 🔟 sort : 배열 정렬 - 원본 배열을 정렬, 문자열을 기준으로 정렬
//let chars = ['나', '다', '가'];
let chars = ['a', 'c', 'b'];
let nums = [1, 3, 5, 2, 30, 20, 10];

chars.sort();
console.log(chars);

nums.sort();
console.log(nums); // 1, 10, 2, 20, 3, 30, 5

const compare = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    } else return 0;
}

nums.sort(compare);
console.log('compare:', nums); // 1, 2, 3, 5, 10, 20, 30


// 1️⃣1️⃣ join : 배열 내 모든 요소를 문자열 형태로 합치기
const arrText = ["안", "녕", "하", "세", "요"];
console.log(arrText.join("")); // ()안에 구분자