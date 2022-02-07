const button = document.getElementById("push")
const div = document.getElementById("area")

button.addEventListener("click", function () {
    console.log("div 생성 중")
    const newDiv = document.createElement("div")

    newDiv.style.backgroundColor = "red"
    newDiv.style.width = "200px"
    newDiv.style.height = "200px"

    console.log(div.appendChild(newDiv)) //반환되어 출력. append는 undefined로 뜸
})