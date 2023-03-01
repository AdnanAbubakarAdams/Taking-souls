// VALID PARENTHESIS CODEWARS
function validParentheses(parens) {
    let hashMap = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    }
    let stack = [];
        for(let i = 0; i < parens.length; i++) {
          if (parens[i] in hashMap) {
            stack.push(hashMap[parens[i]])
          } else if (stack.length > 0 && stack[stack.length -1] === parens[i]) {
            stack.pop()
          } else {
            return false;
          }
        }
    return !stack.length;
  }

  // SUM A LIST BUT IGNORE ANY DUPLICATES
  function sumNoDuplicates(numList) {
    // accumlator pattern declare a var to  store the total
    let sum = 0
    // loop through the numlist of array comparing the current index of an element to the index of its last occureence 
    for (let i = 0; i < numList.length; i++) {
      // if the comparison above is true you add the value or the current ellement to sum
      if (numList.indexOf(numList[i]) === numList.lastIndexOf(numList[i])) {
        sum += numList[i]
      }
      
    }
    // return sum
    return sum;
  }

  // COUNTING DUPLICATES 
  function duplicateCount(text){
  //...
  let textConvert = text.toLowerCase();
  let hashObj = {};
  let count = 0
  
  for (let i = 0; i < textConvert.length; i++) {
    if (hashObj[textConvert[i]]) {
      hashObj[textConvert[i]]++
    } else {
      hashObj[textConvert[i]] = 1;
    }
  }
  for (let value in hashObj) {
    if (hashObj[value] >= 2) {
      count++;
    }
  }
  return count;
}