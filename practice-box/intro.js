 // 1. given a string that has at least three characters, return the third character
 const getTheThirdCharInAStr = (str) => {
    return str[2];
  }
  console.log(getTheThirdCharInAStr("hope"));
  console.log(getTheThirdCharInAStr("i was"));
  
  // 2. given a number, round it to the nearest number evenly divisible by five
  // 3 => 5
  // 33 => 35
  // 19 => 20
  // 6 => 5
  const roundNumToNearestMultipleOfFive = (nums) => {
    return Math.round(nums / 5) * 5
  }
  console.log(roundNumToNearestMultipleOfFive(3));
  console.log(roundNumToNearestMultipleOfFive(6));
  console.log(roundNumToNearestMultipleOfFive(19));
  console.log(roundNumToNearestMultipleOfFive(33));
  
  
  // 4. given an array of numbers, round all of them to the nearest number evenly divisible by five
  // [3,33,19,6] => [5,35, 20, 5]
  const roundNumsInArrayToMultipleOfFive = (arr) => {
    // let roundedArr = [];
    let rounded=[];
    
      for(let i=0;i< arr.length;i++){
       rounded.push(Math.round(arr[i]/5) * 5)
      }
    return rounded;
  
    // return arr.map((element) => Math.round(element / 5) * 5);
  };
  console.log(roundNumsInArrayToMultipleOfFive([3,33,19,6])) // [5,35, 20, 5]
  
  // 5. A. Given an array of numbers, round all numbers down to the nearest five
  const roundNumsDownToTheNearestFive = (arr) => {
    return arr.map((element) => Math.floor(element / 5) * 5)
  };
  console.log(roundNumsDownToTheNearestFive([3,33,19,6])) // [0, 3, 15, 5]
  
  // 6. Given a list of words, return a count of the number of words that start or end with a vowel
  
  // 7. given an array of words, return a string made of the first character of each word
  
  // ['pop', 'lopez', 'odor', 'pug'] => 'plop'
  
  
  // 8. given an array with words, numbers and objects, return the count of how many objects there are
  
  // ['dad', 23, 1983, {'h': 3}, 'girl', {2: 34}] => 2
  // [{}, 4, 'dog'] => 1
  // [] => 0
  
  
  // 9. given a string, return the string  wrapped in a span element
  
  // 'Hello World' => '<span>Hello World</span>'
  // 'Yo!' => '<span>Yo!</span>'
  
  // '<span>' + 'Hellow worlkd!' + '</span>'
  
  // 10. given two numbers, price and discount, return the price after the discount is applied
  
  // price is 100 and discount is 15%
  // 100, 15 => 85
  
  // 70, 3 => 67.9
  
  
  // 11. given a string with two words, put ' the ' between the words and return the string
  
  // 'to beach' => 'to the beach'
  // 'for real' => 'for the real'