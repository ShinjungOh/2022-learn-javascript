sayHello();
//함수 선언식은 함수 정의보다 호출문을 앞서 작성할 수 있다.

function sayHello(){
    let hello = "문자열 헬로우"
    console.log(hello);
}

//함수 내부에서 선언된 변수는 함수 밖에서 쓸 수 없다.
//sayHello();
//console.log(hello);


const sayBye = function () {
    console.log("Say Bye~");
}

sayBye()