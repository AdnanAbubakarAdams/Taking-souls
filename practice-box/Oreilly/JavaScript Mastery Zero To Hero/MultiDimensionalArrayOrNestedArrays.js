
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Given the following multi-dimensional array:
const multiArray = [[234, 35, 2, 1], [53, 3, 6554, 4], [45, 632, 31, 566]]

1. Write a function smallestNumbers which takes the multiArray as an parameter and returns a new array containing only the smallest integers from each sub array.
2. Log out the function and pass the multiArray as an argument.

`;
 
// Exercise Solution:
const multiArray = [[234, 35, 2, 1], [53, 3, 6554, 4], [45, 632, 31, 566]];

const smallestNumbers = (arr) => {
  let minValuesFromSubArrays = [];

  for (let i = 0; i < arr.length; i++) {
      // console.log(...arr[i])
      minValuesFromSubArrays.push(Math.min(...arr[i]));
  }

  return minValuesFromSubArrays;
};
console.log('notAllnestedneedsdoubleLoop:',smallestNumbers(multiArray))