function greeting() {
    let username = 'Oscar'

    return function displayUserName() {
        return `Hello ${username}!`
    }
}

const g = greeting() 
console.log(g) // * [Function: displayUserName]
console.log(g()) // * Hello Oscar!