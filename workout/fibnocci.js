let n=7
let a=[0,1]
for(let i=2;i<n;i++){
let b=a[i-1]+a[i-2]
a.push(b)

}
console.log(a)