let n=5

let a=[1,2,3,4,5,6,7]
console.log(lsearch(a,n,0))

function lsearch(a,n,i){

    if(i>=a.length){
        return -1
    }

    if(a[i]===n){
        console.log(i)
        return i
    }
    else{
      return  lsearch(a,n,i+1)
    }
}