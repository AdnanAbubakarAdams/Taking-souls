
// Course Notes:
document.getElementById("lesson").innerHTML = `
indexOf searches for whether an element in an array exists and returns  
its position in the array(index location)

Basically indexOf takes one parameter which is the element you are searching 
for and returns the index position. if the element does not exist then indexOf will return the value -1.

`;

// Code Examples:
let kingsCourt = ['Jester', 'spooky Advisor', 'throne', 'Queen'];
console.log('example 1:', kingsCourt.indexOf('throne'));
console.log('example 2:', kingsCourt.indexOf('magic arrows'));

// Exercise
document.getElementById("exercise").innerHTML = `
Exercise: Search for game items and clone the kingdom!
You are working for a gamine company and your boss comes over to your desk and hands you
an array holding the game's kingdom items and asks you for help.
She asks you to check to see if 'Magic Arrows' exists in the array and if they df to make
two copies of the array into a new array for further analysis without modifyine the original data.
She also notes that if you get this right this could mean a big up in your salary.
1. Write a function called searchAndclone which takes two arguments:
array and elem.
2. Log into the console searchAndClone passing in the following data from your bosses arrav:
"Throne", "Silver sword"
"Magic Arrows"
"Queen",
"Jester"
"Spookv Advisor"
3. Back in the function searchAndClone write in logic using the indexof method to search
and see whether or not the element 'Magic Arrows' exists in the searchAndClone array argument.
If magic arrows does exist then add conditional logic so that the function will push two
copies of the argument array into a new array and return the new array. If the magic
arrows string does not exist as an element in the argument array then return an error message
to the console stating that the Magic Arrows are not to be found.
4. Save the kingdom from impending doom and post your solution in the discord #datastructures
channel.
Good luck, brave Warlock!
`;
 
// Exercise Solution:
const searchAndclone = (array, element) => {
  let newArray = [];
  let num = 2;
  if (array.indexOf("Magic Arrows")) {
    while (num > 0) {
      newArray.push([...array])
      num--;
    }
  } else {
    return 'Magic Arrows cannot be Found';
  }

  return newArray;
};
console.log('solutionToSearchAndClone:',searchAndclone(["Throne", "Silver sword", "Magic Arrows", "Queen", "Jester", "Spookv Advisor"]))
