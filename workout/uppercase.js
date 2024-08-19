function upper(s){
    return check(s,0)
}


function check(s,i){

    if(i>s.length-1){
        return false
    }
    else if (isUpper(s[i])) {
        return i;
    
    }
    else{
        return check(s,i+1)
    }

}
console.log(upper('deePak'))
