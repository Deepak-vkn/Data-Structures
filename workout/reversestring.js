
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
        return this.size===0
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
    reverse(){
        let cur=this.head
        let prev=null
        while(cur){
            let next=cur.next
            cur.next=prev
            prev=cur
            cur=next
        }
        this.head=prev
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
    palim(x){
        let cur=this.head
        let i=0
        while(cur){
            if(cur.value!==x[i]){
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



let a=12321
let x=String(a).split('')
let b=String(a).split('').reverse()
const list=new Linkedlist()
b.forEach(i=>{
    list.prepend(i)
})
list.reverse()
list.print()
console.log(list.palim(x))