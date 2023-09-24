
// Course Notes:
document.getElementById("lesson").innerHTML = `
Regular Expressions are patterns used to match characters or character combinations in strings
In js regular expressions are also objects.

Grouping: a grouping is basically like a mini-regex inside a pair of parenthesis, while a character set is a range
between square brackets
example: 
/([a-z])([A-Z])/g
is used to capture one character a - z and one character A - Z
`;

// Code Examples:

let str = 'ThreeTwo = Five';

console.log('example1:', str.replace(/([a-z])([A-Z])/g, function(match, g1, g2) {
  return g1 + " + " + g2;
}))


// Exercise
document.getElementById("exercise").innerHTML = `
You are working for a website called Star Power and they just can't get enough
stars. They loves stars so much in fact, so much that they want you to design an
algorithm which will replace all string grouping of upper and lowercases with spaces
following by an asterix in between.
Strange request? - Perhaps! But sometimes we just gotta do what the job requires.
For Example
Given the followine string:
"starPower Forever'
we should replace it with:
star * power * forever
1. Write a function starPowerAlgo which takes a string as an argument and returns
new string in all lowercase.
2. The function should replace all groupings of uppercases and lowercases with a space
and should also replace all spaces with an asterix.
IE: The string
"starpower Forever' should be replaced with
'star * power * forever'
`;
 
// Exercise Solution:
const starPowerAlgo = str => {
let convertedStr = [];
convertedStr = str.replace(/([(a-z])([A-Z])/g, "$1 $2").toLowerCase().split(" ");
return convertedStr.join(" * ")

};
console.log('regexOndeep:', starPowerAlgo('starPower Forever'))