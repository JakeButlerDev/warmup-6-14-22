// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

// Examples
// makesTen(9, 10) ➞ true

// makesTen(9, 9) ➞ false

// makesTen(1, 9) ➞ true

makesTen = (a, b) => {  // Define function with params
    // Set conditional, if any of the tests match return true
    if (a + b == 10 || a == 10 || b == 10) {
        return true;
    }
    // Otherwise return false
    else return false
}
// Output to test functionality
console.log(makesTen(9, 9));