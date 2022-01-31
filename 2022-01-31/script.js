let number = 1;

while (number <= 10) {
    console.log(number);
    number += 1;
}


while (confirm("메시지!")) {
    console.log("확인 버튼");
}

console.log("취소 버튼");


for (let i = 1; i <= 8; i += 1) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 8; i >= 1; i -= 2) {
    console.log(i)
}

//for문이 끝나면 초기식에서 선언한 변수는 사라짐
console.log(i);