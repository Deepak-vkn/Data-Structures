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

        insert(value,index){

            
            if(index<0 || index>this.size){
                console.log('cant  insert in that position')
                return
            }
            else if(index===0){
                this.prepend(value)

            }
            else{
                const node=new Node(value)
                let prev= this.head
                for(let i=0;i<index-1;i++){
                    prev=prev.next
                }
                node.next=prev.next
                prev.next=node
             }
             this.size++
        }

        removefrom(index){

            if(index<0 || index> this.size){
                return null
            }
            let removenode
            if(index==0){
                removenode=this.head
                this.head=this.head.next
            }
            else{
                let prev=this.head
                for(let i=0;i<index-1;i++){
                    prev=prev.next
                }
                removenode=prev.next
                prev.next=removenode.next
            }
            this.size--
        

        }
        removevalue(value){
            if(this.isEmpty()){
                return null
            }
        
        
            if(this.head.value===value){

                this.head=this.head.next
                this.size--
                return value
            }
            else{
                let prev=this.head
                while(prev.next &&  prev.next.value !==value){
                    prev=prev.next
                }
                if(prev.next){


                    let removenode=prev.next
                    prev.next=removenode.next
                    this.size--
                    return value



                }
               return null
            }
        }
        search(value){
            if(this.isEmpty()){
                return -1
            }
            let cur=this.head
            let i=0
            while(cur){
                if(cur.value==value){
                    return i
                }
                cur=cur.next
                i++
            }
            return -1
        }


    }




const list=new Linkedlist()
console.log(list.isEmpty())
console.log(list.getsize())
list.insert(1,0)
console.log(list.getsize())
list.insert(2,1)
list.insert(4,2)
list.insert(3,2)
list.print()
console.log(list.search(4))


