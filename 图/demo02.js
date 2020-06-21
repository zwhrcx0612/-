function Queue() {
    var items = []
    //入队
    this.enqueue = function(element) {
        items.push(element)
    }
    //出队
    this.dequeue = function() {
        return items.shift()
    }
    //查看队列头
    this.front = function() {
        return items[0]
    }
    //检查队列是否为空
    this.isEmpty  = function() {
        return items.length === 0
    }
    // 队列大小
    this.size = function() {
        return items.length
    }
}

function Graph() {
    this.adjList = {}
    this.vertices = []
    this.addVertex = addVertex
    this.addEdge = addEdge
    this.bfs = bfs
    this.BFS = BFS
    this.dfs = dfs
    this.showGraph = showGraph
}

function addVertex(label) {
    // this.label = label
    this.vertices.push(label)
    this.adjList[label] = []
}
function initColor(vertices) {
    let color = {}
    for(let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = 'white'
    }
    return color

}
// 广度优先遍历
function bfs(v, callback) {
    let color = initColor(this.vertices)
    let queue = new Queue()
    queue.enqueue(v)
    while(!queue.isEmpty()) {
        let now = queue.dequeue()
        let bian = this.adjList[now]
        for(let i = 0; i < bian.length; i++) {
            if(color[bian[i]] === 'white') {
                color[bian[i]] = 'grey' 
                queue.enqueue(bian[i])
            }
        }
        color[now] = 'black'
        if(callback) {
            callback(now)
        }
    }

}

// 广度优先算法
// d 距离
// pred 回溯点
function BFS(v, callback) {
    let color = initColor(this.vertices)
    let queue = new Queue()
    queue.enqueue(v)

    let d = {}
    let pred = {}

    for(let i = 0; i < this.vertices.length; i++) {
        d[this.vertices[i]] = 0
        pred[this.vertices[i]] = null
    }
    while(!queue.isEmpty()) {
        let now = queue.dequeue()
        let bian = this.adjList[now]
        for(let i = 0; i < bian.length; i++) {
            if(color[bian[i]] === 'white') {
                color[bian[i]] = 'grey' 
                queue.enqueue(bian[i])
                // 设置回溯点
                pred[bian[i]] = now
                // 设置距离
                d[bian[i]] = d[now] + 1
            }
        }
        color[now] = 'black'
        if(callback) {
            callback(now)
        }
    }

    return {
        pred,
        d
    }

}
function dfsVisit(v,color,adjList,callback) {
    color[v] = 'grey'
    for(let i = 0; i < adjList[v].length; i++) {
        let w = adjList[v][i]
        if(color[w] === 'white') {
            // color[w] = 'grey'
            dfsVisit(w,color,adjList,callback)
        }
    }
    color[v] = 'black'
    if(callback){
        callback(v)
    }
}
// 深度优先算法
function dfs(v, callback) {
    let color  = initColor(this.vertices)
    dfsVisit(v,color,this.adjList,callback)
}
function addEdge(a,b) {
    this.adjList[a].push(b)
    this.adjList[b].push(a)
}

function showGraph() {
    for(let i in this.adjList) {
        console.log(`${i} => ${this.adjList[i].join('')}`)
    }
}

let g = new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('e')
g.addVertex('f')
g.addEdge('a','b')
g.addEdge('a','c')
g.addEdge('a','d')
g.addEdge('c','d')
g.addEdge('b','e')
g.addEdge('f','b')
// g.addEdge('d','f')
// console.log(g.adjList)
g.showGraph()
g.bfs('a',function(e) {
    console.log(e)
})
g.BFS('a')
let s = g.BFS('a')
// 最短路径，基于广度优先算法
function zuiduan(from, to) {
    let v = to
    while(v !== from) {
        console.log('-',v)
        v = s.pred[v]
    }
    console.log(v)
}

zuiduan('a','f')
g.dfs('a',function(e) {
    console.log(e)
})
