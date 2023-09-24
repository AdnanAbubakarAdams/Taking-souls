import './styles.css'

// Course Notes:
document.getElementById("lesson").innerHTML = `
Data Structure - Fundamntals!

Arrays store colleectios of data. One dimensional arrays have one level (nests).
Arrays in Javascript can contain multiple types: booleans, integers, strings etc

the length property returns the number off element within an array.

Arrays can get much more complex
these are what we call multi-dimensional arrays (arrays that contain other arrays). arrays can even contain complex objects

`;

// Code Examples
let oneDimensionalArray = [true, "fish", 35];

let multiDimensionalArray = [
  [
    {
      ghana: "Ghana",
      usa: "United States Of America"
    }, 
    {
      hot: true,
      cold: false,
    }
  ],
  [
    {
      nigeria: "Nigeria",
      canada: "Canada"
    }, 
    {
      hot: true,
      cold: false,
    }
  ]
];

console.log(oneDimensionalArray.length)
console.log(multiDimensionalArray.length)

// Exercise
document.getElementById("exercise").innerHTML = `
1. Write a function called dragonBallZ which takes an array parameter and returns the array
2. Log the results of the dragonBallZ function passing into the argument the string 'Bulma' into the array
3. Back in the function dragonBallZ, modify the array with the push and unshift methods
Add to the beginning of the array the strings San Goku and Piccalo, and add to the end of the 
array the string Vegeta.
4. Write Kamehameha in the discord to celebrate you victory after succesffully completing the take

`;

// Excersise solution
const dragonBallZ = (arr = []) => {
arr.unshift('San', 'Goku', 'Piccalo');
arr.push('Vegeta')

return arr

}
console.log('solution:', dragonBallZ(['Bulma']))


// Exercise
document.getElementById("exercise").innerHTML = `
1. Write a function called eBooks which takes an argument array.
2. Log eBooks in the console and pass  into the array the following books as strings:
Lord Of The Rings, Infinite Jest, Javascript, The Good Parts
3. Within the eBooks function, using the pop and shift methods, modiffy the array so that it 
reomoves only the infinite jest book.


`;
// Exercise Solution
function eBooks(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  let popped2 = arr.pop();
  arr.pop()

  arr.push(shifted, popped2, popped)
  return arr
}
console.log('solution for books:', eBooks(['Lord Of The Rings', 'Infinite Jest', 'Javascript', 'The Good Parts']))

