class Node{

    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }
    getSize(){
        return this.size
    }
    append(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
          this.tail.next=node
          this.tail=node
        }
        this.size++
    }
    
    removefront(){
        if(this.isEmpty()){
            return null
        }
        else{
            this.head=this.head.next
            this.size--
        }

    }

    
    print(){
        if(this.isEmpty()){
            return null
        }
        let cur=this.head
        let listvalues=''
        while(cur){
            listvalues+= `${cur.value} `
            cur=cur.next
        }
        console.log(listvalues)
    }
   
}


class Queue{
    constructor(){
        this.queue=new Linkedlist()
    } 

    isEmpty(){
        return this.queue.isEmpty()
    }
    getSize(){
        return this.queue.getSize()
    }
    print(){
    this.queue.print()
    }

    enqueue(value){
        this.queue.append(value)
    }
    dequeue(){
        this.queue.removefront()
    }
    peek(){
        return this.queue.head.value
    }
}



const queue=new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
console.log(queue.peek())
queue.dequeue()
queue.print()
console.log(queue.peek())




