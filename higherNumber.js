existsHigher = (arr, n) => {    // Create function, pass through arguments
    // Initialize result as false unless proven otherwise (helps with empty array issues)
    var result = false
    // Loop through array
    for (i=0; i < arr.length; i++) {
        // Create conditional, if element is equal to or larger than given number then set result to true
        if (arr[i] >= n) {
            // Breaks out of loop by falsifying loop's conditional
            i = arr.length
            result = true
        }
        // Unless proven true, result is false
        else result = false
    }
    // Return result
    return result
}
// Use test cases to determine desired output
myArray = []

console.log(existsHigher(myArray, 5));