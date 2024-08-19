let name ='deepak edpa'


function reverse(s,i){


    if(i>s.length-1){
        return ' '
    }else{
 
        let rreverse=s[i].split('').reverse().join('')
        return rreverse+' '+reverse(s,i+1)
    }
}
const s=name.split(' ')

console.log(reverse(s,0))
