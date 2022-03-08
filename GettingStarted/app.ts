const person={
    name:"pavan",
    age:30,
    hobbies:["dance","Sports"],
    role:[1,"admin"]



}
let arr=[1,2]
person.role.push("new")
console.log(person.role)
for(let key in person){
    if(typeof key===typeof arr){
        console.log(person[key])
    }
}

