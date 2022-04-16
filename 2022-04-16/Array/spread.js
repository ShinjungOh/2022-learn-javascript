const a = [1,2,3]
const b = [4,5]
const c = [6,7,8]

const d = [a, b, c]
console.log([...a, ...b, ...c])
console.log(d.flat())
console.log(d);
