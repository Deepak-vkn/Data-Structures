

function insertionsort(a){
    let n=a.length
    for(let i=1;i<n-1;i++){
        let j=i-1
        let temp=a[i]
        while(j>=0 && a[j]>temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]=temp
    }
    return a
}


let a=['B','A','D','C','F']
console.log(insertionsort(a))