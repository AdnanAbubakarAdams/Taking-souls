// CONSECUTIVE VOWEL STRINGS RETURN AN INTEGER
function getTheVowels(word) {
  let vowels = "aeiou",
    result = 0,
    vIndex = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == vowels[vIndex]) {
      result++;
      // condition to return the vowels index to 0 when it gets to 'u'
      if (vIndex == 4) {
        vIndex = 0;
      } else {
        vIndex++;
      }
    }
  }
  return result;
}

// PERSONALISING SPAMMY MARKETING EMAILS
function personalise(campaign, person) {
  // ...
  //   return `Hello ${person.name}, how is the weather in ${person.city} today?, We wanted to let you know that ${person.favourite_products} are on sale today only!`

  // The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement...synthax replace(pattern, replacement)// /g means do a global search of the variables <NAME> , <CITY> ...
  return campaign
    .replace(/<NAME>/g, person.name)
    .replace(/<CITY>/g, person.city)
    .replace(/<FAVOURITE PRODUCTS>/g, person.favourite_products);
}

// TWICE AS OLD
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let birthYear = dadYearsOld - sonYearsOld;
  let twiceAsOld = birthYear * 2;
  if (dadYearsOld >= twiceAsOld) {
    return dadYearsOld - twiceAsOld;
  } else {
    return twiceAsOld - dadYearsOld;
  }
}

// OBJECT ORIENTED PIRACY DETERMINING IF A SHIP IS WORTH LOOTING
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;

  // this is how you determine if the ship is worth looting
  this.isWorthIt = function () {
    return this.draft - this.crew * 1.5 > 20;
  };
}

// CONVERT HASH TO AN ARRAY IN ALPHABETICAL ORDER
function convertHashToArray(hash) {
  //your code here - sort the keys!
  console.log(hash);
  // declaring vars (Object is a reserved word)
  let obj = Object;
  let newArray = [];
  let key = obj.keys(hash);
  let value = obj.values(hash);
  // Doing a for in loop of the values
  for (let i in value) {
    // pushing the key value pair into the new array
    newArray.push([key[i], value[i]]);
  }
  // sorting the new array alphabetically
  return newArray.sort((a, b) => a[0] > b[0]);
}

// IS DIVISIBLE BY X AND Y 8KATA CODEWARS
function isDivisible(n, x, y) {
  //   if (n % x == 0 && n % y == 0) {
  //     return true;
  //   }
  //   else  {
  //     return false;
  //   }
  return n % x == 0 && n % y == 0 ? true : false;
}

// N-TH POWER
function index(array, n) {
  //your code here
  //   if (array.length <= n) {
  //     return -1;
  //   } else {
  //     Math.pow(array[n])
  //   }
  // synthax Math.pow(base, exponent)
  return array.length <= n ? -1 : Math.pow(array[n], n);
}

// SIMPLE FUN **SEATS IN THEATRE** 8KATA CODEWARS
function seatsInTheater(nCols, nRows, col, row) {
  //coding and coding..
  let blockedCols = nCols - col + 1;
  let blockedRows = nRows - row;
  return blockedCols * blockedRows;
}

// NAME ON BILLBOARD ***8KATA***CODEWARS
function billboard(name, price = 30) {
  let totalCostofName = 0;
  for (let i = 0; i < name.length; i++) {
    totalCostofName += price;
  }
  return totalCostofName;
}

// SIMPLE FUN **INVITE MORE WOMEN*** 8KATA CODEWARS
function inviteMoreWomen(L) {
  //coding and coding..
  return L.reduce((a, b) => a + b, 0) > 0;
}

// SUM OF ODD NUMBERS  ***8KATA** CODEWARS
function rowSumOddNumbers(n) {
  // TODO
  return n ** 3;
  //   return Math.pow(n, 3)
}

// COLORED TRIANGLE ***7KATA** CODEWARS
function triangle(row) {
  // Return the answer
  let totalColor = "";
  //condition to return the color if its the only color inputed
  if (row.length == 1) {
    totalColor = row;
  }
  for (let i = 0; i < row.length - 1; i++) {
    if (row[i] == row[i + 1]) {
      totalColor += row[i];
    } else {
      totalColor += "RGB".replace(row[i], "").replace(row[i + 1], "");
    }
  }
  // using recussion
  if (totalColor.length > 1) {
    return triangle(totalColor);
  } else {
    return totalColor;
  }
}

// IF YOU CANT SLEEP? JUST COUNT SHEEP ****8KATA*** CODEWARS
var countSheep = function (num) {
  let string = "";
  for (let i = 1; i <= num; i++) {
    string += `${i} sheep...`;
  }
  return string;
};

// ALPHABETICAL ADDITION ***7KATA***
function addLetters(...letters) {
  // your code here
  let letterNum = 0;
  let letterArr = [
    "å",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  if (letters.length == 0) {
    return "z";
  }
  for (let i = 0; i < letters.length; i++) {
    letterNum += letterArr.indexOf(letters[i]);
  }
  if (letters.length > 0) {
    while (letterNum > 26) {
      letterNum -= 26;
    }
    return letterArr[letterNum];
  }
}

// 5 WITHOUT NUMBERS !!! ***8KATA*** CODEWARS
function unusualFive() {
  let name = "Adnan";
  return name.length;
}

// REMOVE FIRST AND LAST CHARACTER ***8KATA*** CODEWARS
function removeChar(str) {
  let newStr = str.slice(1, -1);
  return newStr;
}

// To square(root) or not to square(root) ***8KATA*** CODEWARS
function squareOrSquareRoot(array) {
  return array.map((arr) => (Math.sqrt(arr) % 1 ? arr * arr : Math.sqrt(arr)));
}

// ARRAY PLUS ARRAY
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((prev, curr) => prev + curr);
}

// BASIC MATHEMATICAL OPERATIONS
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  }
  if (operation === "-") {
    return value1 - value2;
  }
  if (operation === "*") {
    return value1 * value2;
  }
  if (operation === "/") {
    return value1 / value2;
  }

  //   switch (operation) {
  //     case '+':
  //         return value1 + value2;
  //     case '-':
  //         return value1 - value2;
  //     case '*':
  //         return value1 * value2;
  //     case '/':
  //         return value1 / value2;
  //     default:
  //         return 0;
  // }
}

// BEGINNER SERIES #1 SCHOOL PAPERWORK
function paperwork(n, m) {
  let classmates = n;
  let paperwork = m;
  if (classmates < 0 || paperwork < 0) {
    return 0;
  } else {
    return classmates * paperwork;
  }
  // return n > 0 && m > 0 ? n * m : 0;
}

// YOU ONLY NEED ONE - BEGINNER
function check(a, x) {
  // your code here
  return a.includes(x);
}

// TRANSPORTATION ON VACATION 8KATA CODEWARS
function rentalCarCost(d) {
  // Your solution here
  let totalDays = d * 40;
  if (d >= 7) {
    return (totalDays -= 50);
  }
  if (d >= 3) {
    return (totalDays -= 20);
  }
  return totalDays;
}

// DO I GET A BONUS
function bonusTime(salary, bonus) {
  // your code here
  let total = 0;
  if (bonus) {
    total += salary * 10;
  } else {
    return "£" + salary;
  }
  return "£" + total;
  //  return bonus ? `£${10 * salary}` : `£${salary}`;
}

// RETURNING STRINGS 8KATA
function greet(name) {
  //your code here
  return `Hello, ${name} how are you doing today?`;
}
// greet("Adnan")

// ABBREVIATE A TWO WORD NAME ***8KATA**
function abbrevName(name) {
  [firstName, lastName] = name.toUpperCase().split(" ");
  return firstName[0] + "." + lastName[0];
}

//  REMOVE DUPLICATES FROM LIST
function distinct(a) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (newArr.indexOf(a[i]) == -1) {
      newArr.push(a[i]);
    }
  }
  return newArr;

  //   let res = [];

  //   for(let i = 0; i < arr.length; i++){
  //     if(!res.includes(arr[i])){
  //       res.push(arr[i]);
  //     }
  // }
  // return res
}

// SIMPLE MULTIPLICATION
function simpleMultiplication(number) {
  // your code........
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
  // return n % 2 == 0 ? n * 8 : n * 9
}

// FOR TWINS TYPES
function typeValidation(variable, type) {
  // Your code should be here ;)
  return typeof variable === type ? true : false;
}

// THE WIDE-MOUTHED FROG
function mouthSize(animal) {
  // code here
  let newAni = animal.toLowerCase();
  if (newAni == "alligator") {
    return "small";
  } else {
    return "wide";
  }
  // return newAni === "alligator" ? "small" : "wide"
}

// REDUCE BUT GROW
function grow(x) {
  return x.reduce((prev, curr) => prev * curr);
}

// FILLING ARRAY PART 1
const arr = (n) => {
  let newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(i);
  }
  return newArray;
};

// POWER OF 2
function powersOfTwo(n) {
  let newArr = [];
  for (let i = 0; i <= n; i++) {
    newArr[i] = 2 ** i;
  }
  return newArr;
}

// REMOVE AN EXCLAMATION MARK FROM THE END OF A STRING
function remove(string) {
  // using regex
  //   For the $ quantifier it will search Exclamation mark at the end of the string.
  // Tip: Use the ^n quantifier to match any string with n at the BEGINNING of it.
  return string.replace(/!$/, "");
}

// WILSON PRIMES
FACTORIALS;
function amIWilson(p) {
  // check if prime is Wilson
  // return (Array.from({length: p -1}, (_, index) => index +1).reduce((prev,curr) => prev * curr, 1) + 1) / (p * p) % 1 == 0
  const factorial = (a) => {
    return a <= 1 ? 1 : a * factorial(a - 1);
  };
  return ((factorial(p - 1) + 1) / (p * p)) % 1 === 0;

  //   const factorial = (a) => {
  //     return a <= 1 ? 1 : a * factorial(a -1)
  //   }
  //  if (((factorial(p - 1) + 1) % (p * p)) == 0) {
  //    return true;
  //  } else {
  //    return fals
}

// COUNT ODD NUMBERS BELOW N
function oddCount(n) {
  // your code here
  let newArr = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 != 0) {
      newArr.push(i);
    }
  }
  return newArr.length;
}

// REMOVE EXCLAMATION MARK
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// OPPOSITE NUMBER
function opposite(number) {
  //your code here
  return -number;
}

// SAFEN USER INPUT PART 1- HTMLINSPECIALCHARS
function htmlspecialchars(formData) {
  // Insert your code here
  return formData
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/>/g, "&gt;");
}

// ADD ITEM TO AN ARRAY
websites.push("codewars");

// MR.FREEZE
// mark the MrFreeze object instance as frozen
Object.freeze(MrFreeze);

// CONVERT A STRING INTO AN ARRAY
function stringToArray(string) {
  // code code code
  return string.split(" ");
}

// COUNT BY X
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

// CVS REPRESENTATION OF ARRAY
function toCsvText(array) {
  // good luck
  return array.join("\n");
}

// CONVERT NUUMBER TO REVERSED ARRAY OF DIGITS
function digitize(n) {
  //code here
  console.log(n);
  let arr = n.toString().split("");
  return arr.map(Number).reverse();
}

// BEGINNER SERIES #2 CLOCK
function past(h, m, s) {
  //#Happy Coding! ^_^
  console.log(h, m, s);
  return new Date().setHours(h, m, s) - new Date().setHours(0, 0, 0);
  //   Date
  //   JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
  // new Date()
  //   When called as a constructor, returns a new Date object.
}

// BIN TO DECIMAL
function binToDec(bin) {
  // ...
  return parseInt(bin, 2);
}

// CENTURY FROM YEAR
function century(year) {
  // Finish this :)
  // The Math.ceil() function always rounds up and returns the smaller integer greater than or equal to a given number.
  console.log(year);
  return Math.ceil(year / 100);
}

// WHAT IS BETWEEN
function between(a, b) {
  // your code here
  console.log(a, b);
  let newArr = [];
  for (let i = a; i <= b; i++) {
    newArr.push(i);
  }
  return newArr;
}

// FIND NUMBERS WHIICH ARE DIVISIBLE BY GIVEN NUMBER
function divisibleBy(numbers, divisor) {
  let newArr = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}

// SHORT LONG SHORT
function solution(a, b) {
  // your code here
  if (a.length < b.length) {
    return a + b + a;
  } else {
    return b + a + b;
  }
}

// FIND MULTIPLES OF A NUMBER
function findMultiples(integer, limit) {
  //your code here
  let final = [];
  for (let i = integer; i <= limit; i += integer) {
    final.push(i);
  }
  return final;
}

// SUM OF POSITIVES
function positiveSum(arr) {
  console.log(arr);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      total += arr[i];
    }
  }
  return total;
}

// NAME SHUFFLER
function nameShuffler(str) {
  //Shuffle It
  console.log(str);
  // destructuring
  let [firstName, lastName] = str.split(" ");
  return lastName + " " + firstName;
}

// INVERT VALUES
function invert(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 0 || array[i] < 0) {
      newArr.push(array[i] * -1);
    }
  }
  return newArr;

  // return array.map((number) => number * -1)
}

// REVERSED SEQUENCE
const reverseSeq = (n) => {
  let finalRes = [];
  for (let i = n; i > 0; i--) {
    finalRes.push(i);
  }
  return finalRes;
};

// MAKE UPPERCASE
function makeUpperCase(str) {
  // Code here
  return str.toUpperCase();
}

// CONVERT A NUMBER TO A STRING
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// LOST WITHOUT A MAP
function maps(x) {
  return x.map((s) => s * 2);
}

// RETURN NEGATIVE
function makeNegative(num) {
  // Code?
  return num * -1;
}

// RETURN NEGATIVE
function makeNegative(num) {
  // The Math.abs() function returns the absolute value of a number.
  console.log(num);
  return Math.abs(num) * -1;
}

// CONVERT A BOOLEAN TO A STRING
function booleanToString(b) {
  //   if (b){
  //     return "true"
  //   }else {
  //     return "false"
  //   }
  return b ? "true" : "false";
}

// CALCULATE AVERAGE
function findAverage(array) {
  // your code here
  if (array.length <= 0) {
    return 0;
  }
  return array.reduce((a, b) => a + b, 0) / array.length;
  // return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

// EVEN OR ODD
function even_or_odd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// GET NTH EVEN NUMBER
function nthEven(n) {
  // your code here
  return n * 2 - 2;
}

// SIMPLE VALIDATION OF USERNAME WITH REGEX
function validateUsr(username) {
  res = /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(username);
  return res;
}

// CONTAMINATION #1 STRING
function contamination(text, char) {
  // Code here ;)
  return char.repeat(text.length);
  // REGEX return text.replace(/./g, char)
}

// DOUBLE CHAR
function doubleChar(str) {
  // Your code here
  //   console.log(str)
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    newString += str[i].repeat(2);
  }
  return newString;
}

// MY HEAD IS AT THE WRONG END
function fixTheMeerkat(arr) {
  //your code here
  let array = arr;
  let indexes = [2, 1, 0];
  return indexes.map((index) => array[index]);
  // return arr.reverse()
}

// BASIC DATA TYPES --NUMBER
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3, //set number value to a
    b = v1; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v6, //set number value to a
    b = v3; //set number value to b
  return a % b;
}

// GRAVITY FLIP
const flip = (d, a) => {
  //TODO
  return d === "R" ? a.sort((x, y) => x - y) : a.sort((x, y) => y - x);
  //   return d === "L" ? a.sort((x, y) => y - x) : a.sort((x, y) => x - y)
};

// IS THIS MY TAIL
function correctTail(body, tail) {
  sub = body.substr(body.length - tail.length);

  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// PRE-FIZZBUZZ WORKOUT #1
function preFizz(n) {
  console.log(n);
  let newArr = [];
  let number = 1;
  for (let i = 0; newArr.length < n; i++) {
    newArr.push(number);
    number += 1;
  }
  return newArr;
  // var output = [];
  // for (var i=1; i<=n; i++)
  // {
  // output.push(i);
  // }
  // return output;

  // var output = [];
  // for(var i = 0; i < n; i++){
  // output.push(i+1);
  // }
  // return output
}

// FIZZ BUZZ
// Return an array
function fizzbuzz(n) {
  //
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
}

// HOW GOOD ARE YOU REALLY?
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  //   console.log(classPoints)
  let average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  if (average < yourPoints) {
    return true;
  } else {
    return false;
  }
  //return average < yourPoints ? true : false
}

// FIXME REPLACE ALL DOTS
function replaceDots(str) {
  return str.replace(/\./g, "-");
}

// FIND THE POSITION
function position(letter) {
  //Write your own Code!
  let alphabets = "0abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabets.indexOf(letter)}`;
}

// SUM WITHOUT THE HIGHEST AND LOWEST NUMBER
function sumArray(array) {
  // console.log(array)
  if (!array) {
    return 0;
  }
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((a, b) => (a += b), 0);
}

// ISREALLYNaN
const isReallyNaN = (val) => {
  // return isNaN(val);  // wasn't working as planned :-(
  return Number.isNaN(val) ? true : false;
};

// HOW MUCH WATER DO I NEED?
function howMuchWater(water, load, clothes) {
  // Insert your brilliant code here
  // The toFixed() method formats a number using fixed-point notation. Returns it in a string
  //The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
  return clothes < load
    ? "Not enough clothes"
    : clothes > 2 * load
    ? "Too much clothes"
    : +(water * 1.1 ** (clothes - load)).toFixed(2);
}

// REMOVE THE STRING SPACES
function noSpace(x) {
  return x.replace(/ /g, "");
}

// SUM ARRAYS
// Sum Numbers
function sum(numbers) {
  //     "use strict";
  if (!numbers) {
    return 0;
  }
  return numbers.reduce((a, b) => a + b, 0);
}

// GEOMETRY BASICS: DISTANCE BETWEEN POINTS IN 2D
function distanceBetweenPoints(a, b) {
  // your code here

  return Math.hypot(a.x - b.x, a.y - b.y);
}

// COCKROACH
function cockroachSpeed(s) {
  //Good Luck!
  let secInHour = 3600;
  let centiInKilo = 100000;
  let speedOfRoach = Math.floor((s * centiInKilo) / secInHour);
  return speedOfRoach;
}

// IS HE GONNA SURVIVE
function hero(bullets, dragons) {
  //Get Coding!
  return bullets >= 2 * dragons;
}

// WILL THERE BE ENOUGH SPACE
function enough(cap, on, wait) {
  // your code here
  let difference = cap - on;
  let cantFit = wait - difference;

  return wait <= difference ? 0 : cantFit;
}

// COUNTING SHEEP
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let total = 0;
  for (let i = 0; i <= arrayOfSheep.length; i++) {
    if (arrayOfSheep[i]) {
      total++;
    }
  }
  return total;
}

// ROCK PAPER SCISSORS!
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  let gameRules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === gameRules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

// REVERSE LIST ORDER
function reverseList(list) {
  return list.reverse();
}

// SET ALARM
function setAlarm(employed, vacation) {
  // return employed ? true : false || vacation ? true : false;
  //   if (employed && !vacation) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return employed && !vacation ? true : false;
}

// COMPARE WITHIN MARGIN
function closeCompare(a, b, margin = 0) {
  // ...
  // whether a is lower than, close to or higher than b,
  // clse if margin is >= distance between a and b
  // return 0 when a is close to b
  // return -1 when a is less b
  // when a is greater than b return 1
  if (a < b - margin) {
    return -1;
  }
  if (a - margin > b) {
    return 1;
  }
  return 0;
}

// CONVERT A STRING TO A NUMBER!
const stringToNumber = function (str) {
  // put your code here
  //   return Number(str);
  return +str;
};

// CORRECT THE MISTAKES OF THE CHARACTER RECOGINITION SOFTWARE
function correct(string) {
  // your code here
  //   return string.replace(/[/5/,/0/,/1/]/g, "S","O","I")
  //   console.log(string.split(""))
  let corString = string.split("");
  for (let i = 0; i < corString.length; i++) {
    if (corString[i] === "5") {
      corString[i] = "S";
    } else if (corString[i] === "1") {
      corString[i] = "I";
    } else if (corString[i] === "0") {
      corString[i] = "O";
    }
  }
  return corString.join("");

  //   let str = string.split('')
  // return str.map(a => (a === '5')
  //   ? 'S': (a === '0')
  //   ? 'O': (a === '1')
  //   ? 'I': a).join('')
  //  }
  // correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')
}

// A WOLF IN SHEEPS CLOTHING
function warnTheSheep(queue) {
  let wolfInd = queue.indexOf("wolf");
  let sheepInd = queue.length - wolfInd - 1;
  if (wolfInd === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${sheepInd}! You are about to be eaten by a wolf!`;
  }
}

// STRING TEMPLATES - BUG FIXING#5
function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

// FIND MAXIMUM AND MINIMUM VALUES OF A LIST
var min = function (list) {
  //     console.log(list)
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

// WILL YOU MAKE IT?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump / fuelLeft > mpg) {
    return false;
  } else {
    return true;
  }
  // => mpg * fuelLeft >= distanceToPump;
};

// EXCLUSIVE "OR" (XOR) LOGICAL OPERATOR
function xor(a, b) {
  // TODO: Program Me
  return a === b ? false : true;
}

// WELCOME TO THE CITY
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// REMOVING ELEMENTS
function removeEveryOther(arr) {
  //your code here
  return arr.filter((a, index) => index % 2 === 0);
}

function plural(n) {
  // ...
  return n !== 1 ? true : false;
}

// Determine offspring sex based on genes XX and XY chromosomes
function chromosomeCheck(sperm) {
  return sperm === "XY"
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
}

// Enumerable Magic #20 - Cascading Subsets
function eachCons(array, n) {
  console.log(array, n);
  let subsetsArr = [];
  for (let i = 0; i < array.length; i++) {
    subsetsArr.push(array.slice(i, i + n));
  }
  return subsetsArr.filter((arr) => arr.length === n);
}

// HOW MANY STAIRS WILL SUZUKI CLIMB IN 2O YEARS?
function stairsIn20(s) {
  //your code here
  //   console.log(s)
  //   return s.forEach(element => element + element * 20 )
  let total = s.map((el) => el.reduce((a, b) => a + b));
  //   console.log(total)
  return total.reduce((x, y) => x + y) * 20;
}

// SHARK PONTOON
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (pontoonDistance < sharkDistance || youSpeed > sharkSpeed) {
    return "Alive!";
  } else {
    return "Shark Bait!";
  }
}

// COUNT ODD NUMBERS BELOW N
function oddCount(n) {
  // your code here
  //   console.log(n)
  //   let newArr = [];
  //   for (let i = 0; i < n; i++) {
  //     if (i % 2 !== 0) {
  //       newArr.push(i);
  //     }
  //   }

  //   return newArr.length;
  return Math.floor(n / 2);
}

// EXPRESSION MATTER
function expressionMatter(a, b, c) {
  //   console.log(a, b, c)
  let newArr = [a * (b + c), a * b * c, a + b + c, a + b * c, (a + b) * c];
  return Math.max(...newArr);
}

// HEX TO DECIMAL
function hexToDec(hexString) {
  //your code here
  const hexToDecimal = (hex) => parseInt(hex, 16);
  return hexToDecimal(hexString);
}

// TAKE THE DERIVATIVE
function derive(coefficient, exponent) {
  let newVar = coefficient * exponent;
  //   console.log(newVar)
  let substraction = exponent - 1;
  console.log(substraction);
  return newVar + "x" + "^" + substraction;
}

// VOLUME OF A CUBOID
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height;
  }
}

// MERGE TWO SORTED ARRAYS INTO ONE
function mergeArrays(arr1, arr2) {
  //   let newArr1 = arr1.sort((a, b) => a - b)
  //   console.log(newArr1)
  //    let newArr2 = arr2.sort((a, b) => a - b)
  //    console.log(newArr2)
  let newArr = [];
  let bigArr = arr1.concat(arr2).sort((a, b) => a - b);
  //    console.log(bigArr)
  for (let i = 0; i < bigArr.length; i++) {
    if (!newArr.includes(bigArr[i])) {
      newArr.push(bigArr[i]);
      //        console.log(bigArr[i])
    } else {
      newArr;
    }
  }
  return newArr;
}

// SQUARE(N)SUM
function squareSum(numbers) {
  return numbers.reduce((a, b) => a + b ** 2, 0);
}
// FAKE BINARY
function fakeBin(x) {
  // return x.replace(/[1234]/g, '0').replace(/[56789]/g, '1');
  let newDigit = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] < "5") {
      newDigit += "0";
    } else if (x[i] >= "5") {
      newDigit += "1";
    }
  }
  return newDigit;
}
// CAPITALIZATION AND MUTABILITY
function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// SQUARING AN ARGUMENT
// Write the "square"-function here
const square = (num) => {
  return num ** 2
}
// square()

// 101 DALMATIANS - SQUASH THE BUGS, NOT THE DOGS!
function howManyDalmatians(number) {
  var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
 
var respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number >= 101 ? dogs[3] : dogs[2]
 
return respond;
}
 
// YOU CANT CODE UNDER PRESSURE
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i*2;
}

// STRING CLEANING
function stringClean(s){
  // Function will return the cleaned string
  return s.replace(/[0-9]/g, "")
}

// CREATE YOUR FIRST JS FUCTION AND PRINT HELLO WORLD


// CHECK SAME CASE
function sameCase(a, b){
  if(a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase()) {
    return -1
  } else if (a == a.toLowerCase() && b == b.toLowerCase() || a == a.toUpperCase() && b == b.toUpperCase()){
    return 1
  }
  return 0
}


// FUNDAMENTALS RETURN
function add(a,b){
  return a + b
}

function divide(a,b){
  return a / b
}

function multiply(a,b){
  return a * b
}

function mod(a,b){
  return a % b
}
 
function exponent(a,b){
  return a ** b
}
  
function subt(a,b){
  return a - b
}