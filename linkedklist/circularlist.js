

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

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            node.next=this.head
        }
        else{
        node.next = this.head;
        let cur = this.head;
        while (cur.next !== this.head) {
            cur = cur.next;
        }
        cur.next = node;
        this.head = node;
        }

        this.size++
    }
    print(){
        if(this.isEmpty()){
          console.log('empty')
        }
        else{
            let cur=this.head
            let a=''
       do{
        a+=`${cur.value} `
        cur=cur.next
       }
       while(cur!==this.head)
       console.log(a)
        }
    }


    
    hasCycle(){

        if(this.isEmpty()){
            return false
        }
        else{
            let slow=this.head
            let fast=this.head
            while(fast && fast.next){
        
                if(fast==slow){
                    return true
                }
                else{
                    slow=slow.next
                    fast=fast.next.next
                }
            }
        }
    }
}

const list=new Linkedlist()
console.log(list.isEmpty())
let a=[1,2,3,4,5]
a.forEach(element => {
    list.prepend(element)
});
list.print()
console.log(list.hasCycle())
