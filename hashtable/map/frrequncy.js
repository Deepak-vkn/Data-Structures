let a=[1,2,1,2,3,4,5,5,4,3,3,8,8,9,8]
let b=new Map()
a.forEach((num)=>{

    if(b.has(num)){
        b.set(num,b.get(num)+1)
}
else{
    b.set(num,1)
}
})
console.log(b)