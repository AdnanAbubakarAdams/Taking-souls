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
    console.log("you are a baby. you get in for free")
} else if (age < 10) {
    console.log("you are a child. You pay $10")
}  else if (age < 65) {
    console.log("you are an adult. You pay $20")
} else {
    console.log("You are a senior, You pay $10")
}

const password = prompt("please enter a new password");

// pass must be 6+ characters
if (password.length >= 6) {
    // password cannot include space
if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
} else {
    console.log("Password cannot contain spaces!")
}
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}
