const myGlobal = 0

function myFunction () {
    const myNumber = 1
    console.log(myGlobal)

    function parent () { // Internal function (closure)
        const inner = 2
        console.log(myNumber, myGlobal)

        function child () { // Double internal function (double closure? xd)
            console.log(inner, myNumber, myGlobal)
        }
        return child()
    }
    return parent()
}

myFunction() // * WOOOW IT RAAAN
/** 
*? 0
*? 1 0
*? 2 1 0
*/

// ? The inner functions are the closures, since they have references to a higher scope JS token.
// * Clausuras (closure) son las funciones anidadas que recuerdan el conjunto de variables a las que podían acceder, por más que se las invoque desde otro lugar, desde otro scope.
// ? Contexto de ejecución: al crear un archivo .js también se crea un contexto de ejecución con su stock pile donde trabajará con FILO. Las primeras tareas en entrar serán: el objeto global, el pointer a la primera línea (Global:1), el objeto global window y el alias this. apuntando al objeto global window.
// ? Entorno léxico: Es un objeto que tienen los contextos de ejecución donde se almacenan los nombres de las variables que existen dentro de una función y los valores actuales que tienen; tiene formato key : value. 
// ? Environment record in english which is the local scope, in reality.
// ? In js, all functions, when created, have a fn.[environment] property. This [env] property is pointing to our environment record, which is our key : value table.
// ? Hoisting: Darle valores iniciales a las variables y cargar las funciones  en memoria justo antes de comenzar la ejecución de la función.
// ? CADA VEZ QUE SE EJECUTA UNA FUNCIÓN EN JAVASCRIPT, SE CREA UN NUEVO CONTEXTO DE EJECUCIÓN CON UN NUEVO ENTORNO LÉXICO

// ? Abusing from closures, you can create infinite functions from a solely one function XD all you need to do is to declare a const for each initialization you want on the function and each one is gonna assign different values for the same variables, it's like a multiverse.
// ? WTF HAVE I FOUND THE SOLUTION TO HEROKU? MY HOLY GRAIL? MY EUREKA? 


// ? API (de un objeto): La interfaz que tiene un objeto para interactuar con el mismo. Qué métodos podemos invocar sobre ese objeto y a qué propiedades internas nos permtie acceder.

/** 
 ** LAS CLAUSURAS TIENEN 2 MACRO FUNCIONALIDADES:
 ** PROTEGER EL ACCESO A VARIABLES
 ** FÁBRICA DE FUNCIONES
*/

// ? Crea un closure para sumar
function sumWithClosure(firstNum = 0) {
    let firstNum = 3 // ! Identifier 'firstNum' has already been declared
    // Tu código aquí 👈
    return function secondNum(secNum = 0) {
      return console.log(firstNum + secNum)
    }
} // * THIS CONFIRMS: PARAMETERS OF FUNCTIONS ARE BLOCK-SCOPE VARIABLES.

sumWithClosure(2)(3) // * 5
sumWithClosure(90)(0) // * 90
console.log(firstNum)
console.log(secNum)


let fm = 3
let fm = 4
console.log(fm) // ! SyntaxError: Identifier 'fm' has already been declared
const sd = 4
const sd = 3
console.log(sd) // ! SyntaxError: Identifier 'sd' has already been declared