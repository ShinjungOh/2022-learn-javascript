function threrIsReturn() {
    console.log("반환한다.");
    return 10, 20, 30, 40;
    return 20;
    //데이터는 하나만 반환 가능
    //return은 함수를 종료시킨다
}

const result = threrIsReturn();
console.log(result);


/*
function threrIsReturn() {
    console.log("반환한다.");
    let num = 5;
    return num;
}

const result = threrIsReturn();
console.log(result);
*/
