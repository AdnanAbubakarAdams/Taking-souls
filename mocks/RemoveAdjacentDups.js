// Given a string str, a duplicate removal consists of choosing two adjacent and equal letters, and removing them.

// We repeatedly make duplicate removals on S until we no longer can.

// Return the final string after all such duplicate removals have been made. It is guaranteed the answer is unique.

// EXAMPLES:

// "bookkeeper" -> "bper"
// "abbaca" -> "ca"
// "abcdefggfedcba" -> ""

const removeAdjacentDups = (str) => {
    // declare a stack to store str's 
    let charStack = [];

    // loop throgh the str 
    for (let i = 0; i < str.length; i++) {
        // if currentEle === last element in the stack
        if (str[i] === charStack[charStack.length-1]) {
            // remove it or pop it out of the stack
            charStack.pop();
            // else push the current element
        } else {
            charStack.push(str[i]);
        }
    }
    // join or convert the stack into a string and return it
    return charStack.join("");
};
console.log(removeAdjacentDups("bookkeeper")) // bper
console.log(removeAdjacentDups("abbaca")) // ca
console.log(removeAdjacentDups("abcdefggfedcba")) // ""