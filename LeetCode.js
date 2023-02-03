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
var reverseString = function(s) {
  //  return s.reverse()
  let l = 0;
  let r = s.length -1;
  while(l <= r) {
      [s[l], s[r]] = [s[r], s[l]];
      l += 1;
      r -= 1;
  }
};

// 1342. NUMBER OF STEPS TO REDUCE TO A NUMBER TO ZERO
var numberOfSteps = function(num) {
  // BASE CASE
  if (num === 0) return 0;
  // Recursive Cases 
  if (num % 2 === 0) {
      const steps = numberOfSteps(num / 2);
      return 1 + steps;
  } else {
      const steps = numberOfSteps(num - 1)
      return 1 + steps;
  }
};

// 509. FIBONACCI NUMBER
var fib = function(n) {
  if (n <= 0) return 0;
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2)
};

// VALID PARENTHESIS
var isValid = function(s) {
  // we create a hash table to store our brackets
  let matchingObj = {
      '(':')',
      '{':'}',
      '[':']'
  }
  // create a stack to push or remove from after looping through the string
  let stack = [];
  // create a for loop to go through the string 
  for (let i = 0; i < s.length; i++) {
      // set a condition to check if a bracket at an index has a key in hash table
      if (s[i] in matchingObj) {
          // if the bracket at this index has a key in the hash table push it to the stack
          stack.push(matchingObj[s[i]]);
          // else if it doesnt and the stack is not empty and the last element does not match the current element at current index pop it out of the stack
      } else if(stack.length > 0 && stack[stack.length-1] === s[i]) {
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
