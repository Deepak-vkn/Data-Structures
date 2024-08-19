function palimdrome(s){
    return check(s,0,s.length-1)
}

function check(s,start,end){

    if(start>end){
        return true
    }
    else if(s[start]!==s[end]){
        return false
    }
    else{
        return check(s,start+1,end-1)
    }
}

console.log(palimdrome('1211'))