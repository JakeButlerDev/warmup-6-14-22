// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Examples
// numberSyllables("buf-fet") ➞ 2

// numberSyllables("beau-ti-ful") ➞ 3

// numberSyllables("mon-u-men-tal") ➞ 4

// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

countSyllables = (myString) => {
    // Initialize variable with 1, we are counting with dashes which does not signal the first syllable
    let syllables = 1;
    // Loop through string
    for (i=0; i < myString.length; i++) {
        // Test conditional, if - is at current element
        if (myString[i] == '-'){
            // If so, increment syllable count
            syllables++
        }
    }
    // Return stored syllable count
    return syllables
}
// Output for functionality
console.log(countSyllables("mon-u-men-tal"));