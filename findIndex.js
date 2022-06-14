findIndex = (searchFor, array) => {     // Define function with parameters
    // Begin conditional
    if (array.indexOf(searchFor) != -1) {
        // If array contains desired value, return index of where value is
        return array.indexOf(searchFor)
    } else {    // Else we did not find the value in the array, return -1
        return -1
    }
}
// Test output to check for functionality
console.log(findIndex(17, [17, 39, 4, 99, 2]));