
// Course Notes:
document.getElementById("lesson").innerHTML = `
Slice is a method which can copy an arrays data to a new storage without modifying the original array.

Slice can take two arguments: the first argument is the position to start copying
data and the second argument is where to stop copying data (up to and NOT including last index value)
`;

// Code Examples:
let trainingData = ['10,000 steps', '7 JavaScript Exercises', 'react videos']
let codingData = trainingData.slice(1,3);
console.log('example1:', trainingData, codingData)

// Exercise
document.getElementById("exercise").innerHTML = `
Exercise: Update Cryptocurrency Portfolio Data
=
1. Declare a function called cryptoPortfolio which returns the argument array of an array
2. Log out cryptoPortfolio into the console passing the following crypto data as strings:
'Bitcoin',
'Ethereum',
'Solana',
"Ada',
"Chainlink'
3. Within the crpyotPortfolio function, duplicate our user's
crypto portfolio of only the large caps (Bitcoin and Ethereum)
into a new array called newArray and modify the function so that it
returns the new array instead of the original one.
4. Share your solution in our discord in the #datastructures
`;
 
// Exercise Solution:
function cryptoPortfolio(arr) {
let newArray = arr.slice(0,2);
return newArray;
};
console.log('solution 1:', cryptoPortfolio(['Bitcoin', 'Ethereum', 'Solana', 'Ada', 'Chainlink']))
