// * With this exercise we can evidence the value (and some of the potential) of closures.
/*
 // function moneyBox(coins) {
//     let saveCoins = 0
//     saveCoins += coins
//     console.log(`MoneyBox: ${saveCoins}`)
// }

// moneyBox(5) // 5
// moneyBox(5) // 5
*/

function moneyBox (saveCoins = 0) {
    return function countCoins(coins = 0) {
        saveCoins += coins
        console.log(`MoneyBox: $${saveCoins}`)
    }
}

const myMoneyBox = moneyBox()
myMoneyBox(5) // * $5
myMoneyBox(5) // * $10
myMoneyBox(15) // * $25

const moneyBoxAna = moneyBox()
moneyBoxAna(10) // * $10
moneyBoxAna(20) // * $30
moneyBoxAna(5) // * $35
// ? OMGGGGGGGGGGG THE CONSTS MAKES DIFFERENT INSTANCES ON THE FUNCTION AND THEN ON THE LET VARIABLE SAVECOINS WITH JUST ONE FUNCTION AAAAAAAAAAAAAAAAAAAAAAAAAAAA