function sum(n){

    if(n<2){
        return n
    }
    else{
        return n+sum(n-1)
    }
}



let n=5

console.log(sum(3))