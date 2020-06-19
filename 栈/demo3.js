// import Stack from './stack'
// 栈模拟递归

const Stack = require('./stack')
let s = new Stack()
let n = 5
while(n > 0) {
    s.push(n--)
}
let res = 1
while(s.length() > 0) {
    res *= s.pop()
}
console.log(res)