/*
console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))
*/

/*
console.log(document.getElementById("text"));
console.log(document.getElementById("p"));
*/

const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent);
h1.textContent = "Hello!!"

p.textContent = "겟엘리먼트바이아이디"
console.log(p.textContent);