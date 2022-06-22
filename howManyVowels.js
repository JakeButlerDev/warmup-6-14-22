howManyVowels = (myString) => {     // Create function, passing string through as argument
    // Initialize variable to count vowels, begin at 0
    var vowelCount = 0
    // Loop through string 
    for (i=0; i < myString.length; i++) {
        // While looping through string, if character is a vowel then increment vowel count variable
        if (myString[i] == 'a' || myString[i] == 'e' || myString[i] == 'i' || myString[i] == 'o' || myString[i] == 'u') {
            vowelCount++
        }
    }
    // Return result
    return vowelCount
}
// Test output for functionality
console.log(howManyVowels('Mississippi'))