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
  return num * -1
}

// RETURN NEGATIVE
function makeNegative(num) {
  // The Math.abs() function returns the absolute value of a number.
  console.log(num)
  return Math.abs(num) * - 1
}

// CONVERT A BOOLEAN TO A STRING 
function booleanToString(b){
  //   if (b){
  //     return "true"
  //   }else {
  //     return "false"
  //   }
    return b ? "true" : "false"
  }

  // CALCULATE AVERAGE
  function findAverage(array) {
    // your code here
    if (array.length <= 0) {
      return 0
    }
  return array.reduce((a, b) => a + b, 0) / array.length
  // return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
    
  }

  // EVEN OR ODD
  function even_or_odd(number) {
    return number % 2 === 0 ? "Even" : "Odd"
    }

    // GET NTH EVEN NUMBER
    function nthEven(n){
      // your code here
      return n * 2 - 2
    }

    // SIMPLE VALIDATION OF USERNAME WITH REGEX
    function validateUsr(username) {
      res =  /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(username) 
      return res
    }

    // CONTAMINATION #1 STRING
    function contamination(text, char){
      // Code here ;)
      return char.repeat(text.length)
      // REGEX return text.replace(/./g, char)
    }

    // DOUBLE CHAR
    function doubleChar(str) {
      // Your code here
    //   console.log(str)
      let newString = "";
      for(let i = 0; i < str.length; i++) {
        newString += str[i].repeat(2)
      }
      return newString;
    }
    