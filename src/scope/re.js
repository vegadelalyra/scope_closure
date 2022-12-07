// * var
var firstName // ? declaration. Value = undefined. Why? Due to hoisting.
firstName = 'Oscar' // ? initialization/assignation 
console.log(firstName) // Oscar

var lastName = 'David' // ? declaration and initialization in one line
lastName = 'Ana'    // ? reassignation 
console.log(lastName) // Ana

var secondName = 'David' // declaring and initializing in one line
var secondName = 'Ana'  // ? redeclaring

// * let
let fruit = 'Apple' // declare and initialize
fruit = 'Kiwi' // reassign / reinitialize
console.log(fruit) // Kiwi

let fruit = 'Banana'
console.log(fruit) // ! SyntaxError: Identifier 'fruit' has already been declared
// ? Hoisting gives "unintialized" value to let and cons,
// ? besides that, you cannot redeclare let nor cons

// const
const animal = 'dog' // declare and initialize
animal = 'cat' // ! TypeError: Assignment to constant variable.
// ? You cannot assign an already initialized constant variable since they are immutable. 
const animal = 'Snake' // ! Cannot redeclare block-scoped constant variable.

const vehicles = [] // ? Declaration and initialization is done: const name = []
vehicles.push('🚗') 
console.log(vehicles) // [ '🚗' ]
// * IMPORTANT TO UNDERSTAND THE FUNCTIONALITY OF THE <IMMUTABLE> CONCEPT.
vehicles.pop()
console.log(vehicles) // []
// ? Since the constant variable is already initialized as an array, you can run all of the arr methods normally.