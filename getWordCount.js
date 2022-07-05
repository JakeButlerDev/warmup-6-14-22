getWordCount = (myString) => {  // Create function, pass in parameter
    // Initialize variable used to increment with each space counted
    let wordCount = 1
    // Loop through passed in string
    for (i=0;i < myString.length; i++) {
        // Create conditional, if empty space we know(hope) another word will be after
        if (myString[i] === ' ') {
            // Increment variable if space is encountered
            wordCount++
        }
    }
    // Return result
    return wordCount
}
// Used to test functionality
console.log(getWordCount('We love New York.'));