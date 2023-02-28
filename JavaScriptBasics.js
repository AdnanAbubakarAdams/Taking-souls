// when we talk about data we need to know two things - the value of the data and the type of that value
// PRIMITIVE TYPES IN JAVASCRIPT
Number
String
Boolean
null
undefined



// R E P L => read  evaluate print loop

// NUMBERS
positive
negative
whole 
decimal

// P E M D A S => paranthesis exponents multiplication division addition substraction

NaN
// the intentional abscence of a number. or a numeric value that represents something that is...not a number

// VARIABLES => are like labels for values. we can store a value and give it a name so that we can:
// 1. refer back to it later  2. use that value to do stuff  3. or change it later on
example 
// using the LET keyword
let year = 1991;
// make me a variable called "year" and give it the value of 1991
let  numHens = 6;
let numRoosters = 2;
console.log(numHens + numRoosters)
let totalChicken = numHens + numRoosters;
console.log(totalChicken);

let myScore = 0;
myScore += 5;
console.log(myScore);

// using the CONST keyword
// const works just like let. except you  cannot change the value

String =>
// STRINGS => are just another primitive types in javaScript. they represt text and must be wrapped in quotes.
example 
let userName = "Adnan";
console.log(userName)
// strings are indexed, each character has a corresponding index (a positional number)
// eg: C H I C K E N
//     0 1 2 3 4 5 6
// String concatenation
let firstName = "Adnan";
let lastName = "Adams";
let fullName = firstName + " " + lastName;

// STRING METHODS => methods are built-in actions we can perform with individual strings
// they help us do things like ==> searching within a string, replacing part of a string, changing the casing of a string
example 
let msg = " coding is fun and it will be more fun when it starts to pay"
console.log(msg.toUpperCase());
console.log(msg.trim()); // takes out white spaces from both ends
console.log(msg.indexOf("it"));  
console.log(msg.slice(5, 10));  
console.log(msg.slice(-3)); 

// TEMPLATE LITERALS => Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string
example
let product = "Pen";
let qty = 5;
let price = 3.99;
console.log(`You bought ${qty} ${product}'s and the total is: $${price * qty}`);

// Math Object => contains properties and methods for mathematical constants and functions
Math.ceil;
Math.PI;
Math.random()

// DECISION MAKING WITH CODE
// COMPARISONS
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == equality => checks for the equality of value, but not equality of type. coerces both values to same type and compares them. can also lead to some unexpected results
// != not equal => does not care about type
// === strict equality => does really care about type
// !== strict non-equality => does really care about type

// TRUTHY AND FALSY VALUES
// All js values have an inherent truthyness or falsyness about them
// falsy values are => false, 0, empty string(""), null, undefined, NaN, 
// Everything else is truthy!

