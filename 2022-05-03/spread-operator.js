const a = {id:'1', count: 0};
const b = {id:'2', count: 0};
const c = b;

c.count = 1;
// console.log(b);
// console.log(c);


const arr = [
    {id: '1', count: 0},
    {id: '2', count: 0},
];

const arr2 = arr;
//console.log(arr2);
const arr3 = [...arr]; //새로운 배열
//console.log(arr3);

arr[0].count = 2;
// console.log(arr[0]);
// console.log(arr2[0]);
// console.log(arr3[0]);

arr.push({id: '3', count: 0});
console.log(arr.length);  //3
console.log(arr2.length);  //3
console.log(arr3.length);  //2 spread operator는 얕은 복사. 값이 아니라 참조값만 복사, 새로운 배열