class Node{
    constructor(){
        this.keys=new Map()
        this.end=false
    }
}


class Trie{
    constructor(){
        this.root=new Node()
    }

    add(word,node=this.root){
        if(!word.length){
            node.end=true
            return 
        }
        let c=word[0]

        if(!node.keys.has(c)){
            node.keys.set(c,new Node())
        }
        return this.add(word.slice(1),node.keys.get(c))
    }
    

    isword(word,node=this.root){

        if(!word.length){
            return node.end
        }
        let c=word[0]
        if(!node.keys.has(c)){
            return false
        }
        return this.isword(word.slice(1),node.keys.get(c))
    }



   print(node=this.root,word='',arr=[]){
    if(node.end){
        arr.push(word)
    }
    for(let [char,childNode] of node.keys){
        this.print(childNode,word+char,arr)
    }
    return arr
   }



    delete(word,node=this.root,index=0){

       if(index==word.length){
        if(!node.end){
            return false
        }
        node.end=false
        return node.keys.size===0
       }

       let char=word[index]
       if(!node.keys.has(char)){
        return false
       }

        let shouldDeleteNode=this.delete(word,node.keys.get(char),index+1)


        
        if(shouldDeleteNode){
            node.keys.delete(char)
            return node.keys.length===0 && !node.end
        }
        return false
    }
    
    prefix(pref){
        let node=this.findOne(pref)
        let a=[]

        if(!node){
            return a
        }
        else{
            this.print(node,pref,a)
            return a

        }
    }
    findOne(pre){
        let node=this.root
        for(let i=0;i<pre.length;i++){
            if(!node.keys.has(pre[i])){
                return null
            }
            node=node.keys.get(pre[i])


        }
        return node

    }
   
    

}




const trie=new Trie()
trie.add('deepak')
trie.add('deepthii')
trie.add('deeep')
trie.add('naveen')
console.log(trie.isword('dsfds'))
console.log(trie.print())
trie.delete('deep')
console.log(trie.print())
console.log(trie.prefix('deepbnfgh'))
console.log(trie.postfix('pak')); // Output: ['deepak']
