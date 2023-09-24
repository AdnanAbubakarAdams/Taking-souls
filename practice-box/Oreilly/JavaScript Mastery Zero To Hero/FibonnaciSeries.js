
// Course Notes:
document.getElementById("lesson").innerHTML = `
The Fibonnaci series is a magical series of numbers in which each number
(fibonnaci number) is the sum of the two proceeding numbers

basic whole integers fib => 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55....

the golden ratio- describes predictable patterns on everything from atoms 
to huge stars in the sky! the golden ratio is derived from the fibonnaci
sequence. 

The fibonnaci equation 
F(n) = F(n - 1) + F(n - 2);
Fib: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Fn(0) = 0, Fn(1) = 1, Fn(2) = 1, Fn(3) = 2, Fn(5) = 5, Fn(10) = 55
`;

// Code Examples:
// Recursion is when a function calls itself until something stops it
// Recursive Fibonnaci solution

const fibonnaciRecursive = (num) => {
  if(num === 0) return 0;
  if (num <= 1) return num;

  return fibonnaciRecursive(num - 1) + fibonnaciRecursive(num - 2)
}
console.log('firstTryOfFibonnaci:', fibonnaciRecursive(10));

const fibonnaciLoop = num => {
  let currentNum = 1; 
  let fibonnaciNums = 0; 
  let temp;

  if(num === 0) return 0;
  while(num > 0) {
    temp = currentNum;
    currentNum += fibonnaciNums;
    fibonnaciNums = temp;
    num --;
  }

  return fibonnaciNums
};
console.log('fibwithLooping', fibonnaciLoop(10))
console.log('fibwithLooping', fibonnaciLoop(4))
// Exercise
document.getElementById("exercise").innerHTML = `

`;
 
// Exercise Solution:
const fibonnaciSum = num => {
  let currentNum = 1; 
  let fibonnaciNums = 0; 
  let temp;
  let sumOfFibonnaciSequence = 0;

  if(num === 0) return 0;
  while(num > 0) {
    temp = currentNum;
    currentNum += fibonnaciNums;
    fibonnaciNums = temp;
    sumOfFibonnaciSequence += fibonnaciNums
    num --;
  }

  return sumOfFibonnaciSequence;
};
console.log('sumOfFibNumbers', fibonnaciSum(5))
