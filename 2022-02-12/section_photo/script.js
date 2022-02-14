// 요소 선택
const callBtn = document.getElementById("call-btn")
const photoDiv = document.getElementById("photo")
const beginning = document.getElementById("beginning")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

// 사용 데이터 선언
const photos = [];
const numOfPhoto = 7;
let photoIndex = 0
const request = new XMLHttpRequest()
const url = `https://cat.beansdrawer.com/api/breeds/image/random/${numOfPhoto}`
let ispushed = false

// 응답이 로드되었을 때의 이벤트 핸들링
request.addEventListener("load", function () {
    const responseJson = JSON.parse(request.responseText)
    responseJson.message.forEach(function (element) {
        photos.push(element)
        console.log(">>> element", element)
        // console.log("photo", photos)
    })

    console.log(photos)
    console.log(photos[photoIndex])
    
    photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`
})

// callPhotos 함수 - 요청 초기화
function callPhotos() {
    request.open("GET", url)
    request.send()
}

// CALL 버튼 클릭 이벤트 핸들링
callBtn.addEventListener("click", function () {
    if (ispushed) {
        return
    }
    ispushed = true;

    callPhotos()
    setTimeout(function () {
        beginning.classList.remove("beginning")
    }, 1500)
})

// prev와 next 버튼 클릭 이벤트 핸들링
prevBtn.addEventListener("click", function () {
    if (photoIndex == 0) {
        photoIndex = numOfPhoto - 1
        photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`
        return
    }
//photoIndex = photoIndex === 0 ? numOfPhoto - 1 : photoIndex - 1
    photoIndex -= 1
    photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`
})


nextBtn.addEventListener("click", function () {
    photoIndex = photoIndex === numOfPhoto - 1 ? 0 : photoIndex + 1 //numOfPhoto - 1인 이유는 인덱스 번호가 0부터 시작하기 때문
    photoDiv.style.backgroundImage = `url(${photos[photoIndex]})`
})
