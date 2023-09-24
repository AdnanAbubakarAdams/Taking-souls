
// Course Notes:
document.getElementById("lesson").innerHTML = `
How to truncate a string
in mathematics and computer sceince, truncation is limiting the number of digits to the right of a value

let x = 0; slice of the o  to truncate x to equal = 'hell"
`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
You're working at a Blob The Blog Blog company and they are putting up a
paywall to restrit guest viewers from reading the full article.

Truncate the text so that it onlv returns up to a maximum value and replaces the
additional overflow with ...'
1. Write a function truncate which takes a string and number as arguments and returns
the string truncated determined by the value of the number argument.
2. Log the result in the console and pass in the arguments:
"Really important stuff you'll pay to read", 21
`;
 
// Exercise Solution:
const truncatate = (str, num) => {
if (str.length >= num) {
  return str.slice(0, num) + "..."
}
return str
};
console.log('truncating:', truncatate("Really important stuff you'll pay to read", 21))
