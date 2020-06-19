// 树节点
function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}
// 树
function BST() {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.find = find
    this.getMin = getMin
    this.getMax = getMax
    this.remove = remove
}

function show() {
    return this.data
}

function getMin() {
    // 找到最后一个左子树
    let current = this.root
    while(current.left !== null) {
        current = current.left
    }
    return current
}
function getMax() {
    // 找到最后一个右子树
    let current = this.root
    while(current.right !== null) {
        current = current.right
    }
    return current
}

function find(data) {
    // 先判断根节点是否和它相同，再判断该值在根节点的左侧还是右侧
    let current = this.root
    while(current !== null) {
        if(current.data === data) {
            return current
        }
        if(current.data < data){
            current = current.right
            
        }else {
            current = current.left
        }
    }
    return null
   
}

function inOrder(node) {
    if(node !== null) {
        inOrder(node.left)
        console.log(node.data)
        inOrder(node.right)
    }
}

function preOrder(node) {
    if(node !== null) {
        console.log(node.data)
        preOrder(node.left)
        preOrder(node.right)
    }
}

function postOrder(node) {
    if(node !== null) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.data)
    }
}

// 给树添加节点
function insert(data) {
    let node  = new Node(data, null, null)
    // 若是空树，则直接添加到根节点
    if(this.root === null) {
        this.root = node
        return 
    }else {
        // 若不是空树，从根节点开始查找要添加到的位置，再去添加
        let current = this.root
        while(current.data !== null) {
            if(data < current.data) {
                if(current.left === null) {
                    current.left = node
                    break
                }
                current = current.left
            }
            else {
                if(current.right === null) {
                    current.right = node
                    break
                }
                current = current.right
            }
        }
    }
}

// let tree = new BST();
var nums = new BST(); 
nums.insert(8); 
nums.insert(2); 
nums.insert(3); 
nums.insert(9); 
// nums.insert(3); 
// nums.insert(99); 
// nums.insert(22); 
nums.remove(3)
// console.log(nums)
// print("Inorder traversal: "); 
postOrder(nums.root);
// console.log(nums.getMax())
// console.log()
function remove(data) {
    root = removeNode(this.root, data)
    console.log(root)
}

function removeNode(node, data){
    if(node.data === null) {
        return null
    }
    if(node.data === data) {
        if(node.left === null && node.right === null) {
            return null
        }
        if(node.right === null) {
            return node.left
        }
        if(node.left === null) {
            return node.right
        }
        let tempNode = getSmallest(node.right)
        node.data = tempNode.data
        node.right = removeNode(node.right,tempNode.data)
        return node
    }else if(data < node.data) {
        node.left = removeNode(node.left, data); 
        return node;
    }else { 
        node.right = removeNode(node.right, data); 
        return node; 
    }
}


function getSmallest(node) {
    if(node === null) {
        return null
    }
    while(node.left !== null) {
        node = node.left
    }
    return node
}