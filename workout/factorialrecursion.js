let n=5

console.log(fact(n))

function fact(n){
    if(n<1){
        return 1
    }

    return n*fact(n-1)
}