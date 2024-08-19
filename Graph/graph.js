

class Graph{
    constructor(){
      this.adjacencylist={}
    }

    addvertex(vertex){
      if(!this.adjacencylist[vertex]){
          this.adjacencylist[vertex]=new Set()
      }
    }



    addedge(v1,v2){
  
      if(!this.adjacencylist[v1]){
          this.addvertex(v1)
      }
      if(!this.adjacencylist[v2]){
          this.addvertex(v2)
      }
  
      this.adjacencylist[v1].add(v2)
      this.adjacencylist[v2].add(v1)
    }



    display(){

      for(let v  in this.adjacencylist){
          console.log(v,'==>',[...this.adjacencylist[v]])
      }
    }
  


    hasedge(v1,v2){
  
      return this.adjacencylist[v1] && this.adjacencylist[v2] && this.adjacencylist[v1].has(v2)
    }

    removedge(v1,v2){

        this.adjacencylist[v1].delete(v2)
        this.adjacencylist[v2].delete(v1)
    }


    bfs(v){
        let visited={}
        let queue=[v]
        visited[v]=true
        
        while(queue.length){
            let cur=queue.shift()
            console.log(cur)
            for(let v of this.adjacencylist[cur]){
                if(!visited[v]){
                    visited[v]=true
                    queue.push(v)
                }
            }
        }
    }
    
    
    dfs(vertex,visited={}){
        if(!vertex){
            return
        }
        visited[vertex]=true
        console.log(vertex)
        for(let neghibor  of this.adjacencylist[vertex]){
            if(!visited[neghibor]){
                this.dfs(neghibor,visited)
            }
        }
    }

  }
  
  

  const graph=new Graph()
  graph.addvertex(1)
  graph.addvertex(2)
  graph.addvertex(3)
  graph.addvertex(4)
  graph.addvertex(5)
  graph.addedge(1,2)
  graph.addedge(1,3)
  graph.addedge(3,2)
  graph.addedge(4,2)
  graph.addedge(1,5)
graph.display()
  
//   console.log(graph.hasedge(2,5))
//   graph.display()
//   graph.bfs(1)
graph.dfs(1)