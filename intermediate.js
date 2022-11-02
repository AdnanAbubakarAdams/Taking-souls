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

let sum = n.toString().split("").reduce((a, b) => Number(a) + Number(b),0)
//   console.log(newN)
let reversed = sum.toString().split("").reverse().join("")
//   console.log(reversed)
let product = sum * reversed;
//   console.log(product)
return product === n ? true : false
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
  newNode.next = head
  return newNode
}


function buildOneTwoThree() {
 var chained = null
chained = push(chained, 3)
chained = push(chained, 2)
chained = push(chained, 1)
  return chained
};

// No Loops 1 - Small enough?
function smallEnough(a, limit){
  return a.every((x) => x <= limit ) ? true : false
  }