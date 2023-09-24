
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Exercise - Capture The Flag Groups of Teams
You are a working on a capture the flag style Call of Duty game
regardless whether you're into shooter types or not!
Your boss comes up to you asks you to create a function that can
take an arrav of 6 plavers and divide them up evenly into 3 teams
each team containing its own sub array of two players.

1. Create an array called captureTheFlagplayers and input the following
player string data:
["player 1',"player 2","player 3","player 4","player 5", "player 6"]
2. Write a function chunkPlayersIntoGroups which can take the
captureTheFlagPlayers array as an argument and return the player data
divided into 3 even teams each containing its own sub array
of two players each.
3. Call and log the function passing in the captureTheFlagplayers array.
4. Share your solutions on the discord #algorithms channel!
`;
 
// Exercise Solution:
let captureTheFlagplayers = ['player 1',"player 2","player 3","player 4","player 5", "player 6"];
const chunkPlayersIntoGroups = (captureTheFlagplayers, num) => {
let theFlagTeams = [];
let arr1;
let arr2;
let arr3;
// let start = captureTheFlagplayers[0]

for(let i = 0; i < num; i++) {
  arr1 = theFlagTeams.push([...captureTheFlagplayers].slice(0, 2));
  arr2 = theFlagTeams.push([...captureTheFlagplayers].slice(2, 4));
  arr3 = theFlagTeams.push([...captureTheFlagplayers].slice(4, 6));
  break;
}
// console.log(theFlagTeams)
return theFlagTeams;
};
console.log('captureTheFlagSol1:', chunkPlayersIntoGroups(captureTheFlagplayers, 3));

const chunkPlayersIntoGroups2 = arr => {
let theFlagTeamsAgain = [];
let chunk = 2;

for(let i = 0; i < arr.length; i+=chunk) {
  theFlagTeamsAgain.push(arr.slice(i, i + chunk))
};

return theFlagTeamsAgain;
};
console.log('hisWaySolution1:',chunkPlayersIntoGroups2(captureTheFlagplayers))

const chunkPlayersIntoGroups3 = arr => {
let theFlagTeamsAgain2 = [];
let chunk = 2;
let i = 0;

while(i < arr.length) {
  theFlagTeamsAgain2.push(arr.slice(i, i + chunk))
  i += chunk;
}
return theFlagTeamsAgain2;
};
console.log('hisWaySolution2:',chunkPlayersIntoGroups3(captureTheFlagplayers));

// const chunks = (arr,num) => {
//   let team = [];

//   for(let i = 0; i < num; i++) {
//     team.push(arr.slice(i, 2))
//     // break
//   };
//   return team;
// };
// console.log('chunking:',chunks(captureTheFlagplayers))
