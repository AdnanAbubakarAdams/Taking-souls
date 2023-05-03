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
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    [s[l], s[r]] = [s[r], s[l]];
    l += 1;
    r -= 1;
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