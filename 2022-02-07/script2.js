/*
const textInput = document.getElementById("text")
const button = document.getElementById("button")


button.addEventListener("click", function(){
    textInput.value = "클릭 시 변화"
})
*/

const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
    e.preventDefault() //기존 기능을 차단한다. 리다이렉션
    console.log(form.name.value)
    console.log(form.town.value)
})

