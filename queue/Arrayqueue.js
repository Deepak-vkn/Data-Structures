class Queue{
    constructor(){
        this.items=[]
    }
    isEmpty(){
        return this.items.length==0
    }
    getsize(){
        return this.items.length
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(){
        this.items.shift()
    }
    peek(){
        return this.items[0]
    }
    print(){
        console.log(this.items.toString())
    }
}
const queue=new Queue()
console.log(queue.isEmpty())
console.log(queue.getsize())
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
console.log(queue.peek())
queue.print()