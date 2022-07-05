// Write a function that validates whether two strings are identical. Make it case insensitive.

// Examples
// match("hello", "hELLo") ➞ true

// match("motive", "emotive") ➞ false

// match("venom", "VENOM") ➞ true

// match("mask", "mAskinG") ➞ false

// Define function, pass in parameters
stringMatch = (string1, string2) => {
    // Test conditional, use toLowerCase for case insensitivity
    if (string1.toLowerCase() == string2.toLowerCase())
    // If strings match, return true
        return true
        // Otherwise return false
    else return false
}
// Output to test functionality
console.log(stringMatch("motive", "emotive"));