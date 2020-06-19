function Graph() {
    this.adjList = {}
    this.vertices = []
    this.addVertex = addVertex
    this.addEdge = addEdge
    this.showGraph = showGraph
}

function addVertex(label) {
    // this.label = label
    this.vertices.push(label)
    this.adjList[label] = []
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
// console.log(g.adjList)
g.showGraph()
