class Graph{
    constructor(numbervertices){
        this.numbervertices=numbervertices
        this.adjmatrix=[]

        for(let i=0 ;i<=this.numbervertices;i++){

            this.adjmatrix[i]=new Array(this.numbervertices).fill(0)
        }

    }


    
    add(i,j){

        if(i>=0 && i <=this.numbervertices && j>=0 && j<=this.numbervertices){
            this.adjmatrix[i][j]=1
        }
        else{
            console.log('invalid indeces',i,j)
        }
    }
}

const graph=new Graph(5)

graph.add(1,2)
graph.add(3,2)
graph.add(1,4)
graph.add(5,2)
graph.add(3,4)
graph.add(1,5)
graph.add(2,2)
graph.add(7,8)
console.log(graph.numbervertices);
console.log(graph.adjmatrix)