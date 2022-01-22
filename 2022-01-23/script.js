/*
window.alert('Hello');
//window.alert('Hello');
window.alert('Hello');
*/

let str = "따옴표 문자열";
console.log(str);
str = `백틱 문자열?!`;
console.log(str);


// ${}는 플레이스홀더
//let number = 7;
//let player = prompt("좋아하는 축구선수는?")

console.log(
    `좋아하는 축구선수는 ${prompt("좋아하는 축구선수는?")}, 등번호는 ${prompt("좋아하는 선수의 등번호는?")} `
);