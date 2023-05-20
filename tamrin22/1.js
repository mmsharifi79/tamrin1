function countChars(string) {
    let charCounts = {};
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char in charCounts) {
            charCounts[char] += 1;
        } else {
            charCounts[char] = 1;
        }
    }
    return charCounts;
}
let myString = "Hello, World!";
console.log(countChars(myString));