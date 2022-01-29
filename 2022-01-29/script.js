//2-10. if와 '?'를 사용한 조건 처리


//1번
if ("0") {
    alert('Hello');
}


//2번
let value = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?")

if (value == "ECMAScript") {
    alert("정답입니다!");
} else {
    alert("모르셨나요? 정답은 ECMAScript입니다!");
}


//3번
let value = prompt("아무 숫자를 입력하세요!");

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}


//4번
let result = (a + b < 4) ? "미만" : "이상";


//5번
let message = (login == "직원") ? "안녕하세요." :
    (login == "임원") ? "환영합니다." :
        (login == "") ? "로그인이 필요합니다." :
            "";
