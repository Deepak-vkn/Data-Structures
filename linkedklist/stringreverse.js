let a='rahul ranjan'
let b=a.split(' ')
console.log(b)
console.log( reverse(b))
//  let x=[]
// for(let i=0;i<b.length;i++){
//    x.push(b[i].split('').reverse().join('')) 
// }

// console.log(x.join(' '))

function reverse(b){

   return reverseword(b,0)
}

function reverseword(b,i){

   if(i>=b.length){
      return ''
   }
   else{
      let reverse=b[i].split('').reverse().join('')
      return reverse+' '+ reverseword(b,i+1)
   
}
}