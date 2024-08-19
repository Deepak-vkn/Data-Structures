class Node{
    constructor(value){
        this.value=value
        this.right=null
        this.left=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }


    isEmpty(){
        return this.root==null
    }

    insert(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.root=node
        }
        else{
            this.insertnode(this.root,node)
        }
    }

    insertnode(root,node){
        if(root.value>node.value){
            if(root.left==null){
                root.left=node
            }
            else{
                this.insertnode(root.left,node)
            }
        }
        else{
            if(root.right==null){
                root.right=node
            }
            else{
                this.insertnode(root.right,node)

            }
        }
    }



    search(root,value){
        if(!root){
            return false
        }
        else if(root.value==value){
            return true

        }
        else if(root.value>value){
            return this.search(root.left,value)
        }
        else{
            return this.search(root.right,value)
        }
    }



    //inorder traversal8
    // left -> root -> right

    inorder(root){
        if(root==null){
            return []
        }
        let result=[]
        result= result.concat(this.inorder(root.left))
        result.push(root.value)
        result= result.concat(this.inorder(root.right))
        return result
    }




    //preorder traversal

    //root -> left -> right

    preorder(root){
        if(root==null){
            return []
        }
        let result=[]
        result.push(root.value)
        result=result.concat(this.preorder(root.left))
        result=result.concat(this.preorder(root.right))
        return result
    }


    //post order traversal

    //left -> right -> root

    postorder(root){
        if(root==null){
            return []
        }
        let result=[]
        result=result.concat(this.postorder(root.left))
        result=result.concat(this.postorder(root.right))
        result.push(root.value)

        return result
    }



    min(root){
        if(!root.left.left){
            return root.value
        }
        else{
          return  this.min(root.left)
        }
    }

    max(root){
        if(!root.right.right){
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }


    isBst(root){
    let arr=this.inorder(root)//inorder always return the ouput as assending order

    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
    }

    

    //deletion----------------------------------------------------------
    //3 consdtions
    //a) that delte node having zero childern
    //b)haing one child
    //c)having 2 children  --> we can replce the node with its inorder predesissor or inorder succsoor

    //inorder predessissor-largest value on the left
    //inorder susscor- smallest elemnt in the right subtree

    deletenode(root,target){

        if(!root){
            return null
        }

        if(target<root.value){
            root.left=this.deletenode(root.left,target)
        }

        else if(target>root.value){
            root.right=this.deletenode(root.right,target)
        }


        else{
            if(!root.right && !root.left){
                return null
            }
            else if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            
            root.value=this.min(root.right)
            root.right=this.deletenode(root.right,root.value)
        }

        return root
    }

    closest(root,element){
        if(!root){
            return null
        }
        let close=root.value

        if(element<root.value && root.left){

            let left=this.closest(root.left,element)

            if (left != null && Math.abs(left - element) < Math.abs(close - element)) {
                close = left;
            }
        }

        
        else if(element> root.value && root.right){
            
            let right=this.closest(root.right,element)
            if (right != null && Math.abs(right - element) < Math.abs(close - element)) {
                close = right;
            }
            
        }

        return close
    }


    //Breadth first search//level oder search

    levelorder(){
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
             if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}



const bst=new BinarySearchTree()
console.log(bst.isEmpty())
bst.insert(6)
bst.insert(4)
bst.insert(9)
bst.insert(1)
console.log(bst.search(bst.search(bst.root,14)))

console.log(bst.inorder(bst.root))
console.log(bst.preorder(bst.root))
console.log(bst.postorder(bst.root))
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))
console.log(bst.isBst(bst.root))
/console.log(bst.deletenode(bst.root,9))

console.log(bst.closest(bst.root,8))
bst.deletenode(bst.root,9)

console.log(bst.max(bst.root))