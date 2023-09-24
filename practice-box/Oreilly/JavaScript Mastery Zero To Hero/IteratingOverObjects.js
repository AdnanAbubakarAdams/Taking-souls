
// Course Notes:
document.getElementById("lesson").innerHTML = `
Iterate through object with the for...in loop or statement

the for...in loop iterates over all enumerable properties of an object
that are keyed by strings, including inherited enumerable properties.

object.Keys- storing keys into arrays
You can store all the keys in an object into an array with object.keys() method.
object.keys takes one argument which is object you wish to extract the keys from.


`;

// Code Examples:
let npc = {
  character: 'knight',
  weapon: 'enchanted long sword',
  beard: true
}
for(let attributes in npc) {
  console.log('example1: keys=', attributes)
  console.log('example1: values=', npc[attributes])
}

// Exercise
document.getElementById("exercise").innerHTML = `
Given the following object of login information:
let logins = {
  week1: true,
  week2: false,
  week3: true,
  week4: true,
  week5: true,
}

Write a function which can calculate and return the total number of logins
using a for...in statement.
`;
 
// Exercise Solution:
let logins = {
  week1: true,
  week2: false,
  week3: true,
  week4: true,
  week5: true,
};
const calculateLoginTotals = (logins) => {

let totalNumOfLogins = 0;

for (let login in logins) {
  if (logins[login] === true) {
    totalNumOfLogins++
  }
}

return totalNumOfLogins;
};
console.log('exercise1 logins:', calculateLoginTotals(logins));

// Object.keys()
let languages = {
  french: true,
  english: true,
  spanish: false,
  arabic: true
};
console.log('object.keys example:', Object.keys(languages));

/*
Given the following facebook user object:
let facebookUser = {
handle: "Krystal", age: 26,
data: {
fullname: "Krystal Ballington", goinDate: new Date() , profilePic: "httpsAWS..." friends: ["Bob", "Jerry",
"Jerry", "Ashley"],
groups: [
"'New York Squash",
"Spirtual Cooking"
"Fossil Hunting"]
}
1. Write a function unFriend that can search through the facebook user's info (ie the facebookUser object) and dynamically remove the friend.
2. The function should take two arguments, the first argument being an object and the second argument the friend the user wishes to remove.
 */

let facebookUser = {
  handle: "Krystal", 
  age: 26,
  data: {
  fullname: "Krystal Ballington", 
  joinDate: new Date(), 
  profilePic: "httpsAWS..." ,
  friends: ["Bob", "Jerry", "Ashley"],
  groups: ["'New York Squash","Spirtual Cooking","Fossil Hunting"]
}
};

const deleteFriend = (obj, friend) => {
  let array = obj.data.friends;
  let i = array.indexOf(friend);
  if(i > -1) {
  array.splice(i, 1);
  } else {
    return 'The friend you trying to delete does not exist'
  }
  return array;
};
console.log('classicWay solution:', deleteFriend(facebookUser, 'Ashley'))

const unFriend = (obj, notFriend) => {
  let friendsList;
  if(obj.data['friends'][2] === notFriend) {
    // console.log(obj.data['friends'])
    obj.data['friends'].pop();
    friendsList = obj.data['friends'];
  } else {
    return 'The friend you trying to delete does not exist'
  };

  // return obj.data.friends;
  return friendsList;
}
console.log('unfreind Exercise:', unFriend(facebookUser, 'Ashley'))