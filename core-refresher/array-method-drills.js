const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
  "adnana", 
  "i"
];

// The first question is for the numbers array. The second question is for the words array.

// EVERY-------------
// 1. Determine if every number is greater than or equal to 2
const checkIfEachNumIsGreaterOrEqualTo2 = () => {
    return nums.every((element) => element >= 2 ? true : false);
}
// console.log(checkIfEachNumIsGreaterOrEqualTo2());

// 2. determine if every word shorter than 7 characters
const checkIfEveryWordIsShorterThan7Chars = () => {
    return panagram.every((element) => element.length < 7 ? true : false);
}
// console.log(checkIfEveryWordIsShorterThan7Chars());

// FILTER------------
// 1. filter the array for numbers less than 5
const getNumsLessThan5 = () => {
    return nums.filter((element) => element < 5);
}
// console.log(getNumsLessThan5());

// 2. filter words that have an odd length
const getWordsWithOddLength = () => {
    return panagram.filter((element) => element.length % 2 != 0);
}
// console.log(getWordsWithOddLength());

// FIND-----------
// 1. Find the first value divisible by 4
const getFirstValueDivisibleBy4 = () => {
    return nums.find((element) => element % 4 === 0);
}
// console.log(getFirstValueDivisibleBy4());

// 2. find the first word that is longer than 4 characters
const getWordsLongerThan4Chars = () => {
    return panagram.find((element) => element.length > 4)
}
// console.log(getWordsLongerThan4Chars());

// FOR EACH------------
// 1. console.log each value of the nums array multiplied by 3
const multiplyEachElementby3 = () => {
    console.log(nums.forEach((element) => element * 3));
    // return nums.forEach((element) => element * 3);
}
multiplyEachElementby3();
// console.log(multiplyEachElementby3())

// 2. console.log each word with an exclamation point at the end of it
const printEachWordWithExclamationMark = () => {
    console.log(panagram.forEach((word) => word + "!"));
}
printEachWordWithExclamationMark();

// MAP-----------
// 1. Make a new array of each number squared and then multiplied by their index number
const squareEachNumberAndMultiplyByIndex = () => {
    return nums.map((element, index) => element ** 2 * index);
}
// console.log(squareEachNumberAndMultiplyByIndex());

// 2. Make a new array of all the words in all uppercase
const capitalizeAllWordsInArray = () => {
    return panagram.map((words) => words.toUpperCase());
}
// console.log(capitalizeAllWordsInArray());

// SOME--------
// 1. Find out if some numbers are divisible by 7
const getSomeNumbersDivisibleBy7 = () => {
    return nums.some((element) => element % 7 === 0);
}
// console.log(getSomeNumbersDivisibleBy7());

// 2. Find out if some words have the letter a in them
const checkIfWordContainA = () => {
    return panagram.some((element) => element.includes("a"));
}
// console.log(checkIfWordContainA())

// REDUCE---------
// 1. Add all the numbers in the array together using the reduce method
const addAllNumbersInArray = () => {
    return nums.reduce((a, b) => a + b, 0);
}
// console.log(addAllNumbersInArray());

// 2. concatenate all the words using reduce
const combineAllWords = () => {
    return panagram.reduce((words, joiner) => words + " " + joiner)
}
// console.log(combineAllWords())

// SORT----------
// 1. Try to sort without any arguments, do you get what you'd expect with the numbers array?
const sortWithoutArgs = () => {
    return nums.sort();
}
// console.log(sortWithoutArgs())

// 2. Try to sort without any arguments, do you get what you'd expect with the words array?
const sortWordsWithoutArgs = () => {
    return panagram.sort();
}
// console.log(sortWordsWithoutArgs())

// 3 Sort the numbers in ascending order
const sortNumbersInAscendingOrder = () => {
    return nums.sort((a, b) => a - b);
}
// console.log(sortNumbersInAscendingOrder());

// 4. Sort the numbers in descending order
const sortNumbersInDecendiingOrder = () => {
    return nums.sort((a, b) => b - a);
}
// console.log(sortNumbersInDecendiingOrder());

// 5. Sort the words in ascending order
const sortWordsInAscedingOrder = () => {
    return panagram.sort((a, b) => a - b);
}
// console.log(sortWordsInAscedingOrder());

// 6. Sort the words in descending order
const sortWordsInDescendingOrder = () => {
    return panagram.sort((a, b) => b - a);
}
// console.log(sortWordsInDescendingOrder());

// FINDINDEX---------
// 1. find the index of the first number that is divisible by 3
const findIndexOfFirstNumDivisibleBy3 = () => {
    return nums.findIndex(num => num % 3 === 0);
}
console.log(findIndexOfFirstNumDivisibleBy3());

// 2. find the index of the first word that is less than 2 characters long
const findIndexOfFirstWordLessThanTwoChars = () => {
    return panagram.findIndex((word) => word.length < 2);
}
console.log(findIndexOfFirstWordLessThanTwoChars())