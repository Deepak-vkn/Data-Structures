class Heap{
    constructor(){
        this.heap=[]
    }


    push(value){
        this.heap.push(value)
        this.heapfyup()
    }
     

    heapfyup()
    {
        let cur=this.heap.length-1
        while(cur>0){
            let parent=Math.floor((cur-1)/2)
            if(parent>=0 && this.heap[parent]<this.heap[cur]){
                [this.heap[parent],this.heap[cur]]=[this.heap[cur],this.heap[parent]]
                cur=parent
            }
            else{
                break
            }
        }
    }

    leftchild(i){
        return 2*i+1
    }
    rightchild(i){
        return 2*i+2
    }

    delete(){
        if(!this.heap.length){
            return null
        }
        else if(this.heap.length==1){
            this.heap.pop()
            return 
        }


        else{
            let element=this.heap.pop()
            this.heap[0]=element
            this.heapifydown()
        }

    }

    heapifydown(){

        let cur=0
        let length=this.heap.length


        while(true){
            let big=cur
            let leftchild=this.leftchild(cur)
            let rightchild=this.rightchild(cur)

            if(leftchild <length && this.heap[leftchild]>this.heap[cur]){
                big=leftchild
            }
            if(rightchild <length && this.heap[rightchild]>this.heap[big]){
                big=rightchild
            }

            if(big!==cur){
                [this.heap[cur],this.heap[big]]=[this.heap[big],this.heap[cur]]
                cur=big
            }

            else{
                return 
            }

        }
    }
    
    
    heapsort(){
        let sorted=[]
        while(this.heap.length){
            sorted.unshift(this.heap[0])
            this.delete()
        }
        return sorted
    }

}

const myheap=new Heap()
myheap.push(8)
myheap.push(3)
myheap.push(10)
myheap.push(11)
myheap.push(9)
myheap.push(7)
myheap.push(1)
myheap.push(4)
myheap.push(5)

console.log(myheap.heap)
myheap.delete()

console.log(myheap.heap)
// console.log(myheap.heapsort)
// console.log(myheap.heapsort())