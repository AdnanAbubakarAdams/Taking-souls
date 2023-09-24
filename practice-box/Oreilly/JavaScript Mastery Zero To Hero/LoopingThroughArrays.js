
// Course Notes:
document.getElementById("lesson").innerHTML = `
In JavaScript it can be quite useful to loop through each element in an array 
and do something with the data. Whether it's to search ffor data or mutate the array
javscript offers built-in methods for looping through arrays.

some of these methods include: map(), forEach(), every(),
but the most workable one is the for loop.
`;

// Code Examples:
const convertStringToArray = (words) => {
let splittedWords = words.split(" ");
let playersArr = [];

for (let i = 0; i < splittedWords.length; i++) {
playersArr.push(splittedWords[i])
}

return playersArr;
};
console.log('example1:', convertStringToArray('Rashford Antony Martial Mainoo Casemiro Amrabat Onana Garnacho Amad'))


// Exercises
document.getElementById("exercise").innerHTML = `
Exercise
- Chunking Arrays with Nested Loops
1. Copy the nested arrays
chunked from the video description into the Exercise Solution portion
of the IDE.
let chunked = [['a', 'b','c'], ['d','e','f'], ['g', 'h','i']];
2. Write a function called alphabet that
"unchunks'
elements in chunked into a single array.
the nested arrays and returns all the string
3. Log the result and share in the discord in the #datastructures channel.
`;
 
// Exercise Solution:
const alphabetThatUnchunks = (arr) => {
let allAlphabets = [];

for (let row = 0; row < arr.length; row++) {
  for (let column = 0; column < arr[row].length; column++) {
    allAlphabets.push(arr[row][column])
  }
}

return allAlphabets;
};
console.log('solution:', alphabetThatUnchunks([['a', 'b','c'], ['d','e','f'], ['g', 'h','i']]))
