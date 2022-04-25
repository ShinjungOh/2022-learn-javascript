const items = [1, 2, 3, 4]
const abc = ['a', 'b', 'c', 'd']

//1️⃣
// items.reduce((acc, curr, index) => {
//     console.log(acc, curr, index);
//     console.log(acc + curr);
//     return acc + curr;
// }, 0)

//2️⃣
// items.reduce((acc, curr, index) => {
//     acc.push(curr * 2);
//     console.log(acc)
//     return acc;
// }, [])

//3️⃣
// abc.reduce((acc, curr, index) => {
//     console.log(acc)
//     acc[curr] = index;
//     return acc;
// }, {})
// => {a: 0, b: 1, c: 2, d: 3}

//4️⃣
// const result = items.map(el => el *2);
// console.log(result)

//5️⃣
const arr = [
    {a: 6, c: 10},
    {a: 5, b: 9},
    {c: 12, d: 10, e: 10}
]

arr.reduce((acc, curr, index) => {
    console.log(curr);
}, {});

const obj1 = {a: 6, c: 10};
console.log(Object.entries(obj1));

//1️⃣
for (const k in obj1) {
    console.log('1>>>', k, obj1[k]);
}

//2️⃣
Object.entries(obj1).forEach(el => {
    console.log('2>>>', el[0], el[1], el);
});

//3️⃣
Object.entries(obj1).forEach(el => {
    const [key, value] = el;
    console.log('3>>>', key, value);
});

