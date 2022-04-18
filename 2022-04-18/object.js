const price = {
    바나나: 1,
    오렌지: 2,
    키위: 3,
    파인애플: 4
};

// console.log(Object.keys(price));
// console.log(Object.values(price));
// console.log(Object.entries(price));

const doublePrice = Object.fromEntries(
    Object.entries(price).map(([key, value]) => [key, value * 2])
);
console.log(doublePrice);


const result = Object.entries(price).map(([key, value]) => [key, value * 2])
console.log(result)



// 프로퍼티 값 더하기
const salaries = {
    "John": 100,
    "Peter": 300,
    "Mary": 250
};

function sumSalaries() {
    let sum = 0;
    for (let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}

console.log(sumSalaries(salaries));



// 프로퍼티 개수 세기
const user = {
    name: 'John',
    age: 30
};

function count(obj) {
    return Object.keys(obj).length;
}

console.log(count(user));
