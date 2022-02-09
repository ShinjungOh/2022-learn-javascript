//객체 리터럴
const cat = {
    name: "tom",
    color: "grey",
    color: "white",
    eat: function() {
        console.log("맛있다")
    }
}

cat.eat()

//console.log(cat.color)  //키는 중복 불가. 밸류는 중복 상관 x

console.log(cat.name)
cat["name"] = "키키"
console.log(cat.name)



//스프레드 연산자 (=전개 구문)
const animal = ["호랑이", "사자", "기린", "물개"]
console.log(...animal) //배열의 []안쪽의 내용을 그대로 복사

const animalPlus = [...animal, "코알라", "캥거루"]
console.log(animalPlus)
console.log(animalPlus.length)


function printNames(param1, param2, param3){
    console.log(param1, param2, param3)
}

printNames(...animal)



const person = {
    name: "sj",
    job: "학생",
    eat: function(){
        console.log("삼겹살")
    }
}

const student = {
    ...person,
    //job: "선생님",
    learn: function(){
        console.log("배우다")
    }
}

console.log(person)
console.log(student["job"])
student.learn()