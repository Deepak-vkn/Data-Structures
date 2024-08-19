class Stack{
    constructor(){
        this.items=[]
    }
    push(value){
        this.items.push(value)
    }
    pop(){
        this.items.pop()
    }



    
    print(){
        console.log(this.items.toString())
    }
    


    peek(){
        console.log(this.items[this.items.length-1])
    }
}
const stack=new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
stack.pop()
stack.print()
stack.peek()