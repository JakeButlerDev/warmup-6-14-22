// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// Examples
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"

// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"

hackerSpeak = (myString) => {
    var myHackerString = myString
    for (i=0; i < myString.length; i++) {
        if (myString[i] == 'a') {
            myHackerString[i] = '4'
        }
        else if (myString[i] == 'o') {
            myHackerString[i] = '0'
        }
        else if (myString[i] == 'i') {
            myHackerString[i] = '1'
        }
        else if (myString[i] == 'e') {
            myHackerString[i] = '3'
        }
    }
    return myHackerString
}

console.log(hackerSpeak("programming is fun"));