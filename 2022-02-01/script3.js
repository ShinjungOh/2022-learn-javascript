/*
function sayAnything(ant, num) {
    for (let i = 0; i < num; i++){
        console.log(ant)
    }
}

sayAnything("안녕하세요", 6);
sayAnything("Hello~", 2);
*/

function oddEven(number){
    if(number % 2 ==1){
        return "홀수"
    }else{
        return "짝수"
    }
}

console.log(oddEven(10))
console.log(oddEven(7))

