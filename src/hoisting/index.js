console.log(nameOfDog) // ? undefined
var nameOfDog = 'Elmo'
console.log(nameOfDog) // ? ELmo

beefyDoggy() // ? El mejor perrito es undefined

function beefyDoggy() {
    console.log(`El mejor perrito es ${elmo}`)
}
var elmo = 'Elmito'

/**  How does hoisting work?
*? Hoisting saves js declared tokens in memory and assign them values before they are initialized and before code is running in a key : value format inside the pointable template called environment record or lexical context.
** function: Hoisting saves the name of the fn as key and all of the lines of the fn as value, REGULAR FUNCTIONS GET SAVED ON FOR HOISTING
** var: Hoisting saves the name of var as key and assign it the value of: 'undefined' (non-blocking)
** let: Hoisting saves the name of let as key and assign it the value of: 'uninitialized' (this throw an error)
** const: Hoisting saves the name of let as key and assign it the value of: 'uninitialized' (this throw an error)
*? Hosting is a bad practice, deprecated from ES6/ES2015. Stop depending on it, write good sorted code, depend as less as possible on vars & non-arrow functions. 
*/