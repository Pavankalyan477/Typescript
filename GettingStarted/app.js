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
