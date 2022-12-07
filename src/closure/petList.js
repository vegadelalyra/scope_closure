// ? Create a closure for saving pets data

function createPetList (list = []) { 
    return function newPet(name) {
<<<<<<< HEAD
        if (name == null) return console.log(list.join(', '))
=======
        if (name == null) return console.log(...list)
>>>>>>> 98be3c8fd52a28f43e70c0feec6d1ddc521a82aa
        list.push(name)
        console.log(`Buddy ${name} added to our pet list! :D`)
    }
}

const myPetList = createPetList()
myPetList("michi") // ? Buddy michi added to our pet list! :D
myPetList("firulais") // ? Buddy firulais added to our pet list! :D
<<<<<<< HEAD
myPetList() // * michi, firulais
=======
myPetList() // * michi firulais
>>>>>>> 98be3c8fd52a28f43e70c0feec6d1ddc521a82aa
