
// Course Notes:
document.getElementById("lesson").innerHTML = `
Loops can execute a block of code a number of times

Loops are helpful in order to repeat the same cod over and over again and provide valuees each time
Often this is the case when worrking with arrays

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Create an algorithm using a for looop that can add the sum of 
natural numbers up to 50;
`;
 
// Exercise Solution:

const sumOfNaturalNumsUpTo50 = (n) => {
let sumOfNumbers = 0;

for (let i = 1; i <= n; i++) {
  sumOfNumbers += i;
}

return sumOfNumbers;
}
console.log("solution:", sumOfNaturalNumsUpTo50(50));

const sumOfNumbersTo50 = (n) => {
  let sum = 0;

  for(let i = n; i >= 1; i--) {
    sum += i
  }

  return sum
}
console.log("solution2:", sumOfNumbersTo50(50));
