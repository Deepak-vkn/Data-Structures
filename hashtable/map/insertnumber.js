let person=new Map()
person.set('name','deepak')
person.set('age','23')
person.set('sex','male')
person.set('month','may')

person.forEach((value,key)=>{
    console.log(`${key} :${value}`)
})

person.set('name','deepthii')

person.forEach((value,key)=>{
    console.log(`${key} :${value}`)
})
