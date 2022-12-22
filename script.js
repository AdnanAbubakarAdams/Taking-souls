// CONDITIONALS
console.log("its me again");
console.log("BEFORE CONDITIONAL");
let randomNum = Math.random();
if (randomNum < 0.5) {
    console.log('YOUR NUMBER IS LESS THAN 0.5!')
    console.log(randomNum);
} else {
    console.log("YOUR NUMBER IS GREATER THAN 0.5")
    console.log(randomNum);
}
console.log("AFTER CONDITIONAL");

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
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
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
    console.log("INVALID AGE");
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
