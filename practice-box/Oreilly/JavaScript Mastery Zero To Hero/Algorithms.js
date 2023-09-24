
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Reverse a string
Exercise: How to reverse a string in Javascript
1. Write a function which takes the argument of a string and returns another string which holds
the reverse order of characters of the original string. 
2. Call the function in the console and test your solution with the argument
"The universe is amazing'
3. Share your solution in the discord channel #algorithms
`;
 
// Exercise Solution:
// Reverse A string
const reverseAString = (str) => {
let splittedStr = str.split("");
return splittedStr.reverse().join('');
};
console.log('reverseAString1:', reverseAString('The universe is amazing'));

// not fully working
const reverseStr = (str) => {
  let splitStr = str.split("");
  let leftPointer = 0;
  let rightPointer = splitStr.length - 1;
  let result = '';

  while(leftPointer < rightPointer ) {
    result += splitStr[leftPointer] = splitStr[rightPointer];

    // leftPointer++;
    rightPointer--;
  }

  return result;
};
console.log('reverseString2:', reverseStr('The universe is amazing'));

function reverseString3 (str) {
  let resultOfReverse = '';

  for (let i = str.length -1; i >= 0; i--) {
    resultOfReverse += str[i];
  }
  
  return resultOfReverse;
};
console.log('reverse3:', reverseString3('The universe is amazing'));
