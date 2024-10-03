10/2/2024
//Q1. Create a file with name basics and show all the features that you know about javascript?
JS is a case sensitive, and can be use some special chars, such as $ and _.
we use == to compare the value, but we use === to compare both the type and the value.

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
primitive type or string, number, boolean, object, number, default value, boolean, string, null



//Q3. Create a function with name showUserInfo, this function expects three params, firstname, lastname and age
//  print all the details in the given function
function showUserInfo(firstname, lastname, age) {
	console.log("firstname= ", firstname)
	console.log("lastname= ", lastname)
	console.log("age= ", age)
	
}	
or
function showUserInfo(fname, lname,age) {
	this.fname = fname,
	this.lname = lname,
	this.age = age;
	
	this.getUserInfo = funtion () {
		console.log("User Info is: ", this.fname, this.lname, this.age)
	}	
}	


//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we get and try explaining the reasons behind!!
var add = function(a,b,c) {
		return a+b+c
}
Explian:
add(2,3,4) ==>9                              //three parameters are numbers
add(2)     ==>2                              //only one number
add(2.3,3) ==>2.33                           //since 2.3 has a point, it could consider as a string
add("first", 2, "three") ==>first2three      //these are strings, so concat strings

//Q5. Give me an example of your choice for each of the below concepts
// a. closure, 
// b. hoisting, 
// c. constructor function
a.closure -- 
let glo=3
function myFunc(){
	return glo+glo;
}

function myFunc(){
	var loc=4;
	return loc+loc;
}
explain: function can access global variable or local variable

b. hoisting-- in JS, a variable can be used before it has been declared.
		but hoisting makes us to use the top of the current scope.
var myVar = "Happy"
console.log(myVar) ==>output: Happy

but we type console.log(badVar) ==>no error, but this shows a undefined.  

c. constructor function
function Student(id, name,grade) {
		this.id = id,
		this.name = name,
		this.grade = grade;
		
		this.getStudentDetails = function () {
				console.log("Student info is: ", this.id, this.name, this.grade)
		}	
}	

//create a new Object
var stuObj = new Student(123, "Alec", 98)

//Add a new property
stuObj.lever = "A";


//Q6. What is the purpose of call, apply and bind ? and why they are used ? whats the difference between bind and apply ?
The purpose is to pass as arguments to other functions, and it helps change the context or return the desired object value.

The differences:
bind doesn't execute the function immediately.
apply executes the function immediately

//Q7. Create an example of bind using Student object, where a function returns data with SetTimeOut and we fix it by bind.
var Student = {
	name: "Gu",
	major: "CS",
	GetStudentDetails: function(){
			setTimeout(function(){
					console.log(`${this.name} ${this.major}`)
			}.bind(Student), 1000);	
	}
}	

//Q8. Create an example of creating object with null prototype
var nullObj = Object.create(null)

//Q9. How do we merge different objects properties using Object class function
we can use Object.assign(object1, object2) to merge different objects properties.

var obj1 = {id: "123", name: "Lilly"}
var obj2 = {order_id: "456123", order_date: "2024-09-30"}

var mergObj = Object.assign(obj1,obj2)

//Q10. Create an object literal and export it to another file and import and show that there
var Pet1 = {
	name: "Simon",
	age: 12,
	parent: "James"
}

var Pet2 = {
	name: "Lilly",
	age: 16,
	parent: "Bob"
}
//use module.exports to access another file
module.exports = {Pet1, Pet2}

//use require to import from a file
var Pet3 = require("./literal")
