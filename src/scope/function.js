function greeting() {
    let userName = 'Ana'
    console.log(userName)

    // === validates value and type ; == validates only value
    if (userName === 'Ana') console.log(`Hello ${userName}!`)
}

greeting() // Ana \n Hello Ana!
console.log(userName) // ! Error variable out of scope.