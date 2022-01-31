

let username = prompt("이름을 입력해 주세요.");
let password

console.log(username);

if (username === "Admin") {
    password = prompt("비밀번호를 입력하세요.");
    if (password === "TheMaster") {
        alert("환영합니다.");
    } else if (password === "" || password === null) {
        alert("취소되었습니다.");
    } else {
        alert("인증에 실패하였습니다.");
    }
} else if (username === "" || username === null) {
    alert("인증에 실패했습니다.");
} else {
    alert("취소되었습니다.");
}

console.log(password);
