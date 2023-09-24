
// Course Notes:
document.getElementById("lesson").innerHTML = `
We can leverage the charCodeAt() method which will return an integer between 0 and 65535
representing the UTF-16 code unit at the given index

Now, while it may prove cumbersome to go through characters when it comes to modiffying 
string values for various purposes, by having a clear understanding of the UTF codes and how we can
manipulate them, we can render this process much more efficient and gain real flexibility

`;

// Code Examples:
console.log('example:', 'abc'.charCodeAt(0))
console.log('exampleII:', String.fromCharCode(97))

// Exercise
document.getElementById("exercise").innerHTML = `
Exercise: Generate Missing Alphabet Letters
I
You are at an interview and the interviewer asks you how familiar
you are with UFT in JavaScript. It's time to show them your skills.
1. Write a function generateLetters which takes a string as an argument
2. The function should be able to input any given two alphabet letters and output
all of the missing alphabet letters in between the two letters including the original
input in the correct alphabetized order.
For Ex:Input:"ad'. Expected output:abed'
3. Log and call the function passing in the string
"ap'
4. Share your solution in the discord in the #algorithms channel and good luck!
`;
 
// Exercise Solution:
const generateLetters = str => {
  let alphabets = "";

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if(code !== str.charCodeAt(0) + 1) {
      let letterDifference = str.charCodeAt(0) + i - code;
      letterDifference *= -1;
      for (let i = 0; i < letterDifference; i++) {
        alphabets += String.fromCharCode(code -= 1)
      }
    }
  }
  let reversedAlphabets = alphabets.split('').reverse().join('');
  
  return str[0].concat(reversedAlphabets).concat(str[1])
};
console.log('solution:', generateLetters("az"))
