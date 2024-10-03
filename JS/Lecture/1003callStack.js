//Stack - LIFO, data structure

// callStack
var myName = "Some Random Name"
console.log(myName)

//after run node callstack ==> Some Random Name

function Foo() {
  console.log("We are in FOO")
  return "Foo"
}

function Bar(){
  console.log("We are in BAR")
  return "Bar"
}
function Baz(){
  console.log("We are in BAZ")
  return "Baz"
}
Foo()
Bar()
Baz()

//Run node callstack ==>Some Random Name
                        We are in FOO
                        We are in BAR
                        We are in BAZ

function Foo() {
  throw new Error("Call Stack");
}
function Bar() {
  Foo();
}
function Baz(){
  Bar()
}
Baz()

//Run: node callstack ==>Some Random Name
                         Error: Call Stack
                         .....
**callstack - the executing thread allocated some memory to run the interpreter,
**and works in LIFO fashion, this also has the access to heap (for larger chunk of data like objects)
**less memory, easily available 

//if function Baz() {Baz()}  
//   Baz()
//  stack will be overflow after running node callstack


