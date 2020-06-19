function graph(v) {
    this.vertices = v
    this.adj = []
    for(let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        // this.adj[i].push('')
    }
    this.addEdge = addEdge
    this.showGraph = showGraph
}

function showGraph() {
    this.adj.forEach((i,n) => {
        console.log(`${n} --> ${i}`)
    })
}

function addEdge(a,b) {
    this.adj[a].push(b)
    this.adj[b].push(a)
}

let g = new graph(5)
g.addEdge(0,1); 
g.addEdge(0,2); 
g.addEdge(1,3); 
g.addEdge(2,4); 
g.showGraph();
// console.log(g.showGraph())