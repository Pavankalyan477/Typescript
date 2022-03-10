// Implicit
// let x=10;
// x="pavan"  // ERROR
// x=19;
//  NUMBER
var x;
x = 10;
console.log(x);
x = 18;
console.log(x);
//boolean
var b;
b = true;
b = false;
//String
var str;
str = "SoluteLabs";
str = "Pavan";
//Arrays
var arr1;
arr1 = [1, 2, 3, 4];
// arr1=["pavan","kalyan"]   // ERROR
var arr2;
arr2 = ["pavan", "kalyan"];
// arr2=[1,3,4]         // ERROR
var arr3;
arr3 = [true, false, false, true];
var arr4;
arr4 = [1, "masai", true];
// TUPLE
var tpl; // Fixed length
tpl = [4, "qwe"];
console.log(tpl[1].substring(0, tpl[1].length));
// tpl=[" qwe",4]   // ERROR
// ENUMERATED DATA TYPE;
// const enum color{
//     red,green,yellow
// }
var color;
(function (color) {
    color["red"] = "RED";
    color["yellow"] = "YELOW";
    color["green"] = "green";
})(color || (color = {}));
// for(let key in color){
// }
//console.log(color.red)
// NULL and Undefined
var n = null;
var u = undefined;
// VOID (Do not need any return value)
function add(a, b) {
    console.log(a + b);
}
add(4, 3);
// ANY TYPE
var an;
an = 5;
an = "solute";
var arr;
arr = [3, "4", true];
var obj1;
obj1 = { label: "add", color: "red", size: 20 };
var obj2;
obj2 = { color: "red", size: 20 };
console.log(obj2);
// FUNCTIONS
//Normal Functions
function sum1(a, b) {
    return a + b;
}
sum1(3, 4);
// Anonymous functions
var fnc1 = function (a, b) {
    //  return a+b; // errror
    //console.log(a+b)
};
fnc1(3, 5);
var fnc2 = function (a, b) {
    return a + b;
};
fnc2(3, 3);
// OBJECTS FUNCTIONS
function user(_a) {
    var first = _a.first, last = _a.last;
    return first + " " + last;
}
function user1(_a) {
    var first = _a.first, last = _a.last;
    return first + " " + last;
}
user1({ first: "pavan", last: "kalyan" });
function user2(_a) {
    var first = _a.first, last = _a.last;
    if (last)
        return first + " " + last;
    return first;
}
user2({ first: "pavan" });
// UNION TYPE
var usertype;
usertype = "admin";
usertype = "user";
// usertype="producer" // ERROr
var value;
var data = {
    status: true,
    cityname: {
        title: "bangalore"
    }
};
//Classes and Interfaces
//Inheritances
//OOPS
//Generics
//Decorators
