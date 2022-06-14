firstInArray = (array) => {
    // Test if array is comprised of only numbers
    for (i=0; i < array.length; i++) {
        if (array[i] == NaN) {
            console.log('Please enter a valid array! This function only accepts number arrays.');
        }
    }
    // Assign variable to desired index
    let firstIndex = array[0]
    // Return variable
    return firstIndex
}

myArray = [88900, 17, 21, 3, 10]
// Define test to determine functionality
let test = firstInArray(myArray)
// Output result to check
console.log(test);