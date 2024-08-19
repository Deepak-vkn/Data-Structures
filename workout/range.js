function range(start,end){

    return arrayadd(start,end,start)
}
function arrayadd(start,end,i){

     if(i>end){
        return []
     }
     else{
      
        return [i].concat(arrayadd(start,end,i+1))
     }
}

console.log(range(2,9))