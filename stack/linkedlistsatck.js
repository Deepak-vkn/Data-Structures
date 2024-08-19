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

    getsize(){
        return this.size
    }

    print(){
        let cur=this.head
        let a=''
        while(cur){
            a+=`${cur.value} `
            cur=cur.next
        }
        console.log(a)
    }

    prepend(value){

        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }
        else{
            node.next=this.head
            this.head=node
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
}


class Stack{
    constructor(){
        this.stack=new Linkedlist()
    }

    push(value){
        this.stack.prepend(value)
    }
    pop(){
        this.stack.removefront()
    }
    print(){
        this.stack.print()
    }
    peek(){
        return this.stack.head.value
    }
    getsize(){
        return this.stack.getsize()
    }
    isEmpty(){
        return this.stack.isEmpty()
    }
}




const stack=new Stack()

console.log(stack.isEmpty())
stack.push(3)
stack.push(2)
stack.push(1)
stack.push(0)
console.log(stack.getsize())
console.log(stack.peek())
stack.print()
stack.pop()
stack.print()