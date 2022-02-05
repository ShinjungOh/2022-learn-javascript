const btn1 = document.getElementById("one")
const btn2 = document.getElementById("two")
const btn3 = document.getElementById("three")

/*
const handleClick = function () {
    console.log("저를 클릭하셨나요?");
}


//이벤트 핸들러 여러개 등록 가능
btn2.addEventListener("click", handleClick)
btn2.addEventListener("click", function(){
    console.log("또 다른 핸들러가 추가 등록되었다!")
})


//이벤트 핸들러를 제거할 수 있는 대응 메소드 존재 removeEventListener
btn2.removeEventListener("click", handleClick)

 */

const handleClick = function (event) {
    console.log(event.target)
}

btn1.addEventListener("click", handleClick)
btn2.addEventListener("click", handleClick)
btn3.addEventListener("click", handleClick)

