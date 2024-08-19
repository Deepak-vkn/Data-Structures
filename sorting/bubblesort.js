
function bsort(a){
    let n=a.length
    for(let i=0;i<n-1;i++){
        let flag=0
        for(let j=0;j<n-1-i;j++){
            if(a[j]>a[j+1]){
                let temp=a[j]
                a[j]=a[j+1]
                a[j+1]=temp
                flag=1
            }
        }
        if(flag==0){
            break;
        }
    }
    return a
}
let a=['B','A','D','C','F']
console.log(bsort(a))

