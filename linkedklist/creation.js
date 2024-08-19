class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Linkedlist{
    constructor()
    {
        this.head=null
        this.size=0
    }
    isEmpty(){
    return this.size===0
    }
    getsize(){
        return this.size
    }
//o(1)
    prepend(value){
        const node= new Node(value)
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
                console.log('The lis it empty')

            }
            else{
                let curr=this.head
                let listvalues=''
                while(curr){
                    listvalues+= `${curr.value} `
                    curr=curr.next
                }
                console.log(listvalues)
            }
        }
        //o(n)
        append(value){

            const node=new Node(value)

            if(this.isEmpty()){
                this.head=node
            }
            else{
                let pre=this.head
                while(pre.next){
                    pre=pre.next

                }

            pre.next=node
            }
            this.size++

        }

       
    }




const list=new Linkedlist()
console.log(list.isEmpty())
console.log(list.getsize())

list.prepend(5)
list.prepend(6)
list.prepend(7)
console.log(list.isEmpty())
console.log(list.getsize())

//print
list.print()


//append at the end of the list

list.append(9)
list.print()