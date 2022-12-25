// CONDITIONALS
console.log("its me again");
// console.log("BEFORE CONDITIONAL");
let randomNum = Math.random();
if (randomNum < 0.5) {
    console.log('YOUR NUMBER IS LESS THAN 0.5!')
    console.log(randomNum);
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5")
    console.log(randomNum);
}
// console.log("AFTER CONDITIONAL");

// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();
// if (dayOfWeek === "Monday") {
//     console.log("I love mondays, cos i was born on monday");
// } else if (dayOfWeek === "Saturday") {
//     console.log("Saturday also not a bad day");
// } else if (dayOfWeek === "Sunday") {
//     console.log("Its almost monday again");
// } else if (dayOfWeek === "Tuesday") {
//     console.log("We working till!!");
// }

// 0-5 free 
// 5-10 child $10
// 10-65 adult $20
// 65+ senior $10

const age = 82;

if (age < 5) {
    // console.log("you are a baby. you get in for free")
} else if (age < 10) {
    // console.log("you are a child. You pay $10")
}  else if (age < 65) {
    // console.log("you are an adult. You pay $20")
} else {
    // console.log("You are a senior, You pay $10")
}

// const password = prompt("please enter a new password");
const password = "";
// pass must be 6+ characters
if (password.length >= 6) {
    // password cannot include space
if (password.indexOf(" ") === -1) {
    // console.log("Valid Password!");
} else {
    // console.log("Password cannot contain spaces!")
}
} else {
    // console.log("PASSWORD TOO SHORT! Must be 6+ characters");
}

// LOGICAL OPERATORS 

// && AND => Both sides must be true, for the entire thing to be true;
1 <= 4 && "a" === "a"; // true
9 > 10 && 9 >= 9; // false
"abc".length === 3 && 1+1 === 4; // false
if (password.length >= 6 && password.indexOf(" ") === -1) {
    // console.log("Valid Password");
} else {
    // console.log("Invalid Password");
}

// || OR => if one side is true, the entire thing is true, only one side needs to be true
1 !== 1 || 10 === 10 // true
10/2 === 5 || null // true
0 || undefined // false
const ageOf = -10;
if (ageOf >= 0 && ageOf < 5 || ageOf >= 65) {
    console.log("FREE");
} else if (ageOf >= 5 && ageOf < 10) {
    console.log("$10");
} else if (ageOf >= 10 && ageOf < 65) {
    console.log("$20");
} else {
    // console.log("INVALID AGE");
}

// ! NOT => ! expression returns true if expression is false
!null // true
! (0 === 0) // false
! (3 <= 4) // false

// SWITCH STATEMENTS
// The switch statement is another control-flow statement that can replace multiple statements
// syntax => 
const day = 2;
switch (day) {
    case 1: 
    console.log("monday");
    break;
    case 2: 
    console.log("tuesday");
    break;
    case 3: 
    console.log("wednesday");
    break;
    case 4: 
    console.log("thursday");
    break;
    case 5: 
    console.log("friday");
    break;
    case 6: 
    console.log("saturday");
    break;
    case 7: 
    console.log("sunday");
    break;
    default: 
    console.log("invalid number");
}

// ARRAYS
// => Ordered collections of values, Like list of comments on IG, Collection of levels in a game, songs in a playlist. Arrays have length properties and are zero indexed. Also remember the length is always 1 greater than the maximum index.
// METHODS 
// push => add to the end
// pop => remove from end
// shift => remove from start
// unshift => add to start

// concat => merges arrays
// includes => look for a value
// indexOf => just like string.indexOf
// join => creates a string from an array
// reverse => reverses an array
// slice => copies a portion on an array
// splice => removes/ replaces elements
// sort => sorts an array


// PUSH AND POP
let line = ["adnan", "baba"]
line.push("muba", "jafar");
console.log(line);
let removedPerson = line.pop()
console.log(removedPerson)
console.log(line)

let meAtGym = [];
meAtGym.push(45);
meAtGym.push(25);
meAtGym.push(10);
console.log(meAtGym);
let meDone = meAtGym.pop()
console.log(meDone)

// SHIFT AND UNSHIFT
let removedFront = line.shift();
console.log(removedFront);
let addedFront = line.unshift("Adnan");
console.log(addedFront);
console.log(line)

// CONCAT AND INDEXOF AND INCLUDES AND REVERSE
// concat
let pets = ["fish", "dogs", "cats"];
let wild = ["lion", "leopard", "tiger"]
let combo = pets.concat(wild);
console.log(combo);
// includes returns boolean values
console.log(pets.includes("fish"))
// indexOf
console.log(combo.indexOf("lion"));
// reverse
console.log(combo.reverse())

// SLICE AND SPLICE
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple'];
console.log(colors);
// slice
console.log(colors.slice(2,5)) // starts at index 2 and stops at 5 but 5th index is exclusive
let coolColors = colors.slice(3);
console.log(coolColors);
let warmColors = colors.slice(0,3);
console.log(warmColors);
// splice
console.log(colors.splice(5,1));
let newColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'purple'];
let addCol = newColors.splice(1,0,'red-orange');
console.log(addCol, newColors)

// SORT 

// ARRAYS ARE REFERENCE TYPES AND 2 ARRAYS DO NOT REFER TO SAME SPACE IN MEMORY

// CONST AND ARRAYS => ARRAY VALUES CAN BE CHANGED OR MODIFIED BUT THE VARIABLE NAME OF THAT ARRAY CANNOT BE CHANGED...AS LONG AS THE REFERENCE REMAINS THE SAME

// MULTI-DIMENSIONAL ARRAYS ==> NESTED ARRAYS we can store arrays inside other arrays!
const nextedColors = [
    ['red', 'crimson'],
    ['orange', 'dark orange'], 
    ['yellow', 'golden rod'],
    ['green', 'olive'], 
    ['blue', 'navy blue'],
    ['purple', 'orchid']
]

// OBJECTS literals
// Objects are collections of properties i.e key-value pairs. Rather than accessing data using an index, we use custom keys.
const fitNessData = {
    totalSteps : 308727,
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2:11'
};
// all object keys are converted to strings...except symbols
console.log(fitNessData["totalSteps"]);
console.log(fitNessData.avgCalorieBurn);




