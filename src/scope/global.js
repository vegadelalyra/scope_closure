var a // ? declaring
var b = 'b' // ? declaring and assigning (initializing)
b = 'bb' // ? reassigning (reinitializing)
var a = 'aa' // ? redeclaring

// * Global Scope
// ? Global variables are instances at our global object 'window'
var fruit = 'Apple' // global
console.log(fruit) // Apple

function bestFruit() {
	console.log(fruit)
}

bestFruit() // Apple


function  countries () {
	country = 'Colombia' // global by default
	console.log(country)
}

countries() // Colombia
console.log(country) // Colombia