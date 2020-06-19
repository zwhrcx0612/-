function Stack(){
    this.dataStore = []
    this.top = 0
    this.pop = pop
    this.peek = peek
    this.push = push
    this.length = length
    this.clear = clear
}

function push(ele){
    this.dataStore[this.top++] = ele
}
function pop(){
    return this.dataStore[--this.top]
}
function peek(){
    return this.dataStore[this.top - 1]
}
function length(){
    return this.top
}
function clear(){
    this.top = 0
}

module.exports =  Stack
