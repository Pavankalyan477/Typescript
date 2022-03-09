// Implicit

// let x=10;
// x="pavan"  // ERROR
// x=19;


//  NUMBER
let x:number;
x=10;
console.log(x);
x=18;
console.log(x);

//boolean
let b:boolean;
b=true;
b=false;

//String

let str:string;
str="SoluteLabs";

str="Pavan";

//Arrays
let arr1:number[];
arr1=[1,2,3,4];

// arr1=["pavan","kalyan"]   // ERROR

let arr2:string[];
arr2=["pavan","kalyan"]
// arr2=[1,3,4]         // ERROR

let arr3:boolean[];

arr3=[true,false,false,true]

let arr4:any[];
arr4=[1,"masai",true]

// TUPLE

let tpl:[number,string]; // Fixed length

tpl=[4,"qwe"];

console.log(tpl[1].substring(0,tpl[1].length))

// tpl=[" qwe",4]   // ERROR

// ENUMERATED DATA TYPE;

// const enum color{
//     red,green,yellow
// }
enum color{
    red="RED",yellow="YELOW",green="green"
}
// for(let key in color){

// }
 //console.log(color.red)

 // NULL and Undefined

 let n:null=null;

 let u:undefined=undefined;

 // VOID (Do not need any return value)

 function add(a:number,b:number):void{
     console.log(a+b);
 }
 add(4,3)

 // ANY TYPE
 let an:any;
 an=5;
 an="solute";

 let arr:any[];
 arr=[3,"4",true];

 // OBJECTS

    // INTERFACE

    interface props{
        label:string;
        color:string;
        size:number;
    }
    let obj1:props;
    obj1={label:"add",color:"red",size:20}
   // console.log(obj1);

   // Keys are OPTTIONAL
   interface opt{
       label?:string;
       color:string;
       size?:number
   }
   let obj2:opt;
   obj2={color:"red",size:20}

   console.log(obj2)

   // FUNCTIONS

        //Normal Functions

        function sum1(a:number,b:number):number{
            return a+b;
        }
        sum1(3,4)

        // Anonymous functions

        const fnc1=function(a:number,b:number):void{
          //  return a+b; // errror
          //console.log(a+b)
        }
        fnc1(3,5);

        const fnc2=(a:number,b:number):number=>{
            return a+b;
        }
        fnc2(3,3)