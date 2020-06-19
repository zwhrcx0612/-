function Node(element) {
    this.element = element;
    this.next = null
}


function LinkedList() {
    this.head = new Node("head")
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display //显示链表中的元素
    this.findPrevious = findPrevious
}

// 循环链表
function LinkedList() {
    this.head = new Node("head")
    this.head.next = this.head
}


function find(element) { 
    let currNode = this.head
    while(currNode.element !== element) {
        currNode = currNode.next
    }
    return currNode
}

function insert(insertItem,element ) {
    let newNode = new Node(insertItem)
    let currNode = this.find(element)
    newNode.next = currNode.next
    currNode.next = newNode
}

function display() {
    let currNode = this.head
    while(currNode.next !== null) {
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}

function findPrevious(element) {
    let currNode = this.head
    while(currNode.next.element !== element) {
        currNode = currNode.next
    }
    return currNode
}

function remove(element) {
    // let currNode = this.find(element)
    let previousNode = this.findPrevious(element)
    if(previousNode.next !== null){
        previousNode.next = previousNode.next.next
    }
}

var cities = new LinkedList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Alma", "Russellville"); 
cities.remove("Conway")
cities.display()