function SuperType() {
    this.color = ['red']
}

function SubType() {
    SuperType.call(this)  //
}

SubType.prototype = new SuperType()

let s1 = new SubType()
s1.color.push('black')
let s2 = new SubType()
console.log(s1.color)
console.log(s2.color)