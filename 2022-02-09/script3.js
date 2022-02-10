
const messi = {
    name: "리오넬 메시",
    "age": 34,
    team: "파리 생제르망",
    "nation": "아르헨티나",
    friends: ["아구에로", "네이마르", "수아레즈"],
    kick: function(){
        console.log("shoot!!")
    }
}

console.log(JSON.stringify(messi))


const messi2 = `
{"name":"리오넬 메시","age":34,"team":"파리 생제르망","nation":"아르헨티나","friends":["아구에로","네이마르","수아레즈"]}
`

console.log(JSON.parse(messi2))
