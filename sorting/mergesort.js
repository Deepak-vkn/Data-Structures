function mergesort(a){
    if(a.length<2){
        return a
    }
    

    else{
        let mid=Math.floor(a.length/2)
        let left=a.slice(0,mid)
        let right=a.slice(mid)

        return merge(mergesort(left),mergesort(right))
    }
}

function merge(left,right){
    let s=[]

    while(left.length && right.length){

        if(left[0]<right[0]){
            s.push(left.shift())
        }
        else{
            s.push(right.shift())
        }
    }
    
    return [...s,...left,...right]
}

let a=['B','A','D','C','F']
console.log(mergesort(a))