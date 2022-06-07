// 구조분해할당, 비 구조화 할당
// array
let [one, two, three, four = "four"] = [1, 2, 3];
console.log(one, two, three, four);


// swap
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);


// object
let obj = {
    one: "1",
    two: "2",
    three: "3"
};

let {one: oneee, two, three, four = "4"} = obj;
console.log(oneee, two, three, four);
