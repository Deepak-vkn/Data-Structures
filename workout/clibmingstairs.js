let n=5

console.log(stair(n))

function stair(n){

if(n<2){
    return 1
}
else{
    return stair(n-1)+stair(n-2)
}

}