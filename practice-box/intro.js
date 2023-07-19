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
  const isVowel = (chars) => {
    let vowels = ["a", "e", "i", "o", "u"];

    return vowels.includes(chars.toLowerCase());
  }
  const countWordsThatStartOrEndWithAVowel = (words) => {
    let count = 0;

    for (let word of words) {
      let firstChar = word[0];
      let lastChar = word[word.length - 1];

      if (isVowel(firstChar) || isVowel(lastChar)) {
        count ++;
      }
    }

    return count;
  };
  console.log(countWordsThatStartOrEndWithAVowel(["on", "let"])) // 1
  
  // 7. given an array of words, return a string made of the first character of each word
  const makeAStringFromAllFirstCharInAnArray = (words) => {
    let strOfAllFirstChar = [];
    
    // for (let i = 0; i < words.length; i++) {

    //   let firstChar = words[i][0];

    //   strOfAllFirstChar.push(firstChar);
    // }
    for (let word of words) {

      let firstChar = word[0];

      strOfAllFirstChar.push(firstChar)
    }
  
    return strOfAllFirstChar.join("");
  }
  console.log(makeAStringFromAllFirstCharInAnArray(['pop', 'lopez', 'odor', 'pug']));
  // ['pop', 'lopez', 'odor', 'pug'] => 'plop'
  
  
  // 8. given an array with words, numbers and objects, return the count of how many objects there are
  const getCountOfObjectsInAnArray = (arr) => {
    let count = 0;

    for (let element of arr) {
      if (typeof element === "object") {

        count++

      }
    }

    return count;
  }
  console.log(getCountOfObjectsInAnArray( [])) // 0
  console.log(getCountOfObjectsInAnArray( [{}, 4, 'dog'])) // 1
  console.log(getCountOfObjectsInAnArray(['dad', 23, 1983, {'h': 3}, 'girl', {2: 34}])) // 2
  
  // ['dad', 23, 1983, {'h': 3}, 'girl', {2: 34}] => 2
  // [{}, 4, 'dog'] => 1
  // [] => 0
  
  
  // 9. given a string, return the string  wrapped in a span element
  // 'Hello World' => '<span>Hello World</span>'
  // 'Yo!' => '<span>Yo!</span>'
  // '<span>' + 'Hellow worlkd!' + '</span>'
  function makeAstringWrappedInASpan (str) {
    return `<span> ${str} </span>`
  }
  console.log(makeAstringWrappedInASpan('Yo!'))
  console.log(makeAstringWrappedInASpan('Hellow worlkd!'))
  
  
  // 10. given two numbers, price and discount, return the price after the discount is applied
  // price is 100 and discount is 15%
  // 100, 15 => 85
  // 70, 3 => 67.9
  const getThePriceOfItemAfterDiscountIsApplied = (price, discount) => {
  

    let discountedPrice = (discount / 100) * price;

    // return Math.round(price - discountedPrice);
    return price - discountedPrice;
  }
  console.log(getThePriceOfItemAfterDiscountIsApplied(100, 15))
  console.log(getThePriceOfItemAfterDiscountIsApplied(70, 3))
  
  
  // 11. given a string with two words, put ' the ' between the words and return the string
  // 'to beach' => 'to the beach'
  // 'for real' => 'for the real one'

  const putTheInBetweenTwoStrs = (str) => {
    let splittedStr = str.split(" ").join(" the ")
    // let madeStr = splittedStr.join(" the ");

    // return madeStr;
    return splittedStr;
  }
  console.log(putTheInBetweenTwoStrs('to beach'))
  console.log(putTheInBetweenTwoStrs('for real-one'))