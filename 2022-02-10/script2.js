const twice = ["나연", "사나", "지효", "다연"]


//forEach : 배열의 각각의 요소에 대해 콜백을 호출
twice.forEach(function (member, index) {
    const p = document.createElement("p")
    p.textContent = `${index + 1}번째 멤버 ${member}`
    document.body.appendChild(p)
})


//map : 콜백 함수의 호출 결과를 모아 새로운 배열 반환
const result = twice.map(function(member, index){
    return `예쁜 ${member}`
})

console.log(result)


//filter : 조건식이 true를 반환하는 모든 요소를 모아 새로운 배열 반환
const result = twice.filter(function(member, index){
    return member === "사나"
})

console.log(result)