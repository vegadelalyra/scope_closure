// ? Create a closure for saving pets data

function createPetList (list = []) { 
    return function newPet(name) {
        if (name == null) return console.log(...list)
        list.push(name)
        console.log(`Buddy ${name} added to our pet list! :D`)
    }
}

const myPetList = createPetList()
myPetList("michi") // ? Buddy michi added to our pet list! :D
myPetList("firulais") // ? Buddy firulais added to our pet list! :D
myPetList() // * michi firulais