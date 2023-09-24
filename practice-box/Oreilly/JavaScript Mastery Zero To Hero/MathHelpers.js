
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Build An Array Calculator
1. Create a calculator function calleg productAll which can calculate the product of the first
and last number in an array and all of its product numbers in between of the first and last
value.
2. The function should pass an argument as an array and return the product all of values.
IE arr: [1,4] = 24 & arr: [4,1] = 24
3. Call and log the productAll function passing in an array with the values [5, 2, 1]
4. Share your math skills with your solution in the discord!
`;
 
// Exercise Solution:
const productAll = arr => {
  let lastValue = arr.pop();
  let productSum = 1;
  let maxValue = Math.max(arr[0], lastValue);
  let minValue = Math.min(arr[0], lastValue);

  for (let i = minValue; i <= maxValue; i++) {
    productSum *= i;
  }

  return productSum;
};
console.log('exercise solution I:', productAll([5,2,1]))
console.log('exercise solution I:', productAll([1, 2, 2424, 5, 5]))
