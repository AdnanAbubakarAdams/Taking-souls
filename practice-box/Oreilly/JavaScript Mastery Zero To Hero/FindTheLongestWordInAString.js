
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Declare a function longestWord which takes an input of a string and returns the longest word
in the string
`;
 
// Exercise Solution:
const longestWordInStringSentence = (str) => {
let splittedSentence = str.split(' ');
let lengthOfStr = 0;
let resultingStr = "";

for (let i = 0; i < splittedSentence.length; i++){
  if(lengthOfStr < splittedSentence[i].length) {
  lengthOfStr = Math.max(splittedSentence[i].length);
  resultingStr = splittedSentence[i];
  }
};

return resultingStr;
};
console.log('here is the longest word =', longestWordInStringSentence('i am definitely going to school'))

function longestWord (str) {
  let word = "";
  let longestW = 0;
  let spliting = str.split(" ");

  for(let i = 0; i < spliting.length; i++) {
    if (longestW < spliting[i].length) {
      longestW = spliting[i].length;
      word = spliting[i];
    }
  }

  return word;
};
console.log('easierSolutionWithoutMethod:', longestWord('i am going to school'));
// REPEAT A STRING
/*
1.Write a function repeatingString which takes two parameters, a string and a number and returns a new
string repeating the functions argument string as many times as the number spefices.
2. Log the result in the console
 */

const repeatingString1 = (str, num) => {
return str.repeat(num);
};
console.log('repeatAstring1:', repeatingString1('hello Adnan ', 4));

const repeatingString2 = (str, num) => {
  let repeatedStr = [];

  for(let i = 0; i < num; i++) {
    repeatedStr.push(str);
  }

  return repeatedStr.join("");
};
console.log('repeated5times:', repeatingString2('united', 5))

const repeatingString3 = (str, num) => {
  return Array(num).fill(str).join('');
};
console.log('repeatedtimes:', repeatingString3('united', 5))
