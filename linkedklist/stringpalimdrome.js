let b='malayalam'
let a=b.split('').reverse()




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
       return  this.size==0
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
    print(){
        if(this.isEmpty()){
            console.log('empty')
        }
        else{
            let cur=this.head
            let a=''
            while(cur){
                a+=`${cur.value} `
                cur=cur.next
            }
            console.log(a)
        }
    }
    reverse(){
        if(this.isEmpty()){
            return false
        }
        else{
           let  cur=this.head
          
            let prev=null
            while(cur){
                let next=cur.next
               
                cur.next=prev
                prev=cur
                cur=next
            }
            this.head=prev
        }
    }
    ispalimdrome(a){
        let cur=this.head
        let i=0
        while(cur){
            if(b[i]!==cur.value){
                return false
            }
            else{
                i++
                cur=cur.next
            }
        }
        return true
    }
}

const list=new Linkedlist()
console.log(list.isEmpty())
list.print()
a.forEach(element => {
    list.prepend(element)
});
let x=list.reverse()
console.log(list.ispalimdrome(a))





