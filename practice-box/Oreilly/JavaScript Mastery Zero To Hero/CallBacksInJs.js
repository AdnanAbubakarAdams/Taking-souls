
// Course Notes:
document.getElementById("lesson").innerHTML = `
call back function is a function which is passed into another ffunction
as an argument which is then invoked or called inside of the outer 
function to complete or do some kind of action
`;

// Code Examples:
// Greetings function
const signIn = user => {
  console.log(user + ' has successfully signed in')
}
const signedUserIn = cb => {
  let name = prompt('please sign in');
  cb(name)
}
// signedUserIn(signIn)
// Exercise
document.getElementById("exercise").innerHTML = `

`;
 
// Exercise Solution:
