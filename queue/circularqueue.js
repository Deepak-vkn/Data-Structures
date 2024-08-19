class CircularQueue{
    constructor(size){
        this.items=new Array(size)
        this.capacity=size
        this.rear=-1
        this.front=-1
        this.currentlength=0
    }

    isEmpty(){
        return this.currentlength==0
    }
    isFull(){
        return this.capacity===this.currentlength
    }

    enqueue(value){
        if(!this.isFull()){

            this.rear=(this.rear+1)%this.capacity
            this.items[this.rear]=value
            this.currentlength=this.currentlength+1
            if(this.front==-1){
                this.front=this.rear
            }
        }
    }


    
    dequeue(){
        if(this.isEmpty()){
            return null
        }
        else{
            this.items[this.front]=null
            this.front=this.front+1
            this.currentlength=this.currentlength-1
            if(this.isEmpty()){
                this.rear=-1
                this.front=-1
            }
        }
    }
}


const queue=new CircularQueue(5)
console.log(queue.isEmpty())
console.log(queue.isFull())