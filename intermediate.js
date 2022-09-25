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

// STOP gninnipS My sdroW!
function spinWords(string) {
  //TODO Have fun :)
  return string.length >= 5
    ? string
        .split(" ")
        .map((letter) =>
          letter.length >= 5 ? letter.split("").reverse().join("") : letter
        )
        .join(" ")
    : string;
}

// FILTER OUT THE GEESE
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  // return an array containing all of the strings in the input array except those that match strings in geese
  return birds.filter((bird) => !geese.includes(bird));
}

// ENUMERABLE MAGIC TRUE FOR ALL

function all( arr, fun ){
  // The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

  // The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
 
  // return arr.some(fun)
  return arr.every(fun)
}

// ENUMERABLE MAGIC TRUE FOR NONE ?
function none(arr, fun){
  // ...
//   console.log(arr, fun)
//   for(let i = 0; i < arr.length; i++){
//     if(fun(arr[i])){
//       return false;
//     } 
//     return true;
//   }
  return !arr.some(fun)
}