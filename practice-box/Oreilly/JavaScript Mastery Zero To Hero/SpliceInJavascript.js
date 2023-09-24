
// Course Notes:
document.getElementById("lesson").innerHTML = `
Splice in javascript can remove any number of items from an array consecutively
given a starting input which we define.

splice takes three arguments:
1. The first argument is for selecting the starting position of where 
we want to remove elements 
2. The second argument denotes how many items will be consecutively deleted from the 
starting position.
3. The third argument of the splice method allows you to swap out the elements you are removing
with new elements at the position that you set


Splice can also be used to create a new copy of the array with the removed item
`;

// Code Examples:
let colorsArray = ['white', 'green', 'brown', 'black'];
colorsArray.splice(2,2)
console.log(colorsArray);

let numsArray = [1,2,3,4,5]
let copyOfArr = numsArray.splice(2,2);
console.log(copyOfArr);
console.log(numsArray);

// swapping new elements
let fixMe = ['this', 'sentence', 'broken', 'pie', 'now'];
fixMe.splice(2,2, 'is', 'fixed')
console.log("example: ", fixMe)


// Exercise
document.getElementById("exercise").innerHTML = `

- Use Splice to decode the puzzle
OBJ: You work for the CIA and your job is to decode an unusual communicaiton of stringst
with a hidden message using the splice method. The final sentence should only contain
the following indexed values of the INITIAL strings in the given array: 2,3,5,6,7
1. Initialize an array called jumbled with the following strings consecutively:
"unlock'. 'hidden'.
"the', 'cat', 'messages'
" jumped'
'over'. 'the moon'
2. You can only use the splice method to selectively decode and return the final message
logged in the console.
BONUS Return the deleted items to a new variable called CIAConfidential and share both
confidential decoded logs in the discord.
Good luck saving the world!

2.
Exercise Update User Names with splice
1. Declare the function updateUserNames which takes an array as an argument and return
the array.
2. Log to the console updateUserNames and append the following string literal names
to the array:
"Thomas'
"Suzie', 'Jessica', 'Jonny'
3. Back in the updaetUserNames function, update the user names of the array by replacing
"Suzie'
with the new user
"Bob' using the splice method.
4. Dub yourself victorious,

`;
 
// Exercise Solution:
const jumbled = ['unlock', 'hidden', 'the', 'cat', 'messages', 'jumped', 'over', 'the moon']
let firstSplice = jumbled.splice(0,2);
// console.log(firstSplice)
console.log(jumbled)
let secondSplice = jumbled.splice(2,1);
let CIAConfidential = firstSplice.concat(secondSplice);
console.log('solution for both logs:', jumbled, CIAConfidential)

const updateUserNames = (arr) => {
  arr.splice(1,1, 'Bob');
return arr;
}
console.log('solution for updateUserNames:', updateUserNames(['Thomas', 'Suzie', 'Jessica', 'Jonny']))



