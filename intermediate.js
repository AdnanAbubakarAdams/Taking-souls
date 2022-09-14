// ODD - EVEN STRING SORT
function sortMyString(S) {
  // your code here
  let even = S.split("")
    .filter((letter, i) => i % 2 === 0)
    .join("");
  let odd = S.split("")
    .filter((letter, i) => i % 2 !== 0)
    .join("");
  return even + " " + odd;
}

// MAXIMUM MULTIPLE 7KATA CODE WARS
function maxMultiple(divisor, bound) {
  //your code here
  let N = bound % divisor;
  return bound - N;
}

// CREATE PHONE NUMBER FORMAT
function createPhoneNumber(numbers) {
  let phoneNumFormat = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumFormat = phoneNumFormat.replace("x", numbers[i]);
  }

  return phoneNumFormat;
}
