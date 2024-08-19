

function fibo(n){

    if(n<2){
        return n
    }
    else{

    let s= fibo(n-1)+fibo(n-2)
        return s
    }
}

let n=6

console.log(fibo(n))