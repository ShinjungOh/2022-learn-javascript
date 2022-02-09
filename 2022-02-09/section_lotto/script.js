const numbersDiv = document.querySelector(".numbers")
const drawBtn = document.querySelector("#draw")
const resetBtn = document.querySelector("#reset")
const lottoNumbers = []
const colors = ["orange", "skyblue", "red", "purple", "green"]


function paintNumber(number){
    const eachNumDiv = document.createElement("div")
    eachNumDiv.classList.add("eachnum")
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.style.backgroundColor = colors[colorIndex]
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv)
}


drawBtn.addEventListener("click", function () {
    while (lottoNumbers.length < 6) {
        let ran = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(ran) === -1){
            lottoNumbers.push(ran)
            paintNumber(ran)
        }
    }
})


resetBtn.addEventListener("click", function(){
    lottoNumbers.splice(0, 6)
    numbersDiv.innerHTML = ""
})

