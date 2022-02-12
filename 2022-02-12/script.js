const url = `https://cat.beansdrawer.com/api/breeds/image/random`

const request = new XMLHttpRequest()

request.addEventListener("load", function (){
    const obj = JSON.parse(request.responseText)
    const imageSrc = obj.message

    const div = document.querySelector("div")
    div.style.backgroundImage = `url(${imageSrc})`
})

request.addEventListener("error", function (){
    alert("뭔가 문제가 있다!")
})

const button = document.querySelector("button")
button.addEventListener("click", function (){
    request.open("GET", url)
    request.send()
})

