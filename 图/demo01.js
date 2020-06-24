// 数据结构与算法JS描述书上的
function Graph(v) {
    this.vertices = v
    this.edges = 0
    this.adj = []
    for(let i = 0; i < this.vertices; i++) {
        this.adj[i] = []
        this.adj[i].push('')
    }
    this.marked = []
    for (var i = 0; i < this.vertices; ++i) { 
        this.marked[i] = false; 
    }
    this.dfs = dfs
    // this.bfs = bfs
    this.addEdge = addEdge
    this.showGraph = showGraph
}

function showGraph() {
    this.adj.forEach((i,n) => {
        console.log(`${n} --> ${i.join(' ')}`)
    })
}



function addEdge(a,b) {
    this.adj[a].push(b)
    this.adj[b].push(a)
    this.edges++
}

function dfs(v) {
    this.marked[v] = true; 
    if (this.adj[v] != undefined) { 
        console.log("Visited vertex: " + v); 
        
    }
    for(var w in this.adj[v]) { 
        if (!this.marked[w]) { 
            this.dfs(w); 
        } 
    }
}

let g = new Graph(5); 
g.addEdge(0,1); 
g.addEdge(0,2); 
g.addEdge(1,3); 
g.addEdge(2,4); 
g.showGraph(); 
// g.dfs(0);
// console.log(g.showGraph())