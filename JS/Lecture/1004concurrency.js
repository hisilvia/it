//some code
call==> server ==> (2 minutes) => (call back to execute after 2 minutes)

//Javascript is a single threaded, non-blocking, concurrent and high performance run time
console.log("Concurrent Execution Starts here") //#1

setTimeout(() => {
  console.log("First Timeout code (delayed 1)") //#4 ==> #3 is right

  setTimeout(function() {
    console.log("Inner TimeOut")               //#3 ==> #4 is right
  },0);
  
}, 1000);     //+1 sec

setTimeout(() => {
  console.log("Second Timeout code (delayed 2)")  //#5  
}, 2000);  //+1+2 Sec ==>1+1 =>2 sec

setTimeout(() => {
  console.log("Third Timeout code (delayed 3)")  //#6
}, 3000);  //+1+2+3 Sec ==> 1+ 2 =>3 sec

console.log("Concurrent Execution Ends here")  //#2

==> Run node concurrency:
  Concurrent Execution Starts here
  concurrent Execution Ends here
  First Timeout code (delayed 1)
  Inner TimeOut
  Second Timeout code (delayed 2)
  Third Timeout code (delayed 3)

//Callbacks
//registered API's - SetTimeout, SetInterval, XHR (xml http request), 
// registered callbacks(I/O operations to interact with

//If all setTimeout(*,1000)
console.log("Concurrent Execution Starts here") //#1
setTimeout(() => {
  console.log("First Timeout code (delayed 1)") //#
  setTimeout(function() {
    console.log("Inner TimeOut")               //#
  },0); 
}, 1000);     //+1 sec

setTimeout(() => {
  console.log("Second Timeout code (delayed 2)")  //#  
}, 1000);  //

setTimeout(() => {
  console.log("Third Timeout code (delayed 3)")  //#
}, 1000);  //

console.log("Concurrent Execution Ends here")  //#

==> Run node concurrency:
  Concurrent Execution Starts here
  concurrent Execution Ends here
  First Timeout code (delayed 1)
  Second Timeout code (delayed 2)
  Third Timeout code (delayed 3)
  Inner TimeOut
