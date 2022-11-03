// 1️⃣ 기존 코드 if
// function executePayment(paymentType) {
//     if (paymentType === "KAKAO_PAYMENT") {
//         return "카카오 결제 처리"
//     } else if (paymentType === "NAVER_PAYMENT") {
//         return "네이버 결제 처리"
//     } else if (paymentType === "COUPANG_PAYMENT") {
//         return "쿠팡 결제 처리"
//     } else if (paymentType === "PAYCO_PAYMENT") {
//         return "페이코 결제 처리"
//     } else if (paymentType === "APPLE_PAYMENT") {
//         return "애플 결제 처리"
//     }
// }

// key-value 테이블
// 새로운 값을 추가헤도 비즈니스 로직은 변함 없다
// const paymentMap = {
//     "KAKAO_PAYMENT": "카카오 결제 처리",
//     "NAVER_PAYMENT": "네이버 결제 처리",
//     "COUPANG_PAYMENT": "쿠팡 결제 처리",
//     "PAYCO_PAYMENT": "페이코 결제 처리",
//     "APPLE_PAYMENT": "애플 결제 처리"
// }

// 비즈니스 로직
// function executePayment(paymentType) {
//     return paymentMap[paymentType];
// }

// console.log(executePayment("KAKAO_PAYMENT"));



// 함수
function payOnKakao() {
    console.log("kakao pay 처리중");
};
function payOnNaver() {
    console.log("naver pay 처리중");
};
function payOnCoupang() {};
function payOnPayco() {};
function payOnApple() {};
function sendLog() {};

// 2️⃣ 기존 코드
// function executePayment(paymentType) {
//     if (paymentType === "KAKAO_PAYMENT") {
//         payOnKakao();
//     } else if (paymentType === "NAVER_PAYMENT") {
//         sendLog();
//         payOnNaver();
//     } else if (paymentType === "COUPANG_PAYMENT") {
//         sendLog();
//         payOnCoupang();
//     } else if (paymentType === "PAYCO_PAYMENT") {
//         sendLog();
//         payOnPayco();
//     }
// }

// 매핑 관계
const paymentMap = {
    KAKAO_PAYMENT() {
        payOnKakao();
    },
    NAVER_PAYMENT() {
        sendLog();
        payOnNaver();
    },
    COUPANG_PAYMENT() {
        sendLog();
        payOnCoupang();
    },
    PAYCO_PAYMENT() {
        sendLog();
        payOnPayco();
    },
    APPLE_PAYMENT() {
        payOnApple();
    }
}

// 비즈니스 로직
function executePayment(paymentType) {
    paymentMap[paymentType]();
}

executePayment("NAVER_PAYMENT");
