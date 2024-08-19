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
    return total %this.size
   }




   set(key,value){
    const index=this.hash(key)
    // this.table[index]=value

    const bucket=this.table[index]
    if(!bucket){
        this.table[index]=[[key,value]]
    }
    else{
        const samekey=bucket.find(item=>item[0]==key)
        if(samekey){
            samekey[1]=value

        }
        else{
            bucket.push([key,value])

        }
    }
   }
   

   get(key){

    const index=this.hash(key)

    const bucket=this.table[index]

   const samekey=bucket.find(item=>item[0]==key)
    if(samekey){
        return samekey[1]
    }
    return undefined
   }
   



   remove(key){

    const index=this.hash(key)
    const bucket=this.table[index]
    if(bucket){
        const samekey=bucket.find(item=>item[0]==key)

        if(samekey){
            bucket.splice(bucket.indexOf(samekey),1)
        }
    }
   }


   display(){
      
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i,this.table[i])
        }
    }
   }

}


const table= new HashTable(50)
table.set('name','deepak')
table.set('mane','sample')
table.set('age',23)
table.set('sex','male')
table.display()
