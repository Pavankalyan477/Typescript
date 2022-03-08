var person = {
    name: "pavan",
    age: 30,
    hobbies: ["dance", "Sports"]
};
var arr = [1, 2];
console.log('object' === 'object');
for (var key in person) {
    if (typeof key === typeof arr) {
        console.log(person[key]);
    }
}
