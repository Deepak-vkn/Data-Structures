class Node{
    constructor(key,value){
        this.key=key
        this.value=value
        this.next=null
    }
}


class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }



    hash(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)

        }
        return total%this.size
    }


    set(key,value)
    {
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=new Node(key,value)
        }


        else{
            let cur=this.table[index]
            while(cur.next!==null){
                if(cur.key==key){
                    cur.value=value
                    return
                }
                cur=cur.next
            }

            if(cur.key==key){
                cur.value=value 
                return
            }

            else{
                cur.next=new Node(key,value)
            }
        }
    }



    get(key){
        const index=this.hash(key)

        if(this.table[index]){

            let cur=this.table[index]
            while(cur){
                if(cur.key==key){
                    return cur.value
                }
                else{
                    cur=cur.next
                }
            }

        }
        else{
            return undefined
        }

    }


    remove(key){
        const index=this.hash(key)
        let cur = this.table[index];

        let prev=null

        while(cur){
            if(cur.key==key){
                if(prev==null){
                    this.table[index]=cur.next
                    return
                }

                else{
                    prev.next=cur.next
                }
                return
            }

            prev=cur
            cur=cur.next
        }
    }


    display(){
        for(let i=0;i<this.table.length;i++){
            let cur=this.table[i]
            while(cur){
                console.log(i,cur.key,cur.value)
                cur=cur.next
            }
        }
        
    }
}



const table = new HashTable(50);
table.set('name', 'deepak');
table.set('mane', 'sample');
table.set('age', 23);
table.set('sex', 'male');
console.log(table.display())
