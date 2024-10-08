//1.DateFile.js - discuss the histry
//JS - function, var
//2015 => JS => ES6
//ES =>ECMASCRIPT

//2.Variables.js
//To create a variable we only have var keyword in JS
//and which has some features like var hoisting which sometimes

//In ES6 we got two new variable types
//let - is like var but doesn't support hoisting and has some more features
//const - is there to create constant declarations to be used in application

//a. Declarations and Assignments - same name variable
//var - we can declare and re-declare as many times as we want
//let - we can declare once but cannot declare again

var newVar = "Somevalue"
var newVar = "Somevalue2"

let newLet = "SomeValue Let"
//let newLet = "SomeValue Let"  //re-declaration not allowed

const newConst = "SomeValue Const"
//const newConst = "SomeValue Const" //re-declaration not allowed

//b. Define and Assign value later
let newLet2;

newLet2 = "SomeValue New LET2"

//const - we need to Assign the value as soon as we define it
//const newConst2; //not allowed - declaration must be initialized -cause error:undefined
//newConst2 = "SomeValue New LET2"

//c. var is functional scope, let and const are lexical <block> scope


if const user = {}  //eg. address [23]
  user.name = "Michael"  // eg.[23] =>[26] {name:"Michael"}//we're updating value via reference
  console.log(user) ==> {name: "Michael"} get the value

  const user = {}  //[23]  //const user=3.141 is an object
  user = {name: "Jugue"} //[24]//not allowed cause constant variable-changed the address


//d. Hoisting not present for let or const


//e. Evaluation of let and const are done before passing them to function,
//this is different in comparison to var where the value is evaluated at the time of function execution

var index = 1;  //function scoped and evaluated at the time of execution

for (index = 1; index < 5; index++) {

    setTimeout(function () {
        console.log(index)
    },3000)
} 
console.log(index)
==>5 5
*****************************************
if 
  for (let index = 1; index < 5; index++) {

    setTimeout(function () {
        console.log(index)
    },3000)
} 
==>1 2 3 4








