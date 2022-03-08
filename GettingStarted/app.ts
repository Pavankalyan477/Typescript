const person={
    name:"pavan",
    age:30,
    hobbies:["dance","Sports"],



}
let arr=[1,2]
console.log('object'==='object')
for(let key in person){
    if(typeof key===typeof arr){
        console.log(person[key])
    }
}

