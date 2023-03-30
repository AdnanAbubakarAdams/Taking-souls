// ODD - EVEN STRING SORT
function sortMyString(S) {
  // your code here
  let even = S.split("")
    .filter((letter, i) => i % 2 === 0)
    .join("");
  let odd = S.split("")
    .filter((letter, i) => i % 2 !== 0)
    .join("");
  return even + " " + odd;
}

// MAXIMUM MULTIPLE 7KATA CODE WARS
function maxMultiple(divisor, bound) {
  //your code here
  let N = bound % divisor;
  return bound - N;
}

// CREATE PHONE NUMBER FORMAT
function createPhoneNumber(numbers) {
  let phoneNumFormat = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumFormat = phoneNumFormat.replace("x", numbers[i]);
  }

  return phoneNumFormat;
}

// STOP gninnipS My sdroW!
function spinWords(string) {
  //TODO Have fun :)
  return string.length >= 5
    ? string
        .split(" ")
        .map((letter) =>
          letter.length >= 5 ? letter.split("").reverse().join("") : letter
        )
        .join(" ")
    : string;
}

// FILTER OUT THE GEESE
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((bird) => !geese.includes(bird));
}

// ENUMERABLE MAGIC TRUE FOR ALL

function all(arr, fun) {
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

  // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

  // return arr.some(fun)
  return arr.every(fun);
}

// ENUMERABLE MAGIC TRUE FOR NONE ?
function none(arr, fun) {
  // ...
  //   console.log(arr, fun)
  //   for(let i = 0; i < arr.length; i++){
  //     if(fun(arr[i])){
  //       return false;
  //     }
  //     return true;
  //   }
  return !arr.some(fun);
}

// allWords.map(item => item.split("").reverse().join("")).join(" ")

// REVERSE EVERY OTHER WORD IN THE STRING
function reverse(str) {
  //WRITE SOME MAGIC
  // spliting string into an array
  // reverse every other word
  // take out all whitespaces
  console.log(str);
  //   return str.split(" ").map((word, i) => word[i] % 2 !== 0 ? word[i].split("").reverse().join("") : word[i]).join("");
  //   console.log(newStr)
  if (str.trim().length < 1) {
    return "";
  }
  return str
    .split(" ")
    .map((word, i) => {
      if (i % 2 !== 0) {
        return word.split("").reverse().join("");
      } else {
        return word;
      }
    })
    .join(" ");
}

// MAGIC INDEX
// return the magic index
function findMagic(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      return i;
    }
  }
  return -1;
}

// COMBINE OBJECTS
function combine() {
  // Your code here
  let arrOfObj = [...arguments];
  let newObj = {};
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (!newObj[key]) {
        newObj[key] = arguments[i][key];
      } else {
        newObj[key] += arguments[i][key];
      }
    }
  }
  return newObj;
}

// JAVASCRIPT ARRAY FILTER
function getEvenNumbers(numbersArray) {
  // filter out the odd numbers
  return numbersArray.filter((arr) => arr % 2 === 0);
}

// SORT NUMBERS
function solution(nums) {
  if (nums) {
    return nums.sort((a, b) => a - b);
  } else if (nums === null) {
    return [];
  }
}

// DICTIONARY FROM TWO LIST
function createDict(keys, values) {
  // ...
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = values[i] != undefined ? values[i] : null;
  }
  return newObj;

  //     var result = {};
  // for(var i = 0; i < keys.length; i++) {
  //   if(values[i]==undefined)
  //     result[keys[i]] = null;
  //   else
  //     result[keys[i]] = values[i];
  // }
  // return result;
}

// DISEMVOWEL TROLLS
function disemvowel(str) {
  return str.replace(/[aieou]/gi, "");
}

// NUMBERS TO OBJECTS
function numObj(s) {
  //   console.log(s)
  let newArr = [];
  for (let num of s) {
    let numsCount = {};
    if (!numsCount[num]) {
      numsCount[num] = String.fromCharCode(num);
      //       console.log(numsCount)
      newArr.push(numsCount);
    }
  }
  return newArr;
  // return s.map(n => {
  // return { [n]: String.fromCharCode(n) };
  // });
}

// ESPECIALLY JOYFUL NUMBERS
function numberJoy(n) {
  // your code

  let sum = n
    .toString()
    .split("")
    .reduce((a, b) => Number(a) + Number(b), 0);
  //   console.log(newN)
  let reversed = sum.toString().split("").reverse().join("");
  //   console.log(reversed)
  let product = sum * reversed;
  //   console.log(product)
  return product === n ? true : false;
}

// LINKED LIST - PUSH & BUILDONETWOTHREE
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function push(head, data) {
  const newNode = new Node(data);
  newNode.next = head;
  return newNode;
}

function buildOneTwoThree() {
  var chained = null;
  chained = push(chained, 3);
  chained = push(chained, 2);
  chained = push(chained, 1);
  return chained;
}

// No Loops 1 - Small enough?
function smallEnough(a, limit) {
  return a.every((x) => x <= limit) ? true : false;
}

// HURRY UP THE WALLS ARE CLOSING IN!
function canEscape(walls) {
  // TODO: your code ..
  console.log(walls);
  for (let i = 0; i < walls.length; i++) {
    console.log(walls[i]);
    if (Math.min(...walls[i]) - i < 2) {
      return false;
    }
  }
  return true;
}

// SHORTEST WORDS
function findShort(s) {
  console.log(s);
  let words = s.split(" ");
  let shortest = words.reduce((a, b) => (a.length <= b.length ? a : b));
  return shortest.length;
}

// HEX  HASH SUM
function hexHash(code) {
  //magic
  console.log(code);
  let convert = code
    .replace(/./g, (con) => con.charCodeAt().toString(16))
    //   console.log(convert)
    .replace(/\D/g, "")
    .split("")
    //   console.log(convert)
    .reduce((a, b) => Number(a) + Number(b), 0);
  //   console.log(convert)
  return convert;
}

// PREVIOUS  MULTIPLE OF THREE
const prevMultOfThree = (n) => {
  //   n % 3 === 0 &&  n > 0 ? return n :  n = Math.floor(n / 10) : null;

  while (n > 0) {
    if (n % 3 === 0) return n;
    //    let lastDigit = n % 10
    //    if(lastDigit % 3 === 0) return lastDigit
    n = Math.floor(n / 10);
  }
  return null;
};

// CATS AND SHELVES
function solution(start, finish) {
  let diff = finish - start;
  console.log(start, finish, diff);
  return Math.floor(diff / 3) + (diff % 3);
}

// BALL AND CUPS
function cupAndBalls(b, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] === b) {
      b = arr[i][0];
    } else if (arr[i][0] === b) {
      b = arr[i][1];
    }
  }
  return b;
  // arr.reduce((b, [x, y]) => x == b ? y : y == b ? x : b, b)
}

// PERPENDICULAR LINES
function maxBisectors(n) {
  if (n <= 1) return 0;
  return Math.floor(n ** 2 / 4);
}

// DEUTSCHTUNDE
function derDieDas(wort) {
  //Du kannst es schaffen!
  console.log(wort);
  let vowels = "aeiouäöü";
  let counter = 0;
  for (let word of wort) {
    if (vowels.includes(word.toLowerCase())) {
      counter += 1;
      //       console.log(word, word, counter)
    }
  }
  if (counter < 2) {
    return `das ${wort}`;
  } else if (counter <= 3) {
    return `die ${wort}`;
  }
  return `der ${wort}`;
}

// WALKING IN THE HALL WAY
function contact(hallway) {
  //  console.log(hallway);
  let steps = hallway.match(/>-*</g);
  return steps
    ? Math.floor(Math.min(...steps.map((step) => step.length)) / 2)
    : -1;
}

// ISOGRAMS
function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// FIND THE STRAY NUMBER
function stray(numbers) {
  //   console.log(numbers)
  let newNum = numbers.sort();
  if (newNum[0] != newNum[1]) {
    return newNum[0];
  }
  return newNum[newNum.length - 1];
}

// ANAGRAM DETECTION
// write the function isAnagram
var isAnagram = function (test, original) {
  let first = test.toLowerCase().split("").sort().join();
  let second = original.toLowerCase().split("").sort().join();
  console.log(first, second);
  return first === second ? true : false;
};

// BEGINNER SERIES #3 SUM OF NUMBERS
function getSum(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  return ((max - min + 1) * (max + min)) / 2;
}

// LIST FILTERING
function filter_list(l) {
  // Return a new array with the strings filtered out
  let filteredArray = [];
  for (let i = 0; i < l.length; i++) {
    if (Number.isInteger(l[i])) {
      filteredArray.push(l[i]);
    }
  }
  return filteredArray;
  // l.filter(n => typeof n === "number")
}

// JADEN CASING STRINGS
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((sentence) => sentence[0].toUpperCase() + sentence.slice(1))
    .join(" ");
};

// Ordered Count of Characters
function orderedCount(text) {
  // create a new array to push the small array of elements
  let countedArr = [];
  // loop through the given string
  for (let i = 0; i < text.length; i++) {
    // create a count variable
    let count = 0;
    // a nested loop to go through the new array
    for (let j = 0; j < countedArr.length; j++) {
      // conditional checking if letter exists if not increase the count
      if (countedArr[j][0] === text[i]) {
        // increase count
        count++;
      }
    }
    if (count === 0) {
      for (let j = i; j < text.length; j++) {
        if (text[j] === text[i]) {
          count++;
        }
      }
      countedArr.push([text[i], count]);
    }
  }
  return countedArr;
}

// MinMinMax
function minMinMax(array) {
  // solution goes here!
  //   console.log(array)
  let smallestInArray = Math.min(...array);
  let largestInArray = Math.max(...array);
  let minimumNotInArray = 0;
  console.log(smallestInArray, largestInArray);
  for (let i = smallestInArray; i <= largestInArray; i++) {
    if (!array.includes(i)) {
      minimumNotInArray = i;
      break;
    }
  }
  return [smallestInArray, minimumNotInArray, largestInArray];
}

// ReplaceAll(input, find, replace)
function replaceAll(input, find, replace) {
  // take care of the condition where theres no input
  if (!input && !find) return replace;

  if (!find) return replace + input.split("").join(replace) + replace;

  let str = "";
  //   console.log(input, find, replace)
  /// loop through each character of input
  for (let i = 0; i < input.length; i++) {
    // does inpput from i to i + find.length == find ?
    if (input.slice(i, i + find.length) == find) {
      // add replace to the str
      str += replace;
      // increment i by find.length -1;
      i += find.length - 1;
    } else {
      // add character[i] to str
      str += input[i];
    }
  }
  return str;
  // let arr = input.split(find);
  // if (find.length === 0) {
  //   arr.unshift('');
  //   arr.push('');
  // }
  // return arr.join(rep)
}

// STRANGE MATHEMATICS
function strangeMath(n, k) {
  // const arr = [0]

  // for(let i = 1; i <= n; i++) {
  //   arr.push(i)
  // }
  // return arr.sort().indexOf(k);
  // create an empty array
  let arr = [];
  // fill the array with 1 through n
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // order the new arr lexographically
  arr.sort();
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // each time checking if the number is equal to k, if so return the position + 1
    if (arr[i] === k) {
      return i + 1;
    }
  }
  return k;
}

// FACTORIAL FACTORY
function factorial(n) {
  if (n < 0) return null;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// RECURSION#1 => FACTORIAL
const factorial = (n) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// RECURSIVE REPLICATION
function replicate(times, number) {
  // your solution here
  const arr = [];
  if (times <= 0) {
    return arr;
  } else {
    return [number].concat(replicate(times - 1, number));
  }
}

// RECURSION#2 FIBONACCI
const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Sum ALL the arrays!
function arraySum(arr) {
  // sum ALL the things!
  return arr.flat().reduce((a, b) => a + b, 0);
}

// Sum ALL the arrays!
function sumNumbersInArray(arr) {
  let total = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      total += sumNumbersInArray(item);
    } else if (typeof item === "number") {
      total += item;
    }
  }
  return total;
}

// Sum ALL the arrays!
function arraySum(arr) {
  // sum ALL the things!
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arraySum(arr[i]);
    } else if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}

//SUM OF INTEGERS IN STRING
function sumOfIntegersInString(s) {
  return (
    s
      // splitting using regex to split at each instance not a number
      .split(/([^0-9])/g)
      // mapping through the array and converting each element to number
      .map((x) => parseInt(x))
      // filtering every element that is not a number or return falsy value
      .filter(Boolean)
      // using reduce to sum up  all the numbers in the array
      .reduce((a, b) => a + b, 0)
  );
}

// COLLATZ CONJUCTURE LENGTH
function collatz(n) {
  // set a counter variable and equal it to 1
  let results = 1;
  // create a while loop to keep repeating an action till n hits 1
  while (n > 1) {
    // increase the counter
    results++;
    // set a condition to check for when n is even and also when n is odd
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
  }
  // return your counter which will be the length of the collatz
  return results;
}

// SNAIL CRAWLS UP
function snail(column, day, night) {
  let totalDays = 1;
  let distanceCovered = day;
  while (distanceCovered < column) {
    totalDays++;
    distanceCovered += day - night;
  }
  return totalDays;
  //   return Math.ceil((column - night) / (day - night))
}

// UNSCRUMBLED EGG
function unscrambleEggs(word) {
  //coding is feggunegg
  return word.replace(/egg/g, "");
}

// REMOVE CONSECUTIVE DUPLICATE WORDS
const removeConsecutiveDuplicates = (s) => {
  // your perfect code...
  // split the string into in array
  let splitted = s.split(" ");
  console.log(splitted);

  let stack = [];
  for (let i = 0; i < splitted.length; i++) {
    if (splitted[i + 1] === splitted[i]) {
      continue;
    } else {
      stack.push(splitted[i]);
    }
  }
  return stack.join(" ");
};

// SIMPLE REMOVE DUPLICATES
function solve(arr) {
  // create a new Arr
  const lastOccurranceOfElements = [];
  const seenOccurranceOfElements = {};

  // loop through the array from backwards
  for (let i = arr.length - 1; i >= 0; i--) {
    // set a condition to check if we have seen the element before?
    if (!seenOccurranceOfElements[arr[i]]) {
      // if we havent we add it to the begining of the new arr
      lastOccurranceOfElements.unshift(arr[i]);
      // we also mark it as seen in case we come across it again
      seenOccurranceOfElements[arr[i]] = true;
    }
  }

  return lastOccurranceOfElements;
}

