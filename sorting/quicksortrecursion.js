function quicksort(a){
    
    if(a.length<2){
        return a
    }

    else{
        let left=[]
        let right=[]
        let pivot=a[a.length-1]

        for(let i=0;i<a.length-1;i++)
        {
            if(a[i]<pivot){
                left.push(a[i])
            }
            else{
                right.push(a[i])
            }
        }
        return [...quicksort(left),pivot,...quicksort(right)]

    }
}

let a=['B','A','D','C','F']
console.log(quicksort(a))