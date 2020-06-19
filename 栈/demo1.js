// import Stack from './stack'
// 进制转换
const Stack = require('./stack')
const stack  = new Stack()
let n = 125
let b = 8
stack.dataStore = []
do {
    stack.push(n % b)
    n = Math.floor(n / b)
} while(n > 0)
let converted = ''
for(let i = stack.length(); i > 0 ; i--) {
    converted += stack.pop()
}
console.log(converted)
