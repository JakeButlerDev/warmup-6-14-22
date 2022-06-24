reverseTheNumber = (myInt) => {     // Create function and pass through argument
    // Declare array to store integer into
    let myIntArray = []
    // If integer is negative, let's make it positive
    if (myInt < 0) {
        myIntArray = myInt.toString().split("")
        // Shift off the negative sign from the array
        myIntArray.shift()
    }
    // If positive, continue with program
    myIntArray = myInt.toString().split("")
    // Initialize array for reversed integer
    let reversedIntArray = []
    // Store each element we loop through at the beginning of the new array
    for (i=0; i < myIntArray.length; i++) {
        reversedIntArray.unshift(myIntArray[i])
    }
    // Regroup array from its individual elements into one string
    reversedIntArray = reversedIntArray.join("")
    // Make this string a number again
    return parseInt(reversedIntArray)
}
// Test case
myInt = -122157
// Output for testing
console.log(myInt)
console.log(reverseTheNumber(myInt));