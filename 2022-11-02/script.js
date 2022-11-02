// 기존 코드 if
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
const paymentMap = {
    "KAKAO_PAYMENT": "카카오 결제 처리",
    "NAVER_PAYMENT": "네이버 결제 처리",
    "COUPANG_PAYMENT": "쿠팡 결제 처리",
    "PAYCO_PAYMENT": "페이코 결제 처리",
    "APPLE_PAYMENT": "애플 결제 처리"
}

// 비즈니스 로직
function executePayment(paymentType) {
    return paymentMap[paymentType];
}

console.log(executePayment("KAKAO_PAYMENT"));
