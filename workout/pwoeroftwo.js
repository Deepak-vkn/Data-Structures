
function  ispower(n){

    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        else{
            n=n/2
        }
    }
    return true
}






let n=3
console.log(ispower(n))