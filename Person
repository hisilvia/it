9/26/2024
// Questions -
// Create a Person <few properties and a function to return them> and Inherit it as Student class and override the function
// Inherit should be done both way's constructor and Object.Create
// Create three objects and merge their propeties
// Create a logical example of closure
// Share few data objects from one file to another

var Person = {
	Name: "Silvia M:,
	ID: 2025,
	CarMode: Ford,
	GetPersonInfo: function () {
		return `
			${this.Name}
			${this.ID}
			${this.CarMode}
			${this.Salary}
		`
	
	}
}

//Setting Person object to create a new class using constructor
var PersonA = new Object(Person)
//var PersonA = Object.create(Person)
var PersonB = new Object(Person)
var PersonC = new Object(Person)

//Create three objects and merge their propeties
var BlogType = {ID:789, Title: "Pets"}
var BlogView = {ID:497, Body: "cat"}
var BlogInfo = {ID:123, Date: 5-6-2023}

var DispatchItem = {BlogType, BlogView, BlogInfo}

// Create a logical example of closure
// Share few data objects from one file to another

DispatchItem = Object.assign(BlogType, BlogView, BlogInfo)
BlogInfo.Date = 9-26-2024
console.log(DispatchItem)
