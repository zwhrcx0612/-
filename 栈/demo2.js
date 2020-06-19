// import Stack from './stack'
// 回文
// racecar
const Stack = require('./stack')
let s = new Stack()
let str = 'racecar'
for(let i = 0; i < str.length; i++) {
    s.push(str.charAt(i))
}
let reverseStr = ''
while(s.length() > 0) {
    reverseStr += s.pop()
}
console.log(reverseStr === str)