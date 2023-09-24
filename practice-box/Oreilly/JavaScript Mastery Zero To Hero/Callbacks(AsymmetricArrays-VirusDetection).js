
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
You are working client side for a successful start up company. You even have a fooseball table
in the lounge, but it doesn't even matter because you can work remotely on the beach.
Lucky you!
Some hackers get into the client side and implant viruses into the userbase with false accounts
You boss asks you to locate and track down winch accounts are causing the malevolent attacks
Using the cloud database you begin a search to isolate the accounts which do not belong and
track down the bad actors before it's too late

1. Assign the userscloud array and usersclient arrays with the following data.
usersCloud = ['tom', 'susan', 'jordan', 'Lucy', 'abraham', 'jose', 'maria'];
let usersclient = ['tom',"susan',"lucy',"VIRUS','abraham','VIRUS','TROJAN' , 'jose', 'maria']:

2. Create a function virusDetection that can search through two arrays and return a new
array of all the non equal elements in either arrav
(ie. any element in one array which does not exist in the other array and vice versa.)

3. Call and log the function virusDetection
passing in the two arrays usersCloud and usersClient
4. Share your solution in the discord in the #algorithm channel.
Good luck and show these hackers what's up!
`;
 
// Exercise Solution:
let usersCloud = ['tom', 'susan', 'jordan', 'lucy', 'abraham', 'jose', 'maria'];
let usersclient = ['tom','susan','VIRUS','jordan', 'lucy', 'VIRUS','abraham','TROJAN','jose', 'maria'];

const virusDetection = (arr1, arr2) => {
  let viruses = [];

  for(let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) === - 1) {
        viruses.push(arr2[i])
    }
  }
  return viruses;
  // return arr2.filter((element) => !arr1.includes(element))
};
console.log('testing:',virusDetection(usersCloud,usersclient))

const virusDetection2 = (arr1, arr2) => {
  let viruses = [];
  function nestedChecking (firstArr, secondArr) {
  for(let i = 0; i < secondArr.length; i++) {
      if (firstArr.indexOf(secondArr[i]) === - 1) {
        viruses.push(secondArr[i])
    }
  }
}
  nestedChecking(arr1, arr2);
  nestedChecking(arr2, arr1);

  return viruses;
};
console.log('usingAcallBack:',virusDetection2(usersCloud,usersclient))