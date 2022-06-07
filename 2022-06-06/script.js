// 단락회로 평가
const getName = (person) => {
    // if (!person) {
    //     return "객체가 아닙니다";
    // } else return person.name;
    const name = person && person.name;
    return name || "객체가 아닙니다.";
};

let person;
person = {name: "SJ"};
const name = getName(person);
console.log(name);

