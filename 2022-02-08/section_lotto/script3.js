const pet = ["강아지", "고양이", "앵무새"]
console.log(pet)

/*
pet.push("거북이", "햄스터") //여러개의 인자 추가 가능
console.log(pet)

pet.pop() //마지막 요소를 제거
console.log(pet)

let result = pet.indexOf("앵무새") //주어진 인자가 배열에 포함되어 있는지 확인. 없으면 -1 반환
console.log(result)

pet.splice(0, 3, "호랑이") //해당 숫자부터 제거, 어디부터 몇개를 제거한다, 대체할 데이터
console.log(pet)
 */

pet.forEach(function(param) {  //* forEach : 인자로 콜백함수, 함수는 배열 요소 수만큼 호출된다
    console.log("!")
    console.log(param)
})