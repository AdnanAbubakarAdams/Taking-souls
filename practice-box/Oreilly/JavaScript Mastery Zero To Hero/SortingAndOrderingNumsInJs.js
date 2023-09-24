
// Course Notes:
document.getElementById("lesson").innerHTML = `
The .sort() method sorts the elements in an array in an order and returns 
the sorted array.

The default sort order is ascending built upon converting the elements into strings
also comparing their UTF-16 code unitss into values

sort((a, b) => (a - b))
it does the following 
if(a < b by some criteria) {
  return - 1;
}
if (a > b by some criteria) {
  return 1;
} 
if (a === b by some criteria) {
  return 0;
}
`;

// Code Examples:



// Exercise
document.getElementById("exercise").innerHTML = `
The interviewer wants to see if you can go above and beyond and asks you to not only sort a
disordered array of numbers, but also insert any given number into the array in its correct
ordered position.
IE array
= [3,35,2,1] and num
= 4
script expected output: [1,2,3,4,35]
Prove your valour and show this interviewer what you're made of ;)
Before beginning, create a new array (numbersArray) under the
f
Exercise Solution section of the template with
the following numerical
values in the given order: numbersArray = [120,
420, 12, 3, 24]
1. Write a a function called sortAndorder which takes two arguments; an array and a number.
2. The function should sort ascendingly and evaluate any given array's numerica values
as well as insert in order any number into the array provided by the number argument of the
sortAndorder function.
3. Call and log the function sortAndOrder passing in the arguments the
numbersArray and the value 42.
4. Share you solution on the discord in the alogrithms channel and rejoice victorious!
`;
 
// Exercise Solution:
const sortAndOrder = (arr, num) => {
let sortedInOrder = [...arr];
sortedInOrder.push(num)
return sortedInOrder.sort((a, b) => a - b);
};
console.log('sorted:', sortAndOrder([3,35,2,1], 4));
console.log('sorted:', sortAndOrder([3,35,2,1], 42));
console.log('sorted:', sortAndOrder([120, 420, 12, 3, 24], 42));

function sortAndOrder2 (arr, num) {
arr.sort((a, b) => a - b);

for(let i = 0; i < arr.length; i++) {
  if (arr[i] >= num) {
    arr.splice(i, 0, num);
    break;
  } else {
    arr.push(num);
    break;
  }
}
return arr;
};
console.log('hisWay:',sortAndOrder2([3,35,2,1], 42))
console.log('hisWay:',sortAndOrder2([3,35,2,1], 4)) // buggy
console.log('hisWay:',sortAndOrder2([120, 420, 12, 3, 24], 42));

const sortAndOrder3 = (arr, num) => {
arr.concat(num).sort((a,b) => a - b);
return arr;
};
console.log('usingConcat:', sortAndOrder3([3,35,2,1], 42)) // buggy
console.log('usingConcat:', sortAndOrder3([3,35,2,1], 4)) // buggy
console.log('usingConcat:', sortAndOrder3([120, 420, 12, 3, 24], 42)) // buggy

