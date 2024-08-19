function number(n){
    let s=String(n)
    return pali(s,0,s.length-1)
}


function pali(s,start,end){

    if(start>=end){
        return true
    }
    else if(s[start]!== s[end]){
        return false
    }
    else{
        return pali(s,start+1,end-1)
    }
}

console.log(number(12111211))