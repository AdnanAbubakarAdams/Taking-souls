// 832. FLIPPING AN IMAGE
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    image[i] = image[i].map((img) => (img === 0 ? 1 : 0));
  }
  return image;
};

// 56. MERGE INTERVALS
var merge = function (intervals) {
  //edge case: theres only 1 interval
  if (intervals.length === 1) return intervals;
  // sort intervals based on start time
  intervals.sort((a, b) => a[0] - b[0]);
  //declare a variable for start value of 1st interval
  let start = intervals[0][0];
  // declare a variable for tracking end value of 1st interval
  let end = intervals[0][1];
  // declare a variable to push the result into
  let mergedArr = [];
  // loop through the intervals starting at index 1 (2nd interval)
  for (let i = 1; i < intervals.length; i++) {
    // declare a variable for the current index
    const currentInterval = intervals[i];
    // compare the curr ind to end
    if (currentInterval[0] <= end) {
      end = Math.max(currentInterval[1], end);
    } else {
      mergedArr.push([start, end]);
      start = currentInterval[0];
      end = currentInterval[1];
    }
  }
  mergedArr.push([start, end]);

  return mergedArr;
};

// 344. REVERSE STRING
var reverseString = function (s) {
  //  return s.reverse()
  let leftPointer = 0;
  let rightPointer = s.length - 1;

  while (leftPointer <= rightPointer) {

    [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]];

    leftPointer += 1;
    rightPointer -= 1;
  }
};

// 1342. NUMBER OF STEPS TO REDUCE TO A NUMBER TO ZERO
var numberOfSteps = function (num) {
  // BASE CASE
  if (num === 0) return 0;
  // Recursive Cases
  if (num % 2 === 0) {
    const steps = numberOfSteps(num / 2);
    return 1 + steps;
  } else {
    const steps = numberOfSteps(num - 1);
    return 1 + steps;
  }
};

// 509. FIBONACCI NUMBER
var fib = function (n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

// VALID PARENTHESIS
var isValid = function (s) {
  // we create a hash table to store our brackets
  let matchingObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  // create a stack to push or remove from after looping through the string
  let stack = [];
  // create a for loop to go through the string
  for (let i = 0; i < s.length; i++) {
    // set a condition to check if a bracket at an index has a key in hash table
    if (s[i] in matchingObj) {
      // if the bracket at this index has a key in the hash table push it to the stack
      stack.push(matchingObj[s[i]]);
      // else if it doesnt and the stack is not empty and the last element does not match the current element at current index pop it out of the stack
    } else if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
      // else return false
    } else {
      return false;
    }
  }
  // return stack.length === 0 || true;
  return !stack.length;
  // true if stack is empty
};

// 217. CONTAINS DUPLICATE
function containsDuplicates(num) {
  // create a new array to store elements while checking for duplicats
  let newArr = [];
  // loop through array to check and check if new array includes the ele at current index. push if it doesnt & return true
  for (let i = 0; i < num.length; i++) {
    if (!newArr.includes(num[i])) {
      newArr.push(num[i]);
    } else {
      return true;
    }
  }
  // return false if array does not include duplicates;
  return false;
}

// 217. CONTAINS DUPLICATE
var containsDuplicate = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  for (let value in obj) {
    if (obj[value] >= 2) {
      return true;
    }
  }
  return false;
};

//  VALID ANAGRAM
var isAnagram = function (s, t) {
  // create a hash map to put char in as key value pairs
  let hashMap = {};
  // loop through both strings
  for (let i = 0; i < s.length; i++) {
    // create a variable to store element at current index
    let char = s[i];
    // set a condition to check if char is already in hashmap
    if (char in hashMap) {
      // if its in hashmap increase its count
      hashMap[char]++;
    } else {
      // if not in hashmap add it to it
      hashMap[char] = 1;
    }
  }
  // loop through string
  for (let i = 0; i < t.length; i++) {
    // create a variable to store element at current index
    let char = t[i];
    // set a condition to check if char is already in hashmap
    if (char in hashMap) {
      // if its in hashmap decrease its count
      hashMap[char]--;
    } else {
      // else return false
      return false;
    }
  }
  // to check if value at that key exists or is 0
  for (let key in hashMap) {
    if (hashMap[key]) {
      return false;
    }
  }
  return true;
};

// 49. GROUP ANAGRAM
var groupAnagrams = function (strs) {
  // create a hast table in other words an object to store the sorted and grouped anagrams
  const hashMap = {};
  // loop through the string so we can sort it out and group str with same letters
  for (let i = 0; i < strs.length; i++) {
    // now lets sort them into arrays of words of same characters every index
    const sortedArrayOfStrs = strs[i].split("").sort().join("");
    // set a condition to check if the hashMap has property {key} sortedArrayOfStrs
    if (!hashMap[sortedArrayOfStrs]) {
      // if it doesnt create and new key pair value with the key being the sortedArrayOfStr and value to the current string
      hashMap[sortedArrayOfStrs] = [strs[i]];
      // else if it does push the current element into the array containing same elements
    } else {
      hashMap[sortedArrayOfStrs].push(strs[i]);
    }
  }
  // using the object methods return the values of the hashMap
  return Object.values(hashMap);
};

// 2185. COUNTING WORDS WITH A GIVEN PREFIX
var prefixCount = function (words, pref) {
  // set a variable to store the count
  let prefCount = 0;
  // loop through the words to find the prefix
  for (let i = 0; i < words.length; i++) {
    // set a condition to check if part of the part of the string contains the prefix
    if (words[i].substring(0, pref.length).includes(pref)) {
      // if the word has the prefix increase the prefCount
      prefCount++;
    }
  }
  // return the count
  return prefCount;
};

// 326. POWER OF THREE
var isPowerOfThree = function (n) {
  // condition to set any number less than 1 which cannot be a multiple of 3
  if (n < 1) return false;
  // a while loop that continues to run as long the n % 3 === 0
  while (n % 3 === 0) {
    // continuosly divide n by factor of 3 till the remainderis not 0
    n /= 3;
  }
  // when the remainder becomes 1 return true;
  return n === 1;
};

// 231. POWER OF TWO
var isPowerOfTwo = function (n) {
  if (n < 1) return false;

  while (n % 2 === 0) {
    n /= 2;
  }
  return n === 1;
  // return n % 2 === 0 && n / 2 === 1 ? true : false;
};

// 342. POWER OF FOUR
var isPowerOfFour = function (n) {
  if (n < 1) return false;

  while (n % 4 === 0) {
    n /= 4;
  }

  return n === 1;
};

// 58. LENGTH OF LAST WORD
var lengthOfLastWord = function (s) {
  let splittedSentence = s.split(" ").filter((space) => space.trim() != "");
  let lastWord = splittedSentence[splittedSentence.length - 1];
  return lastWord.length;
};

// 125. VALID PALINDROME
var isPalindrome = function (s) {
  let mainString = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  console.log(mainString);
  let reversedString = s
    .toLowerCase()
    .replace(/[^A-Z0-9]/gi, "")
    .split("")
    .reverse()
    .join("");
  return mainString === reversedString;
};

// 1047. REMOVE ADJACENT DUPLICATES
var removeDuplicates = function (s) {
  // let create and empty stack to hold the elements of the string
  let stack = [];
  // we loop through the string
  for (let i = 0; i < s.length; i++) {
    // set a condition to check the length of the stack or if the stack is empty and also compare the last element of the stack to the current element of the string
    if (stack.length > 0 && s[i] === stack[stack.length - 1]) {
      // if they are the same we remove them from the stack
      stack.pop();
      // else if they are not the same we push into the stack
    } else {
      stack.push(s[i]);
    }
  }
  // now we return the stack by converting it into a string using the .join()
  return stack.join("");
};

var makeFancyString = function (s) {
  const matchingThreeOrMoreSameChar = /[^\w\s]|(.)\1\1+/gi;
  const fancyString = s.replace(matchingThreeOrMoreSameChar, (match) => {
    return match.slice(0, 2);
  });
  return fancyString;
};

// 1957. DELETE CHARACTERS TO MAKE FANCY STRING
var makeFancyString = function (s) {
  let finalStr = "";
  let char = "";
  let counter = 0;

  for (let i = 0; i < s.length; i++) {
    if (char === s[i]) {
      counter++;
      if (counter >= 3) {
        continue;
      }
    } else {
      char = s[i];
      counter = 1;
    }
    finalStr += s[i];
  }
  return finalStr;
};

// 136. SINGLE NUMBER
var singleNumber = function (nums) {
  let stack = [];
  let sorted = nums.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === sorted[i]) {
      stack.pop();
    } else {
      stack.push(sorted[i]);
    }
  }
  return stack.join("");
};

// 260. SINGLE NUMBER 2
var singleNumber = function (nums) {
  let stack = [];
  let sorted = nums.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === sorted[i]) {
      stack.pop();
    } else {
      stack.push(sorted[i]);
    }
  }
  return stack;
};

// 557. REVERSE WORDS IN A STRING III
var reverseWords = function (s) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr.split(" ").reverse().join(" ");
};

// 747. TO LOWER CASE
var toLowerCase = function (s) {
  return s.toLowerCase();
};

// 387. FIRST UNIQUE CHARACTER IN A STRING
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
};

// 1816. TRUNCATE SENTENCE
var truncateSentence = function (s, k) {
  let splittedStr = s.split(" ");
  return splittedStr.slice(0, k).join(" ");
};

//2413 SMALLEST EVEN MULTIPLE
var smallestEvenMultiple = function (n) {
  if (n % 2 === 0) return n;
  return n * 2;
};

// 1979. FIND GREATEST COMMON DIVISOR OF ARRAY
var findGCD = function (nums) {
  let sortedArr = nums.sort((a, b) => a - b);
  let smallestNumFromArr = sortedArr[0];
  let largestNumFromArr = sortedArr[sortedArr.length - 1];
  let commonDivisor;
  for (let i = 1; i <= largestNumFromArr && i <= smallestNumFromArr; i++) {
    if (largestNumFromArr % i === 0 && smallestNumFromArr % i === 0) {
      commonDivisor = i;
    }
  }
  return commonDivisor;
};

// 347. TOP K FREQUENT ELEMENTS
var topKFrequent = function (nums, k) {
  let countOfFrequency = {};

  for (let num of nums) {
    if (num in countOfFrequency) {
      countOfFrequency[num]++;
    } else {
      countOfFrequency[num] = 1;
    }
  }

  console.log(countOfFrequency);

  let convertedObj = Object.entries(countOfFrequency);

  let sortedObj = convertedObj.sort((a, b) => b[1] - a[1]);

  console.log(convertedObj);

  let mostFrequentElement = [];

  for (let i = 0; i < k; i++) {
    mostFrequentElement.push(sortedObj[i][0]);
  }

  return mostFrequentElement;
};

// 1071. GREATEST COMMON DIVISOR OF STRINGS
var gcdOfStrings = function (str1, str2) {
  while (true) {
    if (str1 + str2 != str2 + str1) {
      return "";
    }

    if (str1 === str2) {
      return str1;
    }

    if (str1.length > str2.length) {
      str1 = str1.substring(str2.length);
    }

    if (str2.length > str1.length) {
      str2 = str2.substring(str1.length);
    }
  }
};

// 228. SUMMARY RANGES
var summaryRanges = function (nums) {
  let arrOfRanges = [];
  let start = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 !== nums[i + 1]) {
      if (start == nums[i]) {
        arrOfRanges.push(`${nums[i]}`);
      } else {
        arrOfRanges.push(`${start}->${nums[i]}`);
      }
      start = nums[i + 1];
    }
  }
  return arrOfRanges;
};

// 169. MAJORITY ELEMENT
var majorityElement = function (nums) {
  let majorityEle = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in majorityEle) {
      majorityEle[nums[i]]++;
    } else {
      majorityEle[nums[i]] = 1;
    }
  }
  let sortedVal = Object.entries(majorityEle);
  // console.log(sortedVal)
  let sorted = sortedVal.sort((a, b) => b[1] - a[1]);

  return sorted[0][0];
};

// PALINDROME NUMBER
var isPalindrome = function (x) {
  let str = String(x);
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] != str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
};

// FIND THE INDEX OF THE FIRST OCCURANCE IN A STRING
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

//  1929. Concatenation of Array
var getConcatenation = function (nums) {
  let repeatedArr = [...nums];

  for (let i = 0; i < nums.length; i++) {
    repeatedArr.push(nums[i]);
  }

  return repeatedArr;
};

// 1480. RUNNING SUM OF 1D ARRAY
var runningSum = function (nums) {
  let arrOfRunningTheSum = [];
  let sumOfElementPlusNextElement = 0;

  for (let element of nums) {
    sumOfElementPlusNextElement += element;
    arrOfRunningTheSum.push(sumOfElementPlusNextElement);
  }

  return arrOfRunningTheSum;
};

// 1108. DEFANGING AN IP ADDRESS
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

// 2011. FINAL VALUE OF VARIABLE AFTER PERFORMING OPERATIONS
var finalValueAfterOperations = function (operations) {
  let totalValOfOperations = 0;

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      operations[i] = 1;
    }
    if (operations[i] === "--X" || operations[i] === "X--") {
      operations[i] = -1;
    }
    totalValOfOperations += operations[i];
  }

  return totalValOfOperations;
};

//860. LEMONADE CHANGE
var lemonadeChange = function (bills) {
  let fiveDollarBills = 0;
  let tenDollarBills = 0;

  for (let bill of bills) {
    if (bill === 5) {
      fiveDollarBills++;
    } else if (bill === 10) {
      tenDollarBills++;
      fiveDollarBills--;
    } else if (bill === 20) {
      if (tenDollarBills > 0 && fiveDollarBills >= 1) {
        tenDollarBills -= 1;
        fiveDollarBills -= 1;
      } else {
        fiveDollarBills -= 3;
      }
    }
    if (fiveDollarBills < 0) {
      return false;
    }
  }

  return true;
};

// 66. PLUS ONE
var plusOne = function(digits) {
  // didnt work
//   let convertedToStr = digits.join("");
//   let addedOneToStr = Number(convertedToStr) + 1;
//   let convertedToArr = addedOneToStr.toString().split("");
// return convertedToArr.map(ele => Number(ele))

// not working in leetcode 
let lastEle = digits[digits.length-1] + 1
  let sliced = digits.slice(0,digits.length-1) 
  let combiningSlicedAndLastElement = sliced + lastEle;
  let removalOfCommas = combiningSlicedAndLastElement.toString().split(",").join("")
  
  return removalOfCommas.split("").map(ele => Number(ele))
};

// 349. INTERSECTION OF TWO ARRAYS
var intersection = function(nums1, nums2) {
  let commonEle = [];

  for (let i = 0; i < nums1.length; i++) {
      if (nums2.includes(nums1[i])) {
          if(!commonEle.includes(nums1[i])) {
              commonEle.push(nums1[i])
          }
      }
  }

  return commonEle;
};

// 350. INTERSECTION OF TWO ARRAY II
var intersect = function(nums1, nums2) {
  let commonEleWithDups = [];
  let objOfEle = {}

  for (let num of nums1) {
      if (objOfEle[num]) {
          objOfEle[num]++
      } else {
          objOfEle[num] = 1;
      }
  }
  for (let num of nums2) {
          if (objOfEle[num] > 0) {
              commonEleWithDups.push(num)
              objOfEle[num]--
          }
      }
  return commonEleWithDups;
};

// 1002. FIND COMMON CHARACTERS
var commonChars = function(words) {
  let commonCharInEachWord = [];
  let firstWord = words[0];

  for (let i = 0; i < firstWord.length; i++) {
      if (words.every(word => word.includes(firstWord[i]))) {
          commonCharInEachWord.push(firstWord[i]);
          words = words.map(word => word.replace(firstWord[i], ''));
      }
  }
  return commonCharInEachWord;
};

// 1446. CONSECUTIVE CHARACTERS
var maxPower = function(s) {
  if (s.length === 0) {
      return 0
  };

  let count = 1;
  let maxCount = 1;
  
  for(let i = 1; i < s.length; i++) {
      if (s[i] === s[i-1]) {
          count += 1;
      } else {
          count = 1;
      }
       maxCount = Math.max(maxCount, count)
  }

  return maxCount;
};

// 27. REMOVE ELEMENTS 
var removeElement = function(nums, val) {
    /**
     *  for(let i = nums.length-1; i >= 0; i--) {
        if (nums[i] === val) nums.splice(i, 1)
    }

    return nums.length;
     */
  let k = 0;
  
  for(let i = 0; i < nums.length; i ++) {
      if (nums[i] !== val) {
          nums[k] = nums[i];
          k++;
      }
  }

  return k;
};

// 1704. DETERMINE IF STRING HALVES ARE ALIKE
var halvesAreAlike = function(s) {
  // create or throw vowels into a new set
let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
// create vars for the firsthalf of the str (a) n secondhalf of str (b) and the var to determine the midpoint
let firstHalfOfString = 0;
let secondHalfOfString = 0;
let midpoint = s.length / 2
// create two pointers left and right pointers
let leftPointer = 0;
let rightPointer = s.length - 1;

// loop throught the midpoint
for (let i = 0; i < midpoint; i++) {
 // check if the set of vowels contains str @ left pointer
 if (vowels.has(s[leftPointer])) {
   // if it does increase the first half str
   firstHalfOfString++
}
 // check if the set of vowels containts str @ right pointer
 if (vowels.has(s[rightPointer])) {
   // if it does you increase the secondhalf str
   secondHalfOfString++
 }
// still inside the loop keep moving pointers
// i.e left pointer ++ right pointer --
 leftPointer++
 rightPointer--
}
// return firsthalfstr === secondhalfstr
return firstHalfOfString === secondHalfOfString;
};

// 1470. SHUFFLE THE ARRAY
var shuffle = function(nums, n) {
  // declare a var to save the new arr
  let shuffledArray = [];

  // loop through the array n times 
  for (let i = 0; i < n; i++) {
      // push the current index and the index + n
      shuffledArray.push(nums[i], nums[i+n])
      }
  // return the new array
  return shuffledArray;
};

// 2114. MAXIMUM NUMBER OF WORDS FOUND IN SENTENCES
var mostWordsFound = function(sentences) {
    
  let countOfMaximumSentence = 0;

  for (let i = 0; i < sentences.length; i++) {
      let currentSentenceInArr = sentences[i].split(" ");

      if (currentSentenceInArr.length > countOfMaximumSentence) {
          countOfMaximumSentence = currentSentenceInArr.length;
      }
  }

  return countOfMaximumSentence;
};

// 1512. NUMBER OF GOOD PAIRS
var numIdenticalPairs = function(nums) {
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (nums[i] === nums[j] && i < j) [
              count++
          ]
      }
  }

  return count;
};

// 319. BULB SWITCHER {MEDIUM}
var bulbSwitch = function(n) {
  return Math.floor(Math.sqrt(n));
};

// 1662. CHECK IF TWO STRINGS ARE EQUIVALENT
var arrayStringsAreEqual = function(word1, word2) {
  let firstWord = word1.reduce((a,b) => a + b);
  let secondWord = word2.reduce((a,b) => a + b);
  
  return firstWord === secondWord
};

// 2215. FIND THE DIFFERENCE OF TWO ARRAYS
var findDifference = function(nums1, nums2) {
  let notInNums2 = [];
  let notInNums1 = [];
   
  for (let num of nums1) {
      if (!nums2.includes(num)) {
          if (!notInNums2.includes(num)) {
              notInNums2.push(num);
          } 
      }
  }

  for (let num of nums2) {
      if (!nums1.includes(num)) {
          if (!notInNums1.includes(num)) {
               notInNums1.push(num)
          }
      }
  }

  return [[...notInNums2], [...notInNums1]];
//    return combinedArr = [[...notInNums2], [...notInNums1]]
};

// 219. CONTAINS DUPLICATE II
var containsNearbyDuplicate = function(nums, k) {
  let hashMap = {};

for (let i = 0; i < nums.length; i++) {
  if (i - hashMap[nums[i]] <= k) {
    return true;
  }
  hashMap[nums[i]] = i
}

return false;
};

// 1636. Sort Array by Increasing Frequency
var frequencySort = function(nums) {
  let newObj = {};

  for(let i = 0; i < nums.length; i++) {
      if (newObj[nums[i]]) {
          newObj[nums[i]]++;
      } else {
          newObj[nums[i]] = 1;
      }
  }

   let sorted = nums.sort((a,b) => {
      if(newObj[a] > newObj[b]){
        // console.log(newObj[a], newObj[b])
          return 1;
      }else if(newObj[a] < newObj[b]){
          return -1;
      }else if(newObj[a] === newObj[b]){
          return b-a
      }
  });

  return sorted;

};

// 1572. MATRIX DIAGONAL SUM
var diagonalSum = function(mat) {
  let sumOfDiagonals = 0;

  for (let i = 0; i < mat.length; i++) {
      sumOfDiagonals += mat[i][i];

      if (i !== mat.length-1 - i) {
          sumOfDiagonals += mat[i][mat.length-1 - i];
      }
  }

  return sumOfDiagonals;
};

// 2160. Minimum Sum of Four Digit Number After Splitting Digits
var minimumSum = function(num) {
  let splittedNum = num.toString().split("").sort();
  console.log(splittedNum);

  return parseInt(splittedNum[0] + splittedNum[2]) + parseInt(splittedNum[1] + splittedNum[3])
};

// 258. Add Digits
var addDigits = function(num) {
  // recursive
  if (num < 10) return num;

  let splitNum = num.toString().split("");
  let addingDigits = 0;

  for (let num of splitNum) {
      addingDigits += parseInt(num);
  }

  return addDigits(addingDigits)

  // most efficient
  // if (isNaN(num) || num === 0) return 0;
  // if (num < 10) return num;
  //  return num % 9 === 0 ? 9 : num % 9;

};
// 2535. Difference Between Element Sum and Digit Sum of an Array
// helper function to break digits
// let splitDoubleEleToADigit = (n, arr = []) => {
//   if (n) {
//     return splitDoubleEleToADigit(Math.floor(n/10), [n % 10].concat(arr));
//   }
//   return arr;
// }
var differenceOfSum = function(nums) {
  //   let brokenToDigits;
  
  // const splitDigi = (nums) => {
  // brokenToDigits = nums.reduce((a, b) => a.concat(splitDoubleEleToADigit(b)), []);
  //   return brokenToDigits;
  //   }
  // splitDigi(nums);

  // let elementSum = nums.reduce((a, b) => a + b, 0);
  
  // let digitSum = brokenToDigits.reduce((a, b) => a + b, 0);
  // return elementSum - digitSum;

  const sumOfElements = nums.reduce((prev, curr) => prev + curr);

  const sumOfDigits = nums.join('').split('').reduce((prev, curr) => parseInt(prev) + parseInt(curr));

  return sumOfElements - sumOfDigits;
 
};

// 1456. Maximum Number of Vowels in a Substring of Given Length // gotta review
var maxVowels = function(s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let maxCount = 0;
  let start = 0; // the left edge of the window
  let count = 0; // count of vowels for current substring
// expanding the right edge of the window one character at a time
  for (let end = 0; end < s.length; end++) {
    // increment count of vowels for current substring if the current character is present in vowels array
      if (vowels.includes(s[end])) {
          count +=1;
      }
      // if substring is longer than K, let's shrink the window by moving left edge
      if (end - start + 1 > k) {
    // reduce the current count by one if the character on the left edge is vowel
          if(vowels.includes(s[start])) {
              count -=1;
          }
    //shrinking the left edge of the window
          start +=1;
      }
  // checking if current count is larger than current maximum count
      maxCount = Math.max(maxCount, count)
  // if maxCount is equal to K, no need to check further, it is the max possible count
      if (maxCount == k) return maxCount;
  }
  return maxCount;
};

// 2544. Alternating Digit Sum
var alternateDigitSum = function(n) {
  let sumOfAlternatingDigit = 0;

  let numConvertion = n.toString();

  for(let i = 0; i < numConvertion.length; i++) {
  
  if (i % 2 === 0) {
    sumOfAlternatingDigit += +numConvertion[i];
    
  } else {
      sumOfAlternatingDigit -= +numConvertion[i];
      }
  }

return sumOfAlternatingDigit;
};

// 345. Reverse Vowels of a String
var reverseVowels = function(s) {
  // declare vars to save the pointer and vowels
 let leftPointer = 0;
 let rightPointer = s.length -1;
 let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
 // split string into an array to loop through it
 let splittedStr = s.split("");

 while (leftPointer < rightPointer) {
   if (vowels.indexOf(splittedStr[leftPointer]) !== -1 && vowels.indexOf(splittedStr[rightPointer]) !== -1) {
     // using array distruction method swap the vowels in place
     [splittedStr[leftPointer], splittedStr[rightPointer]] = [splittedStr[rightPointer], splittedStr[leftPointer]];
     leftPointer++;
     rightPointer--;
   }
   if (vowels.indexOf(splittedStr[leftPointer]) == -1) {
     leftPointer++;
   }

   if (vowels.indexOf(splittedStr[rightPointer]) == -1) {
     rightPointer--
   }
 }

 return splittedStr.join("");
   
};

// 389. Find the Difference
var findTheDifference = function(s, t) {
    
  for (let char of s) {
      t = t.replace(char, "");
  }
  return t;
};

// 392. Is Subsequence
var isSubsequence = function(s, t) {
  if (s.length > t.length) return false;

let subsequence = 0;
for(let i = 0; i < t.length; i++) {
  if (s[subsequence] === t[i]) {
    subsequence++
  }
}

return subsequence === s.length;
};

// 412. FIZZ BUZZ
var fizzBuzz = function(n) {
  let fizzArray = [];

  for(let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          fizzArray.push("FizzBuzz");
      } else if(i % 3 === 0) {
          fizzArray.push("Fizz");
      } else if (i % 5 === 0) {
          fizzArray.push("Buzz");
      } else {
          fizzArray.push(i.toString());
      }
  }

  return fizzArray;
};

// 844. Backspace String Compare
var backspaceCompare = function(s, t) {
  let stackOfS = [];
  let stackOfT = [];

  for (let i = 0; i < s.length; i++) {
      if (s[i] === "#") {
          stackOfS.pop();
      } else {
          stackOfS.push(s[i]);
      }
  }

  for (let i = 0; i < t.length; i++) {
      if (t[i] === "#") {
          stackOfT.pop();
      } else {
          stackOfT.push(t[i])
      }
  }

  return stackOfS.join("") === stackOfT.join("")
};

// 71. Simplify Path
var simplifyPath = function(path) {
  let stackOfPath = [];
  let directories = path.split("/");

  for (let directory of directories) {
      if (directory !== "" && directory !== ".") {
          if (directory === "..") {
              stackOfPath.pop();
          } else {
              stackOfPath.push(directory);
          }
      }
  }

  return "/" + stackOfPath.join("/");
};

// 1869. Longer Contiguous Segments of Ones than Zeros
var checkZeroOnes = function(s) {
    
  let countOf1 = 0;
  let countOf0 = 0;

  let longestConsecutiveSeqOf1 = 0;
  let longestConsecutiveSeqOf0 = 0;

  for (let str of s) {
      if (str === "1") {
          countOf1 ++;
      } else {
        // reset count
        countOf1 = 0;
      }

      if (str === "0") {
          countOf0 ++;
      } else {
        // reset count
        countOf0 = 0;
      }

      longestConsecutiveSeqOf1 = Math.max(longestConsecutiveSeqOf1, countOf1);
      longestConsecutiveSeqOf0 = Math.max(longestConsecutiveSeqOf0, countOf0);
  }

  return longestConsecutiveSeqOf1 > longestConsecutiveSeqOf0;
};

// 485. Max Consecutive Ones
var findMaxConsecutiveOnes = function(nums) {
  let countOf1 = 0;
  let consecutiveCountOf1 = 0;

  for(let num of nums) {
      if (num === 1) {
          countOf1++;
      } else {
          countOf1 = 0;
      }

      consecutiveCountOf1 = Math.max(consecutiveCountOf1, countOf1);
  }

  return consecutiveCountOf1;
};

// 414. Third Maximum Number
var thirdMax = function(nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let num of nums) {
      if(num === firstMax || num === secondMax || num === thirdMax) continue;

      if (firstMax < num) {
          thirdMax = secondMax;
          secondMax = firstMax;
          firstMax = num;
      } else if(secondMax < num) {
          thirdMax = secondMax;
          secondMax = num;
      } else if(thirdMax < num) {
          thirdMax = num;
      }
  }

  if (thirdMax === -Infinity) {
      return firstMax;
  } else {
      return thirdMax;
  }
};


// 1544. Make The String Great
var makeGood = function(s) {
  // set a stack to add or pop to make a good str
    let stackOfGoodStr = [''];

  // loop through the converted string 
    for (let i = 0; i < s.length; i++) {
      let lastCharInStr = stackOfGoodStr[stackOfGoodStr.length-1];
    // check if the last char of str is the as the current element
      if (lastCharInStr.toLowerCase() === s[i].toLowerCase() && lastCharInStr !== s[i]) {
    // if it is pop it
        stackOfGoodStr.pop()
      } else {
    // else add it to the stack
        stackOfGoodStr.push(s[i])
      }
      
    }

// return the stack.join
    return stackOfGoodStr.join("");
};

// 946. Validate Stack Sequences
var validateStackSequences = function(pushed, popped) {
    let stackValidity = [];

    let i = 0;
    
    for (let element of pushed) {
        stackValidity.push(element);

        while(stackValidity.length > 0 && stackValidity[stackValidity.length -1] === popped[i]) {
            stackValidity.pop();

            i++
        }
    }

    return stackValidity.length === 0;
};


// 561. Array Partition
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let maximizedSum = 0;

    for(let i = 0; i < nums.length; i+=2) {
        maximizedSum += nums[i]
    }

    return maximizedSum;
};

// 896. Monotonic Array
var isMonotonic = function(nums) {
    let increasingFlag = true;
    let decreasingFlag = true;

    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i];
        let previousElement = nums[i-1];

        if (currentElement < previousElement) {
            increasingFlag = false;
        }

        if (currentElement > previousElement) {
            decreasingFlag = false;
        }
    }

    return increasingFlag || decreasingFlag;
};

// 2525. Categorize Box According to Criteria
var categorizeBox = function(length, width, height, mass) {
  let volume = length * width * height;

  // let category = "";

  let isBulky = 
  length >= 10 ** 4 ||
  width >= 10 ** 4  ||
  height >= 10 ** 4 ||
  mass >= 10 ** 4   ||
  volume >= 10 ** 9;

  let isHeavy = mass >= 100;

  if(isBulky && isHeavy) {
      return "Both";
  } else if(!isBulky && !isHeavy) {
      return "Neither";
  } else if(isBulky && !isHeavy) {
      return "Bulky";
  } else if(isHeavy && !isBulky) {
      return "Heavy";
  }
};

// 13. Roman to Integer
var romanToInt = function(s) {
  let symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};
  
  let convertedToInt = 0;

  for(let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i+1]]) {
      convertedToInt -= symbols[s[i]];
      console.log(convertedToInt)
    } else {
      convertedToInt += symbols[s[i]];
      console.log(convertedToInt)
    }
  }

  return convertedToInt;
}

// 12. Integer to Roman
var intToRoman = function(num) {
  // create a hash or object to save key value pairs for symbols and values
const romanValues = {
 M: 1000,
 CM: 900,
 D: 500,
 CD: 400,
 C: 100,
 XC: 90,
 L: 50,
 XL: 40,
 X: 10,
 IX: 9,
 V: 5,
 IV: 4,
 I: 1
};

// a var to save the string of roman numerals (symbols) that represent the values 
let convertedToRomanNumerals = "";

// using a for in loop we iterate over the hash or object
for (let symbol in romanValues) {

 // using a while loop to check if the current val of the obj is less than the give numerical val
 while (num >= romanValues[symbol]) {
   // if it is we append the current symbol representing that value from the object or hash
   convertedToRomanNumerals += symbol;
   // And also go on to substract the current val of the obj from the given numerical value till it becomes 0
   num -= romanValues[symbol];
   // console.log(romanValues[symbol])
 }
}

return convertedToRomanNumerals;
};

// 905. Sort Array By Parity
var sortArrayByParity = function(nums) {
  let evenNums = [];
  let oddNums = [];

  for (let num of nums) {
      if (num % 2 === 0) {
          evenNums.push(num)
      } else {
          oddNums.push(num)
      }
  }

  return evenNums.concat(...oddNums);
};

// 2164. Sort Even and Odd Indices Independently
var sortEvenOdd = function(nums) {
  let evenIndices = [];
  let oddIndices = [];
  let sortedEvenAndOdd = [];

  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          evenIndices.push(nums[i]);
      } else {
          oddIndices.push(nums[i]);
      }
  }

  evenIndices = evenIndices.sort((a,b) => a - b);
  oddIndices = oddIndices.sort((a,b) => b - a);

  for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
          sortedEvenAndOdd.push(evenIndices.shift());
      } else {
          sortedEvenAndOdd.push(oddIndices.shift());
      }
  }

  return sortedEvenAndOdd;
};

// 394. Decode String
var decodeString = function(s) {
  const onlyLetters = /^[a-z]+$/;
  // if only letters
  if(s.match(onlyLetters))
      return s;
  
  const encodedPattern = /[0-9]{1,}\[[a-z]{1,}\]/;

  s = s.replace(encodedPattern, decodedPattern);

  return decodeString(s)
};

const decodedPattern = (segment) => {
  const parts = segment.replace("]", "").split("[")
  const timesToRepeat = parts[0];
  const letters = parts[1];
  
  return letters.repeat(timesToRepeat);
}

// 2677. Chunk Array
var chunk = function(arr, size) {
  let arrayOfChunks = [];
  
  for (let i = 0; i < arr.length; i += size) {
      arrayOfChunks.push(arr.slice(i, i + size))
  }

  return arrayOfChunks;
};

// 2703. Return Length of Arguments Passed
var argumentsLength = function(...args) {
  return args.length;
};

// 2704. To Be Or Not To Be
var expect = function(val) {
  return {
      toBe : function(val2) {
          if (val !== val2) {
              throw new Error("Not Equal");
          } 
          return true;
      },
      notToBe : function(val2) {
          if (val === val2) {
              throw new Error("Equal");
          } 
          return true;
      }
  }
};

// 2665. Counter II
var createCounter = function(init) {
  let valueUsed = init;

  function increment() {
      return ++valueUsed;
  }

  function decrement() {
      return --valueUsed;
  }

  function reset() {
      return ( valueUsed = init ) ;
  }

  return { increment, decrement, reset }
};

// 38. Count and Say
var countAndSay = function(n) {
  if(n === 1) return "1";
// recurssively calling the helper function
return readStringDigit(countAndSay(n-1));
};

// HELPER FUNCTION
function readStringDigit(str) {
let letPointer = 0;
let strRead = "";

for(let rightPointer = 0; rightPointer <= str.length; rightPointer++) {
  
  if(str[rightPointer] !== str[letPointer]) {
    
    strRead += (rightPointer - letPointer) + str[letPointer];
    
    letPointer = rightPointer;
  }
}

return strRead;
}

//  1920. Build Array from Permutation
var buildArray = function(nums) {
  // Create an empty array called builtArr
let builtArr = [];

// Start a for loop that iterates over the elements of the nums array
// Initialize the loop variable i to 0
// Continue the loop as long as i is less than the length of nums
// Increment i by 1 after each iteration
for(let i = 0; i < nums.length; i++) {
 // Retrieve the element at index i of the nums array
 // Use this value as an index to access another element from the nums array
 // Push the retrieved element to the builtArr array
 builtArr.push(nums[nums[i]]);
}

// Return the builtArr array as the result of the function
return builtArr;
};

// 55. Jump Game
var canJump = function(nums) {
  // Keep track of the maximum index we can reach
let maximumJump = 0;

// Iterate over the array
for (let i = 0; i < nums.length; i++) {
  // If the current index is greater than the maximum reach
  // it means we cannot go beyond this point and reach the end
  if (i > maximumJump) {
    return false;
  }

  // Update the maximum reach if necessary
  maximumJump = Math.max(maximumJump, i + nums[i]);

  // If the maximum reach is already beyond or at the last index,
  // we can reach the end, so return true
  if (maximumJump >= nums.length - 1) {
    return true;
  }
}


return false;
};

// 128. Longest Consecutive Sequence
//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.
// Example 1:
// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  let sequenceCount = 1;
  let maxCount = 1;
  let sortedArr = nums.sort((a, b) => a - b)

  for (let i = 0; i < sortedArr.length; i++) {

      if(sortedArr[i] - sortedArr[i - 1] === 1) {
          sequenceCount++;
          maxCount = Math.max(maxCount, sequenceCount);
      } else if(sortedArr[i] === sortedArr[i-1]) {
          continue;
      } else {
          sequenceCount = 1
      }
  }

  return maxCount;
};

// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
var climbStairs = function(n) {

  if (n < 2) {

      return 1;
  }

  let firstStep = 1;

  let secondStep = 1;

  let thirdStep = 0;

  for (let i = 2; i <= n; i++) {

      thirdStep = firstStep + secondStep;

      firstStep = secondStep;

      secondStep = thirdStep;
  }

  return thirdStep;
};

// 2469. Convert the Temperature
// You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature in Celsius.
// You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
// Return the array ans. Answers within 10-5 of the actual answer will be accepted.
// Note that:
// Kelvin = Celsius + 273.15
// Fahrenheit = Celsius * 1.80 + 32.00
// Example 1:
// Input: celsius = 36.50
// Output: [309.65000,97.70000]
// Explanation: Temperature at 36.50 Celsius converted in Kelvin is 309.65 and converted in Fahrenheit is 97.70.

var convertTemperature = function(celsius) {
  let temperatureArr = [];

  let convertedToKelvin = celsius + 273.15;

  let convertedToFahrenheit = celsius * 1.80 + 32.00;

  temperatureArr.push(convertedToKelvin, convertedToFahrenheit);

  return temperatureArr;
};

// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels. Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Input: jewels = "z", stones = "ZZ"
// Output: 0
var numJewelsInStones = function(jewels, stones) {
  let countOfStones = 0;
  
  for(let i = 0; i < stones.length; i++) {
      
      if (jewels.includes(stones[i])){

          countOfStones++
      }
  }

  return countOfStones
};

// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
// Example 1:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
var map = function (arr, fn) {
  let madeArr = [];

  for (let i = 0; i < arr.length; i++) {
    madeArr[i] = fn(arr[i], i);
  }

  return madeArr;
};

// 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:
// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:
// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
var createCounter = function(n) {
  let num = n ;
  return function() {
      return num++
  };
  
};
// 2631. Group By
// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.
// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.
// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }
// Explanation:
// Output is from array.groupBy(fn).
// The selector function gets the "id" out of each item in the array.
// There are two objects with an "id" of 1. Both of those objects are put in the first array.
// There is one object with an "id" of 2. That object is put in the second array.
Array.prototype.groupBy = function(fn) {
  const obj = {};

  for(let item of this){
      let key = fn(item);

      if(Array.isArray(obj[key])){
          obj[key].push(item);
      }else obj[key] = [item];
  }
  
  return obj;
};


// 1876. Substrings of Size Three with Distinct Characters
// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.
// Example 1:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz". 
// The only good substring of length 3 is "xyz".
// Example 2:
// Input: s = "aababcabc"
// Output: 4
// Explanation: There are 7 substrings of size 3: "aab", "aba", "bab", "abc", "bca", "cab", and "abc".
// The good substrings are "abc", "bca", "cab", and "abc".
var countGoodSubstrings = function(s) {
  let countOfGoodString = 0;

  for(let i = 0; i < s.length-2; i++) {
      const slicedStr = s.slice(i, i + 3);
      const distinctStr = new Set(slicedStr);

      if (distinctStr.size === 3) countOfGoodString++
  };

  return countOfGoodString;
};

// 121. Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
var maxProfit = function(prices) {
  let maximumProfit = 0;
  let leftPointer = 0;
  let rightPointer = 1;

while(rightPointer < prices.length) {
  let currentProfit = prices[rightPointer] - prices[leftPointer];
  
  if (prices[leftPointer] < prices[rightPointer]) {
    maximumProfit = Math.max(maximumProfit, currentProfit);
  } else {
    leftPointer = rightPointer;
  }
  
  rightPointer++;
}


return maximumProfit;
};

// 1160. Find Words That Can Be Formed by Characters
// You are given an array of strings words and a string chars.
// A string is good if it can be formed by characters from chars (each character can only be used once).
// Return the sum of lengths of all good strings in words.
// Example 1:
// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:
// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.
var countCharacters = function(words, chars) {
    
  let count=0;
 let charObj = {};
 for(let c of chars){
   charObj[c] = (charObj[c] || 0) + 1;
   }

 for (let word of words) {
   let found = true;
    let wordObj = {};
    for(let i of word){
     wordObj[i] = (wordObj[i] || 0) + 1;
    }

    for(const char in wordObj){
      if(!charObj[char] || wordObj[char] > charObj[char]){
         found = false
      }
    }
   
    if(found) count += word.length
   
  }

 return count;

};

// 2798. Number of Employees Who Met the Target
// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.
// The company requires each employee to work for at least target hours.
// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.
// Return the integer denoting the number of employees who worked at least target hours.
// Example 1:
// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:
// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.
var numberOfEmployeesWhoMetTarget = function(hours, target) {
  let employeesThatMetTarget = 0;

  for (let i = 0; i < hours.length; i++) {
      if (hours[i] >= target) {
          employeesThatMetTarget++;
      }
  }

  return employeesThatMetTarget;
};

// 1768. Merge Strings Alternately
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s
// Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q 
// merged: a p b q c   d
var mergeAlternately = function (word1, word2) {
  let alternativelyCombined = "";
  let maximumLengthOfWords = Math.max(word1.length, word2.length);
  for (let i = 0; i < maximumLengthOfWords; i++) {
    if (word1[i]) {
      alternativelyCombined += word1[i];
    }
    if (word2[i]) {
      alternativelyCombined += word2[i];
    }
  }

  return alternativelyCombined;
};

// 2727. Is Object Empty
// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.
// Example 1:
// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
// Example 2:
// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
var isEmpty = function(obj) {
  if (Array.isArray(obj)) {
      return obj.length === 0;
  } else if(typeof obj === "object" && obj !== null) {
      return Object.keys(obj).length === 0;
  }

  return false;
};

// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence
// .
// Example 1:
// Input: nums = [10,9,2,5,3,7,101,18]
// Output: 4
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
// Example 2:
// Input: nums = [0,1,0,3,2,3]
// Output: 4
// Example 3:
// Input: nums = [7,7,7,7,7,7,7]
// Output: 1
var lengthOfLIS = function (nums) {
  // implementing solution 2
  let subsequence = [nums[0]];
  // console.log(subsequence)
  for (let i = 1; i < nums.length; i++) {
    let currentValue = nums[i];
    // important, this is from subsequence
    let previousValue = subsequence[i - 1];
    // console.log(currentValue, previousValue)
    if (currentValue > previousValue) {
      // meaning there is increasing
      // because previousValue is < currentValue
      // push into subsequence array
      subsequence.push(currentValue);
    } else {
      // currentValue is smaller than previous
      // so this is not a continously increasing value
      // check from the beginning of our subsequence array
      let j = 0;
      while (currentValue > subsequence[j]) {
        j++;
      }
      subsequence[j] = currentValue;
    }
  }
  console.log(subsequence);
  return subsequence.length;
};

// 283. Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
var moveZeroes = function(nums) {
  let pointer = 0;

  for(let i = 0; i < nums.length; i++) {
      if(nums[i] !== 0) {
          nums[pointer] = nums[i];

          pointer++;
      };
  };

  for(let i = pointer; i < nums.length; i++) {
      nums[i] = 0;
  };

  return nums;
};

// 2619. Array Prototype Last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.
// Example 1:
// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.
// Example 2:
// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.
Array.prototype.last = function() {
  return this.length ? this[this.length -1] : -1
};

// 2007. Find Original Array From Doubled Array
// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.
// Example 1:
// Input: changed = [1,3,4,2,6,8]
// Output: [1,3,4]
// Explanation: One possible original array could be [1,3,4]:
// - Twice the value of 1 is 1 * 2 = 2.
// - Twice the value of 3 is 3 * 2 = 6.
// - Twice the value of 4 is 4 * 2 = 8.
// Other original arrays could be [4,3,1] or [3,1,4].
// Example 2:
// Input: changed = [6,3,0,1]
// Output: []
// Explanation: changed is not a doubled array.
// Example 3:
// Input: changed = [1]
// Output: []
// Explanation: changed is not a doubled array.
var findOriginalArray = function(changed) {
  let originalArr = [];
  if (!changed || changed.length % 2 !== 0) return [];

  let sortedArr = changed.sort((a, b) => a - b);
  let obj = {};

  for(let i = 0; i < sortedArr.length; i++) {
      if(sortedArr[i] in obj) {
          obj[sortedArr[i]]++;

      } else {
          obj[sortedArr[i]] = 1;
      }
  }

  for (let i = 0; i < sortedArr.length; i++) {
      let currentElement = sortedArr[i];

      if (obj[currentElement]) {
          let doubledValue = currentElement * 2;

          if (obj[doubledValue]) {
              obj[currentElement]--;
              obj[doubledValue]--;

              originalArr.push(currentElement)
          } else {
              return [];
          }
      }
  }

  return originalArr;

};


// 2529. Maximum Count of Positive Integer and Negative Integer
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.
// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.
// Example 1:
// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:
// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:
// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
var maximumCount = function(nums) {
  let countOfPositiveIntegers = 0;
  let countOfNegativeIntegers = 0;

  for(let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          continue;
      } else if (nums[i] > 0) {
          countOfPositiveIntegers++;
      } else {
          countOfNegativeIntegers++;
      }
  }

  return Math.max(countOfPositiveIntegers,countOfNegativeIntegers)
};

// 1351. Count Negative Numbers in a Sorted Matrix
// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
// Example 1:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:
// Input: grid = [[3,2],[1,0]]
// Output: 0
var countNegatives = function(grid) {
  let numberOfNegativeNumbersInGrid = 0;

  for(let row = 0; row < grid.length; row++) {
      for(let column = 0; column < grid[row].length; column++) {
          if (grid[row][column] < 0) {
              numberOfNegativeNumbersInGrid++;
          }
      }
  }

  return numberOfNegativeNumbersInGrid;
};

// 74. Search a 2D Matrix
// You are given an m x n integer matrix matrix with the following two properties:
// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.
// You must write a solution in O(log(m * n)) time complexity.
// Example 1:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
var searchMatrix = function(matrix, target) {
  for(let row = 0; row < matrix.length; row++) {
      for(let column = 0; column < matrix[row].length; column++) {
          if(matrix[row][column] === target) {
              return true;
          }
      }
  }

  return false;
};

// 2652. Sum Multiples
// Given a positive integer n, find the sum of all integers in the range [1, n] inclusive that are divisible by 3, 5, or 7.
// Return an integer denoting the sum of all numbers in the given range satisfying the constraint.
// Example 1:
// Input: n = 7
// Output: 21
// Explanation: Numbers in the range [1, 7] that are divisible by 3, 5, or 7 are 3, 5, 6, 7. The sum of these numbers is 21.
// Example 2:
// Input: n = 10
// Output: 40
// Explanation: Numbers in the range [1, 10] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. The sum of these numbers is 40.
// Example 3:
// Input: n = 9
// Output: 30
// Explanation: Numbers in the range [1, 9] that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. The sum of these numbers is 30.
var sumOfMultiples = function(n) {
  let sumNumsInRange = 0;

  for(let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sumNumsInRange += i;
    }
  }

  return sumNumsInRange;
};

// 448. Find All Numbers Disappeared in an Array
// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:
// Input: nums = [1,1]
// Output: [2]
var findDisappearedNumbers = function(nums) {
  // console.log(nums.length)
  let sortedNums = nums.sort((a, b) => a - b);
  let newSetOfNums = new Set(sortedNums);
  let disappearedNumsFound = [];

  for(let i = 0; i < sortedNums.length; i++) {
      if (!newSetOfNums.has(i + 1)) {
          disappearedNumsFound.push(i + 1);
      }
  }

  return disappearedNumsFound;
};

// 961. N-Repeated Element in Size 2N Array
// You are given an integer array nums with the following properties:
// nums.length == 2 * n.
// nums contains n + 1 unique elements.
// Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.
// Example 1:
// Input: nums = [1,2,3,3]
// Output: 3
// Example 2:
// Input: nums = [2,1,2,5,3,2]
// Output: 2
// Example 3:
// Input: nums = [5,1,5,2,5,3,5,4]
// Output: 5
var repeatedNTimes = function(nums) {
  let mostFreqObj = {};
  let maxElement = nums[0];
  let maxCountOfElement = 1;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] in mostFreqObj) {
          mostFreqObj[nums[i]]++;
      } else {
          mostFreqObj[nums[i]] = 1;
      }

      if (mostFreqObj[nums[i]] > maxCountOfElement) {
          maxElement = nums[i];
          maxCountOfElement = mostFreqObj[nums[i]]
      }
  }

  return maxElement;
};

// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
var sortedSquares = function(nums) {
  return nums.map((element) => element ** 2).sort((a, b) => a - b)
};

// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
var rotate = function(matrix) {
  let reversedMatrix = matrix.reverse();

  for (let row = 0; row < reversedMatrix.length; row++) {
      for (let col = 0; col < row; col++) {
          [reversedMatrix[row][col], reversedMatrix[col][row]] = [reversedMatrix[col][row], reversedMatrix[row][col]];
      }
  }

  return reversedMatrix;
};

// 442. Find All Duplicates in an Array
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1,2]
// Output: [1]
// Example 3:
// Input: nums = [1]
// Output: []

var findDuplicates = function(nums) {
  nums.sort()
  let duplicates = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === nums[i+1]) {
    duplicates.push(nums[i])
  }
}
return duplicates
};

// 1365. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.
// Example 1:
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]
// Explanation: 
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1). 
// For nums[3]=2 there exist one smaller number than it (1). 
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
// Example 2:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]
// Example 3:
// Input: nums = [7,7,7,7]
// Output: [0,0,0,0]
var smallerNumbersThanCurrent = function(nums) {
  let numberThatAreSmaller = [];

  for(let i = 0; i < nums.length; i++) {
      let count = 0;
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
              count++;
          }
      }

      numberThatAreSmaller.push(count)
  }

  return numberThatAreSmaller;
};






// using a class for function above
// class Counter {
//   constructor(init) {
//     this.init = init;
//     this.presentCount = init;
//   }

//   increment() {
//     this.presentCount += 1;
//     return this.presentCount;
//   }

//   decrement() {
//     this.presentCount -= 1;
//     return this.presentCount;
//   }

//   reset() {
//     this.presentCount = this.init;
//     return this.presentCount;
//   }
// }

// var createCounter = function(init) {
//   return new Counter(init);
// };





















// C++ FIZZ BUZZ MULTITHREAD
// class FizzBuzz {
// private:
//     int n;
//     int current_number;
//     mutex number_mutex;
//     const int number_of_threads = 4;
//     bool done = true;
    
// public:
//     FizzBuzz(int n) {
//         this->n = n;
//         if (n > 0){
//             done = false;
//         }
//         current_number = 1;
//     }

// private: 
//     void nextNumber(){
//         if (current_number < n){
//             scoped_lock lock(number_mutex);
//             current_number++;
//         } else{
//             done = true;
//         }
//     }

// public: 
//     // printFizz() outputs "fizz".
//     void fizz(function<void()> printFizz) {        
//         while (!done){
//             if (!(current_number % 3 ) && (current_number % 5)){
//                 printFizz();
//                 nextNumber();               
//             }
//         }
//     }

//     // printBuzz() outputs "buzz".
//     void buzz(function<void()> printBuzz) {        
//         while (!done){
//             if ((current_number % 3 ) && !(current_number % 5)){
//                 printBuzz();
//                 nextNumber();               
//             }
//         }
//     }
    
//     // printFizzBuzz() outputs "fizzbuzz".
// 	void fizzbuzz(function<void()> printFizzBuzz) {
//         while (!done){
//             if (!(current_number % 3 ) && !(current_number % 5)){
//                 printFizzBuzz();
//                 nextNumber();               
//             }
//         }
//     }

//     // printNumber(x) outputs "x", where x is an integer.
//     void number(function<void(int)> printNumber) {
        
//         while (!done){
//             if ((current_number % 3 ) && (current_number % 5)){
//                 printNumber(current_number);
//                 nextNumber();               
//             }
//         }
//     }
// };