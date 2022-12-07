'use strict' // ? Turns JS into a strong typed language: You first must declare the type before initialize a value.
// ? 'use strict' only works if you place it at the first line of your js archive or at the first line of your block
var pi // undefined
pi = 3.1416
console.log(pi) // 3.1416
// * Code above worked since we first declared and then initialized. Conditions covered.
ma = 123
console.log(ma) // ! ReferenceError: ma is not defined

function myFunction() {
    'use strict'
    return pi = 3.1416
}
// ? 'use strict' only works if you place it at the first line of your js archive or at the first line of your block
console.log(myFunction()) // ! ReferenceError: pi is not defined