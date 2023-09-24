
// Course Notes:
document.getElementById("lesson").innerHTML = `
The difference between anagram and a palindrome is: an anagram is (of words) or a word or a 
phrase that is created by rearranging the letters of another word or phrase while a 
palindrome is a word, phrase, number or any other sequence of units which has the property
of reading the same forwards as it does reading backwards, character for character
sometimes diregarding puntuation, capitalization, and diacritics(special symbols)

`;

// Code Examples:
// Interview Question
// - Check if a string is a Palindrome
// 1. Write a function called palindrome that takes a string as a parameter
// that returns true if a word is a palindrome and false if a word is not a
// palindrome.
// 2. NOTE that any non-alphanumeric characters (including the underscore) should
// be disregarded (for example: ./[[]] should be disregarded).
// 3. Log and call the function twice passing in the following strings:
// "// [_t
// o t_]" expected output: true
// " map" expected output: false
// I
// 4. Share your solution in the discord and good luck!


// Exercise
document.getElementById("exercise").innerHTML = `
Interview Question
- Check if a string is a Palindrome
1. Write a function called palindrome that takes a string as a parameter
that returns true if a word is a palindrome and false if a word is not a
palindrome.
2. NOTE that any non-alphanumeric characters (including the underscore) should
be disregarded (for example: ./[[]] should be disregarded).
3. Log and call the function twice passing in the following strings:
"// [_t o t_]" expected output: true
" map" expected output: false
I
4. Share your solution in the discord and good luck!
`;
 
// Exercise Solution:
const palindrome = (str) => {
  // \W = [0-9a-zA-Z_]
let arr1 = str.replace(/[^0-9a-z]/gi,'').toLowerCase().split("");
let arr2 = str.replace(/[^0-9a-z]/gi,'').toLowerCase().split("").reverse();

let joinedStr1 = arr1.join('');
let joinedStr2 = arr2.join('');

if (joinedStr1 === joinedStr2) {
  return true;
}

return false;
};
console.log('exampleI', palindrome("// [_to t_]"))
console.log('exampleII', palindrome(" map"))
