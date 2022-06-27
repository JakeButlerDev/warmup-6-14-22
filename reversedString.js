reversedString = (myString) => {    // Define function with params
    myStringArr = myString.split('')    // Turn the passed in string into an array so we can manipulate elements
    let myReversedStringArr = myStringArr.reverse()     // Reverse the new array and store in another array
    myReversedString = myReversedStringArr.join('')     // Join each element together to recreate string
    return myReversedString     // Return result
}
// Check output, make sure we have returned a string data type
console.log(reversedString('Edabit is really helpful!'));
console.log(typeof(reversedString('Edabit is really helpful!')))