// link slider with the number input

const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const form = document.getElementById("passwordForm")
const includeUppercaseElement = document.getElementById("includeUpperCase")
const includeLowerCaseElement = document.getElementById("includeLowerCase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const passwordDisplay = document.getElementById("passwordDisplay")

const upperCaseChar = arr(65,90)
const lowerCaseChar = arr(97,122)
const numbersChar = arr(48,57)
const symbolChar = arr(33,47).concat(
    arr(58,64)).concat(
        arr(91,96)).concat(
            arr(123,126)
        )

// number range and amount is linked together
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
    // target.value: gives you the element that triggered the event
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}

form.addEventListener("submit", e => {
    e.preventDefault()
    // stop the form from refreshing
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowerCaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked

    //final step
    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)

    passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    //code for generating password by using character codes aka ASCII characters
    // String.fromCharCode(65)
    // console.log(lowerCaseChar)


    // create overall list of all charCodes and loop through all of them
    let charCodes = lowerCaseChar
    if(includeUppercase) charCodes = charCodes.concat(upperCaseChar)
    if(includeNumbers) charCodes = charCodes.concat(numbersChar)
    if(includeSymbols) charCodes = charCodes.concat(symbolChar)
    
    // loop
    const passwordCharacters = []
    for(let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random()* charCodes.length)]
        // String.fromCharCode to change the charCodes to actual letters/symbols
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join("")
}

// create function that generates arrays for the charCodes
function arr(low, high) {
    const array = [];
    for(let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}


