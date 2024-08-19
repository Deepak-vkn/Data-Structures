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
        this.tail=null
    }

    isEmpty(){
        return this.size===0
    }

    prepend(value){

        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        if(this.isEmpty()){
            const node=new Node(value)
            this.head=node
            this.tail=node
        }
        else{
            const node=new Node(value)
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
            this.tail=node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
            return
        }
        let cur=this.head
        let listvalues=''
        while(cur){
            listvalues+= `${cur.value} `
            cur=cur.next
        }
        console.log(listvalues)

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
    removeend(){
        if(this.isEmpty()){
            return  null
        }
        else{
          let prev=this.head
          while(prev.next && prev.next !==this.tail)
          prev=prev.next
          prev.next=null
        this.tail=prev
        this.size--
        }
      
    }

}

const list =new Linkedlist()

console.log(list.isEmpty())
list.prepend(5)
list.prepend(4)
list.append(6)
list.print()
list.removeend()
list.print()

