
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Exercise: Battle Royale Game - Pairing Elements in Multi Dimensional Arrays
You are working on a feature for a game:
"Battle Royale Mode'. When the players initially spawn into the arena, depending on their class, they
are given special starting items
The Knight class is given "Sword of Power' whereas the Wizard Class is given the 'Staff of Infernal Blasts'
and finallv the Thief Class is given the 'Invisibility Dagger'
IE:
"Knight Class" pairs with "Sword of Power'
"Wizard Class" pairs with 'Staff of Infernal Blasts'
"Thief Class' pairs with 'Invisibility Dagger'
For the purposes of simplifying the code structure, Knight Class is
denoted by 'K', Wizard Class by 'c' and Thief Class by 'T'

1. Write a function spawnItems which takes a string as an argument
and will match the missing items to the provided player attributes.
2. Return a multi dimensinoal array where the character classes and its item pairs are paired up in an array,
and all the arrays are grouped into one encapsulating array
IE:
'K' should yield = [['Kight Class',"Sword of Power']]
3. Call and log the function passing in the argument string
"KWT
4. Share your solution in the #algorithm channel in the discord!
Good luck and may the schwartz be with you!
`;
 
// Exercise Solution:
function spawnItems(str) {
let connectedElements = [];

for(let i = 0; i < str.length; i++) {
  if(str[i] === 'K') {
    connectedElements.push(['Kight Class','Sword of Power'])
  } else if(str[i] === 'W') {
    connectedElements.push(['Wizard Class', 'Staff of Infernal Blasts'])
  } else if(str[i] === 'T') {
    connectedElements.push(['Thief Class', 'Invisibility Dagger'])
  }

  }

  return connectedElements;
}
console.log('exercise1:', spawnItems('KWT'))

const spawnItemsII = str => {
  let connectedElements = [];

  function makePairsWithSwitch(element) {
    switch (element) {
      case "K":
        connectedElements.push(['Kight Class','Sword of Power']);
        break;
      case "W":
        connectedElements.push(['Wizard Class', 'Staff of Infernal Blasts']);
        break;
      case "T":
        connectedElements.push(['Thief Class', 'Invisibility Dagger']);
        break;
        default: console.log("Battle Royale item pairing not found")
    }
  };

  for(let i = 0; i < str.length; i++) {
    makePairsWithSwitch(str[i])
  }

  return connectedElements;
};
console.log('solutionII:', spawnItemsII("KWT"))
