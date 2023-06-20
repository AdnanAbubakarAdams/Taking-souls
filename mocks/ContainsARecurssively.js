// Write a recursive function that determines whether or not an input String contains the letter 'a'.

// EXAMPLES:

// "Hello, World!" -> false
// "abcd" -> true
// "DBCA" -> true
// "" -> false

const checkIfStrContainsA = (str) => {
    // check if str is empty return false;
    if (!str) return false;
    // check if the first char in str is equal to "a" return true || base case
    if (str[0].toLowerCase() === "a") return true;
    // else call the function again but this time slice characters at the beginning of the str
    return checkIfStrContainsA(str.slice(1));
};
console.log(checkIfStrContainsA("Hello, World!")) // false
console.log(checkIfStrContainsA("abcd")) // true
console.log(checkIfStrContainsA("DBCA")) // true
console.log(checkIfStrContainsA("")) // false