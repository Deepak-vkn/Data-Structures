let n=10
let flag=0
for(let i=2;i<n;i++){
    if(n%i===0){
        console.log('false')
        flag=1
    }
}
if(flag===0){
    console.log('true')
}