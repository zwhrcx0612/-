// 自己尝试的   参考例子ABCDEF
function Graph() {
    this.vertices = []
    this.adjList = {}
    this.addVertex = addVertex
    this.addEdge = addEdge
    this.showGraph = showGraph
    this.dfs = dfs
    this.bfs = bfs
    this.BFS = BFS
}

function addVertex(v) {
    this.vertices.push(v)
    this.adjList[v] = []
}

function addEdge(v, w) {
    this.adjList[v].push(w)
    this.adjList[w].push(v)
}

function showGraph(){
    for(let i in this.adjList)   {

        console.log(`${i} --> ${this.adjList[i].join(' ')}`)
    }
}
/**
 * 深度优先遍历
 * 设置一个marked对象，各个顶点初始化为false，若已访问，则标记为true
 */
function dfs(v) {
    let marked = {}
    this.vertices.forEach(i => {
        marked[i] = false
    })
    
    dfsVisite(this,v,marked)
}

function dfsVisite(t,v,marked) {
    marked[v] = true
    let w  = t.adjList[v]
    console.log(v)
    for(let i = 0; i < w.length; i++){
        if(marked[w[i]] === false){
            dfsVisite(t,w[i],marked)
        }
    }
}

let Queue = require('../队列/demo01')
/**
 * 广度优先遍历
 */
function bfs(v) {
    let marked = {}
    this.vertices.forEach(i => {
        marked[i] = false
    })
    marked[v] = true
    let q = new Queue()
    console.log(v)
    q.enqueue(v)
    while(!q.isEmpty()) {
        let now = q.dequeue()
        for(let i = 0; i < this.adjList[now].length; i++ ) {
            let p = this.adjList[now][i]
            if(!marked[p]) {

                console.log(p)
                q.enqueue(p)
                marked[p] = true
            }
        }
    }
}
/**
 * 最短路径 实质上就是找回溯点
 * 距离d，第一个顶点到任意一个顶点的距离
 * {
    'A':0
    'B':1,
    'C':1,
    'D':1,
    'E':2,
    'F':2
   }
 * 回溯pred，上一个顶点的内容
   {
    'A':null,
    'B':'A',
    'C':'A',
    'D':'A',
    'E':'B',
    'F':'B'
   }
 */
function BFS(v,) {
    let marked = {}
    this.vertices.forEach(i => {
        marked[i] = false
    })
    let d = {}
    let pred = {}
    for(let i = 0; i < this.vertices.length; i++) {
        d[this.vertices[i]] = 0
        pred[this.vertices[i]] = null
    }
    marked[v] = true
    let q = new Queue()
    // console.log(v)
    q.enqueue(v)
    while(!q.isEmpty()) {
        let now = q.dequeue()
        for(let i = 0; i < this.adjList[now].length; i++ ) {
            let p = this.adjList[now][i]
            if(!marked[p]) {
                // 设置距离
                d[p] = d[now] + 1
                // 设置回溯点
                pred[p] = now
                // console.log(p)
                q.enqueue(p)
                marked[p] = true
            }
        }
    }
    return {
        d,
        pred
    }
}




let g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')
g.addEdge('A','B')
g.addEdge('A','C')
g.addEdge('A','D')
g.addEdge('C','D')
g.addEdge('B','E')
g.addEdge('B','F')
g.showGraph()
// A --> B C D
// B --> A E F
// C --> A D
// D --> A C
// E --> B
// F --> B
g.dfs('A')  
// ABEFCD
console.log('/')
g.bfs('A')
// ABCDEF
let s = g.BFS('A')
console.log(s)
function zuiduan(from, to) {
    
    while(to !== from) {
        console.log(to)
        to = s.pred[to]
    }
    console.log(to)
}
zuiduan('A','F')