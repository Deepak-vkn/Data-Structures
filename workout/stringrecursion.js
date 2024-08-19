function reverse(s) {
    return rev(s, s.length - 1);
}



function rev(s, i) {
    if(i<0){
        return ''
    }
    else{
        return s[i]+rev(s,i-1)
    }
}

console.log(reverse('rahul')); 
