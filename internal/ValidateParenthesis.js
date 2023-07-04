// Write a parentheses, brackets, and braces validator. It should take in a String and consider the openers and closers that appear within it.

// Openers are '(', '[', '{'.

// Closers are ')', ']', '}'.

// Write an efficient function that determines if the input String's openers and closers are properly matched and nested.

// EXAMPLES:

// "{ [ ] ( ) }"     	    true
// "{ [ }" 	              false
// "{ [ ( ] ) }" 	        false
// "{ { { { { [ ( ] ) }" 	false
// "" 	                  true

const checkIfStackOfParensBalance = (str) => {
    // check if str is empty and return false 
    if (!str) return false;
    // create a stack to either push or pop elements to check if the balanced
    let stackOfBalances = [];

    // loop through the string
    for(let i = 0; i < str.length; i++) {
        // set a conditon to check if the current element is any of the parenthesis...push it if is
        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            stackOfBalances.push(str[i]);
            // else check if the current element is any of the closers and the top of the stack is its opener?.. pop it out of the stack
        } else if (str[i] === ")" && stackOfBalances[stackOfBalances.length-1] === "(") {
            stackOfBalances.pop();
        } else if (str[i] === "}" && stackOfBalances[stackOfBalances.length-1] === "{") {
            stackOfBalances.pop();
        } else if (str[i] === "]" && stackOfBalances[stackOfBalances.length-1] === "[") {
            stackOfBalances.pop();
            // else return false
        } else {
            return false;
        }
        
    }
    // check the length of the stack if its empty its balanced if not it will return false from the loop
    return !stackOfBalances.length;

};
console.log(checkIfStackOfParensBalance("")) // false
console.log(checkIfStackOfParensBalance("{[]()}")) // true
console.log(checkIfStackOfParensBalance("{[}")) // false
console.log(checkIfStackOfParensBalance("{[(])}")) // false
console.log(checkIfStackOfParensBalance("{{{{{[(])}" )) // false