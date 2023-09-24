
// Course Notes:
document.getElementById("lesson").innerHTML = `
Factorials help us to calculate pprobabilites
A factorial is the product of all positive integers less than or equal to n 

consider having combination of puzzle peices and you'd like to know all the possible 
combinations that these pieces could form.
`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
1.Declare a function called factorialize which takes a number as an argument.
The function should return the factorial product of the  number.
IeL 4! = 24 (4*3*2*1), 5! = 120 (5*4*3*2*1)

2. Call the function in the console and pass in 7 as the argument and log out the result.

`;
 
// Exercise Solution:
const factorialize = (num) => {
  let factoProduct = 1;

  for(let i = 1; i <= num; i++){
    factoProduct *= i;
  }

  return factoProduct;
};
console.log('facto1:', factorialize(7))
console.log('facto1:', factorialize(5))
console.log('facto1:', factorialize(4))