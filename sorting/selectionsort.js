function selectionsort(a){
     for(let i=0;i<a.length-1;i++){
        let min=i
        for(let j=i+1;j<a.length-1;j++){
            if(a[j]<a[min]){
                min=j
            }
        }
        if(min!==i){
            let temp=a[i]
             a[i]=a[min]
             a[min]=temp
        }
     }
    return a
}


let a=['B','A','D','C','F']
console.log(selectionsort(a))