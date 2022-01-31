//1번
//alert(null || 2 || undefined);


//2번
//alert(alert(1) || 2 || alert(3));


//3번
//alert(1 && null && 2);


//4번
//alert(alert(1) && alert(2));


//5번
//alert(null || 2 && 3 || 4);


//6번
//if (age >= 14 && age <= 90)


//7번
//if (!(age >= 14 && age <= 90))
//if (age < 14 || age > 90)


//8번
/*
if (-1 || 0) alert("first");
if (-1 && 0) alert("second");
if (null || -1 && 1) alert("third");
 */


//9번
let login = prompt("누구신가요?");
let password

console.log(login)
console.log(password)

if (login === "Admin") {
    password = prompt("비밀번호를 입력하세요.");
    if (password === "TheMaster") {
        alert("환영합니다!");
    } else {
        alert("인증에 실패하였습니다.")
    }
} else if (login === '' || login === null) {
    alert("취소되었습니다.");
} else {
    alert("인증에 실패하였습니다.");
}
