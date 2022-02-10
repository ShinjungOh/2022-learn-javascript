/*
const myName = "SJ"
console.log(myName)

localStorage.setItem("myName", myName)
 */

const myName = localStorage.getItem("myName")
//alert(myName)


localStorage.setItem("cat", "고양이")
localStorage.setItem("dog", "강아지")
localStorage.setItem("myName", "sj") //같은 key의 중복을 허용하지 않음

localStorage.removeItem("dog")

localStorage.clear()