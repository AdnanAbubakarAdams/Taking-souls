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

// Nesting arrays and objects 
const comments = [
    {username: "tammy", text: "lmao", votes: 9},
    {username: "rondo", text: "getthehellout", votes: 12323},
    {username: "kudi", text: "lmao", votes: 9}
]


// LOOPS => loops allow us to repeat code: print hello 10 times , sum all numbers in an array, types of loops are => for loop, while loop, for...of loop, for...in loop

// FOR LOOPS
for (let i = 0; i <= 20; i++) {
    // console.log(i)
    // prints out the numbers 1-20
}
for (let i = 0; i <= 20; i += 2) {
    // console.log(i)
    // prints out even numbers to 20
}

for (let i = 100; i >= 0; i -= 10) {
    // console.log(i)
}

// LOOPING OVER ARRAYS
const animals = [
    "Aardvark",
    "Aardwolf",
    "African Elephant",
    "African Tree Pangolin",
    "Alligator",
    "Alpaca",
    "Anteater",
    "Antelope",
    "Ape(s)",
    "Arabian Horse",
    "Armadillo",
    "Arthropod(s)",
    "Asian Elephant",
    "Aye-Aye",
    "Baboon",
    "Badger",
    "Bandicoot",
    "Bangle Tiger",
    "Bat(s)",
    "Bearded Dragon",
    "Beaver",
    "Beluga Whale",
    "Bengal Tiger",
    "Big-Horned Sheep",
    "Billy Goat",
    "Bird(s)",
    "Bison",
    "Black Bear",
    "Black Footed Rhino",
    "Black Howler Monkey",
    "Black Rhino",
    "Blacktip Reef Shark",
    "Blue Shark",
    "Blue Whale",
    "Boar",
    "Bob-Cat",
    "Bonobo",
    "Bottlenose Dolphin",
    "Bottlenose Whale",
    "Brown Bear",
    "Buffalo",
    "Bull",
    "Bull frog",
    "Caiman Lizard",
    "Camel",
    "Capuchin Monkey",
    "Capybara",
    "Caribou",
    "Cat(s)",
    "Cattle",
    "Cheetah",
    "Chimpanzee",
    "Chinchilla",
    "Chipmunk",
    "Common Dolphin",
    "Common Seal",
    "Coral(s) and Anemone(s)",
    "Cougar",
    "Cow(s)",
    "Coyote",
    "Crocodile",
    "Crustacean(s)",
    "Dart Frog",
    "Deer",
    "Degus",
    "Dik-Dik",
    "Dingo",
    "Dog(s)",
    "Dogfish Shark",
    "Dolphin",
    "Donkey",
    "Door Mouse",
    "Dormouse",
    "Draft Horse",
    "Duckbill Platypus",
    "Dugong",
    "Dusky Shark",
    "Elephant",
    "Elephant Seal",
    "Elk",
    "Ermine",
    "Eurasian Lynx",
    "Ferret",
    "Fish(es)",
    "Florida Panther",
    "Flying Fox",
    "Fox",
    "Fresh Water Crocodile",
    "Frog",
    "Fur Seal",
    "Galapagos Land Iguana",
    "Galapagos Shark",
    "Galapagos Tortoise",
    "Gazelle",
    "Gecko",
    "Giant Anteater",
    "Giant Panda",
    "Gibbon",
    "Giraffe",
    "Goat",
    "Gopher",
    "Gorilla",
    "Gray Fox",
    "Gray Nurse Shark",
    "Gray Reef Shark",
    "Gray Whale",
    "Great White Shark",
    "Green Poison Dart Frog",
    "Green Sea Turtle",
    "Grizzly Bear",
    "Groundhog",
    "Guinea Pig",
    "Hairy-Nosed Wombat",
    "Hammerhead Shark",
    "Harbor Porpoise",
    "Harbor Seal",
    "Hare",
    "Harp Seal",
    "Hawaiian Monk Seal",
    "Hedgehog",
    "Hippopotamus",
    "Horn Shark",
    "Horse(s)",
    "Howler Monkey",
    "Humpback Whale",
    "Hyena",
    "Hyrax",
    "Iguana",
    "Iguanodon",
    "Impala",
    "Insect(s)",
    "Irrawaddy Dolphin",
    "Jackal",
    "Jackrabbit",
    "Jaguar",
    "Jellyfish",
    "Kangaroo",
    "Kermode Bear",
    "Killer Whale",
    "Koala",
    "Komodo Dragon",
    "Kookaburra",
    "Lama",
    "Lamb",
    "Lancelet",
    "Least Weasel",
    "Leatherback Sea Turtle",
    "Lemming",
    "Lemon Shark",
    "Lemur",
    "Leopard",
    "Leopard Gecko",
    "Leopard Seal",
    "Leopard Shark",
    "Lion",
    "Llama",
    "Loggerhead Turtles",
    "Lynx",
    "Mako Shark",
    "Manatee",
    "Manta Ray",
    "Mantis",
    "Marbled Salamander",
    "Marmot",
    "Marsupial(s)",
    "Meerkat",
    "Megamouth Shark",
    "Melon-Headed Whale",
    "Miniature Donkey",
    "Mink",
    "Minke Whale",
    "Mole",
    "Mole Salamander",
    "Mollusk(s)",
    "Mongoose",
    "Monitor Lizard",
    "Monk Seal",
    "Monkey",
    "Moose",
    "Mountain Lion",
    "Mouse",
    "Mule",
    "Muskox",
    "Muskrat",
    "Naked Mole Rat",
    "Narwhal",
    "Nautilus",
    "Newt",
    "Northern Right Whale",
    "Nurse Shark",
    "Nutria",
    "Nyala",
    "Ocelot",
    "Octopus",
    "Okapi",
    "Opossum",
    "Orangutan",
    "Orca",
    "Otter",
    "Ox",
    "Panda",
    "Panther",
    "Pig",
    "Pilot Whale",
    "Pine Marten",
    "Platypus",
    "Polar Bear",
    "Porcupine",
    "Porpoise",
    "Possum",
    "Potbellied Pig",
    "Potto",
    "Prairie Dog",
    "Proboscis Monkey",
    "Przewalski's Wild horse",
    "Puma",
    "Pygmy Hippopotamus",
    "Pygmy Right Whale",
    "Pygmy Sperm Whale",
    "Quokkas",
    "Quolls",
    "Rabbit",
    "Raccoon",
    "Rat",
    "Ray",
    "Red Fox",
    "Red Kangaroo",
    "Red Panda",
    "Red-Eyed Tree Frog",
    "Reef Shark",
    "Reindeer",
    "Rhino",
    "Rhinoceros",
    "Right Whale",
    "Ringed Seal",
    "Risso's Dolphin",
    "River Dolphin",
    "Salamander",
    "Sandbar Shark",
    "Scalloped Hammerhead Shark",
    "Sea Lion",
    "Sea Turtles",
    "Seal",
    "Sei Whale",
    "Shark",
    "Sheep",
    "Shortfin Mako Shark",
    "Siberian Tiger",
    "Silky Shark",
    "Skink",
    "Skunk",
    "Slender Loris",
    "Sloth",
    "Sloth Bear",
    "Snake(s)",
    "Snow Fox",
    "Snow Hare",
    "Snow Leopard",
    "Snow Monkey",
    "Somali Wild Ass",
    "Spectacled Bear",
    "Sperm Whale",
    "Spider Monkey",
    "Spiny Dogfish Shark",
    "Spotted Dolphin",
    "Squirrel",
    "Star-Nosed Mole",
    "Stellar Sea Lion",
    "Striped Dolphin",
    "Sun Bear",
    "Takin",
    "Tamarin",
    "Tapir",
    "Tasmanian Devil",
    "Tasmanian Tiger",
    "Terrapin",
    "Thresher Shark",
    "Tiger",
    "Tiger Salamander",
    "Tiger Shark",
    "Topi",
    "Tortoise",
    "Tree Frog",
    "Turtle",
    "Uakari",
    "Vampire Bat",
    "Vancouver Island Marmot",
    "Vervet Monkey",
    "Vicuna",
    "Vole",
    "Wallaby",
    "Walrus",
    "Warthog",
    "Water Buffalo",
    "Weasel",
    "Whale Shark",
    "Whale(s)",
    "White Rhino",
    "White Tailed Deer",
    "White-Beaked Dolphin",
    "Whitetip Reef Shark",
    "Wildcat",
    "Wildebeest",
    "Wobbegong Shark",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodchuck",
    "Yak",
    "Yellow-Bellied Marmot",
    "Zebra",
    "Zebu",
    "Zorilla"
]

for (let i = 0; i < animals.length; i++) {
    // console.log(i, animals[i])
}
// RUNNING IT BACKWARDS
for (let i = animals.length -1; i >= 0; i--) {
    // console.log(animals[i])
}
// NESTED LOOPS => for each iteration of the outer loop(i) the inner loop(j) run to its entirety
for (let i = 1; i <= 10; i++) {
    // console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        // console.log(`j is: ${j}`)
    }
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    // console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        // console.log(row[j])
    }
}

// WHILE LOOPS => while loops continue running as long as the test condition is true.
let count = 0;
while (count < 10) {
    count ++ ;
    console.log(count);
}

// const secret = "AdnanRondo";/
// let guess = prompt("enter the secret code...");
// while (guess !== secret) {
//    guess = prompt("enter the secret code...");
// }
// console.log("congrats you got the secret now");

// Building a guessing game
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"))
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;
// // console.log(targetNum);
// while (parseInt(guess) !== targetNum) {
//     if (guess === "q") break;
//     attempts ++;
//     if (guess > targetNum) {
//         guess = prompt ("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:")
//     }
// }
// if (guess === "q") {
//     console.log("OK, YOU QUIT")
// } else {
//     console.log("CONGRATS YOU WIN");
//     console.log(`You got it! It took you ${attempts} guesses`);
// }


// FOR..OF LOOP 
// A nice and easy way of iterating over arrays (or other iterable objects)
const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'basketball']
for (let sub of subreddits) {
    console.log(`visit reddit.com/r/${sub}`)
}

const eightPointFour = [
    ['Adnan', 'John', 'Mason', 'Ola'],
    ['Kalilah', 'Sam', 'Kenyatta', 'Zane'],
    ['Ametza', 'George', 'Ziq', 'T.k']
]

for (let row of eightPointFour) {
    for (let student of row) {
        console.log(student)
    }
}
// using for of to iterate over a string 
for (let char of "Abubakar Adnan Adams") {
    console.log(char)
}

// FOR IN LOOP => MAINLY USED TO ITERATE OVER OBJECTS WITH KEY VALUE PAIRS
const testScores = {
    Adnan : 95,
    Ibrahim : 91,
    Brown : 94,
    Slow : 90,
    Robert : 92,
    Escoba : 93,
    Seth : 93,
    Julius : 88,
    coolio : 85
}
for (let gees in testScores ) {
    console.log(`${gees} got ${testScores[gees]} in our end of sem`)
}
// NEW OBJECT METHODS 
console.log(Object.keys(testScores)) // returns all the keys of an object
console.log(Object.values(testScores)) // returns all the values of an object
console.log(Object.entries(testScores)) // returns nested array of key value pairs

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

// FUNCTIONS
// => Mainly reusable chunks of code that we have wrapped up and given a name so we use them at any point
// reusable procedures
// * functions allow us to write reusable, modular code
// * we define a "chunk" of code that we can then execute at a later point
// * we use the all the time
function singForMe() {
    console.log("putuu")
    console.log("pataa")
    console.log("spataa")
}
console.log(singForMe())

// Arguments ==> are inputs that are passed in place of parameters of a function
const greet = (firstName, middleName, lastName) => {
    console.log(`the KING'S name is: ${firstName} ${middleName} ${lastName}`)
}
greet("Adnan", "Abubakar", "Adams");

// Define a function called rant which accepts a string argument called message.  The function should print out an uppercased version of message 3 times (with 3 separate calls to console.log).  For example, rant("I hate beets") should print out:
// I HATE BEETS
// I HATE BEETS
// I HATE BEETS
const rant = (message) => {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase())
    }
 }
 rant("I hate beets")

 const repeat = (str, numTimes) => {
    let result = "";
    for (let i = 0 ; i < numTimes; i++) {
        result += str;
    }
    console.log(result)
 }
 repeat(" i love my family", 5)

 // THE RETURN KEY WORD ==> Built in methods return values when we call them. we can store those values... Also the return statement ends function execution and specifies the value to be returned by that function
//  It's time to practice returning values from a function! Write a simple function multiply which accepts two numerical arguments and returns their product (multiply them together).
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(4,5) === 20) // true
console.log(multiply(2,3) === 6) // true
console.log(multiply(9,9) === 20) // false == 81


// often struggle to know whether I should wear shorts or pants on a given day. (this is a complete lie.  It's really not that hard to decide.) Please help me decide by writing me a function called isShortsWeather. 
// It should accept a single number argument, which we will call temperature(but you can name it whatever you want, of course). 
// If temperature is greater than or equal to 75, return true. 
// Otherwise, return false.  
const isShortsWeather = (temperature) => {
    if(temperature >= 75) {
        return true;
    } else {
        return false;
    }
}
console.log(isShortsWeather(80)) // true
console.log(isShortsWeather(48)) // true
console.log(isShortsWeather(75)) // true

// Please write a function called lastElement which accepts a single array argument.  The function should return the last element of the array (without removing the element).  If the array is empty, the function should return null.
const lastElement = (array) => {
    if (!array.length) return null;
    return array[array.length - 1];
    // let lastEle = array.pop() // modifies array.. its destructive
    // return lastEle;
}
console.log(lastElement([3,5,7]))

// Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).
const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(capitalize("eggplant"))
console.log(capitalize('pamplemousse'))
console.log(capitalize('squid'))

// Write a function called sumArray which accepts a single argument: an array of numbers.  It should return the sum of all the numbers in the array.
const sumArray = (num) => {
    let arrTot = 0;
   for (let i = 0; i < num.length; i++) {
       arrTot += num[i]
   }
   return arrTot;
//    return num.reduce((a, b) => a + b, 0) one-liner
}
console.log(sumArray([1,2,3]) === 6) // true
console.log(sumArray([21,20,3]) === 44) // true

// Write a function called returnDay. this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)  If the number is less than 1 or greater than 7, the function should return null. In some countries Sunday is treated as the first day of the week, but for this exercise we will use Monday as the first day.
// DEFINE YOUR FUNCTION BELOW:

const returnDay = (day) => {
    switch (day) {
        case 1 : 
            return "Monday";
            break;
        case 2 : 
            return "Tuesday";
            break;
        case 3 : 
            return "Wednesday";
            break;
        case 4 : 
            return "Thursday";
            break;
        case 5 : 
            return "Friday";
            break;
        case 6 : 
            return "Saturday";
            break;
        case 7 : 
            return "Sunday";
            break;
        default :
        return null;
        break;
    }
}
console.log(returnDay(1) === "Monday") // true
console.log(returnDay(5)) // friday

// SCOPE => variable visibility, the location where a variable is defined dictates where we have access to that variable 
// GLOBAL SCOPE
// BLOCK SCOPE
// LEXICAL SCOPE


// Define a function that returns the square of a number. Define the function as a function expression, stored in a variable called square. 
const square = function(num) {
    return Math.pow(num, 2)
}
console.log(square(4) === 16) // true
console.log(square(2)) // 4

// HIGHER ORDER FUNCTIONS => are functions that operate on or with other functons. they can accept other functions as arguments // return a function
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 5) + 1;
    console.log(roll)
}
console.log(callTwice(rollDie))
console.log(callTenTimes(rollDie))


// ARRAY CALL BACK METHODS
// 1. FOREACH
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
numbers.forEach((num) => {
    if(num % 2 === 0) {
    console.log(num)
    }
});

const movies = [
    {
        title: 'Amadeus',
        year: 1990,
        score: 87
    },
    {
        title: 'Stand By Me',
        year: 1991,
        score: 80
    },
    {
        title: 'Parasite',
        year: 1992,
        score: 60
    },
    {
        title: 'Alien',
        year: 1993,
        score: 77
    },
    {
        title: 'Apocalypto',
        year: 1994,
        score: 98
    },
    {
        title: 'Troy',
        year: 1995,
        score: 94
    }
]

movies.forEach((movie) => {
    console.log(`${movie.title} - ${movie.score}/100`)
})

// 2.MAP => map creates a new array with the results of calling a  callback on every element in the array
const doubles = numbers.map((num) => {
    return num * 2
});
console.log(doubles)

const getArrayOfTitles = movies.map((movie) => {
    return movie.title
})
console.log(getArrayOfTitles)

// 3. FILTER => creates a new array with all elements that pass the test implemented by the provided function
const numToFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
console.log(numToFilter.filter((num) => num < 10));
const goodMovies = movies.filter((movie) => movie.score > 80).map(movie => movie.title)
console.log(goodMovies)
const badMovies = movies.filter((movie) => movie.score < 70);

// 4. EVERY => test whether all elements in the array pass the provided function. it returns a boolean value
// 5. SOME => Similar to everry, but returns true if ANY of the array elements pass the test function
const allEvens = (array) => {
    return array.every((arr) => arr % 2 === 0)
}
allEvens([2,4,6,8])
allEvens([1,4,6,8])
allEvens([1,2,3])

// REDUCE => Executes a reducer function on each element of the array, resulting in a single value
// reduce((accumlator, currentValue), initialvalue)
const prices = [9.99, 1.50, 19.99, 49.99, 30.50]
// using a regular loop
let totalPrices = 0;
for (let price of prices) {
 totalPrices += price;
}
console.log(totalPrices);
// using the reduce method
let reducedTotal = prices.reduce((acc, curr) => acc + curr);
console.log(reducedTotal)
// using reduce to return min value of an array
let minPrice = prices.reduce((minimumPrice, currentPrice) => {
    if (currentPrice < minimumPrice) {
        return currentPrice;
    } 
    return minimumPrice;
})
console.log(minPrice)

let highestRatedMovie = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score){
        return currentMovie;
    }
    return bestMovie;
})
console.log(highestRatedMovie) 

// THE SPREAD OPERATOR
/** this syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. */
const nums = [20, 21, 24, 30, 55, 49, 90]
console.log(Math.max(...nums));
console.log(Math.min(...nums))

// making copies with spread
const cats = ["sisco", "blackie", "blue", "rocket"];
const dogs = ["captain", "white", "queen", "tigerbay"];
let allPets = [...cats, ...dogs];
console.log(allPets);
// WITH OBJECTS
const formData = {
    email: "adnanrod@gmail.com",
    password: "unitedforlife",
    username: "adnanR9"
}
const newUser = {...formData, id: 1234, isAdmin: true}
console.log(newUser)

// destrusturing 
// ARRAYS
const numsDes = [95, 93, 20, 21, 24, 30, 55, 49, 90];
const [gold, silver] = numsDes;
console.log(gold, silver);
// OBJECTS
const user = {
    firstName: "Adnan",
    lastName: "Abubakar Adams",
    email: "adnan@gmail.com",
    DOB: 1991,
    city: "Bronx", 
    state: "New-York"
};
const { firstName, lastName, email, city, DOB, state } = user;
// update a property
const { DOB: dob } = user
console.log(user);
// DESTRUCTURING PARAMS ==>STILL USING MOVIES UP THERE
const topRankedMoviews = movies.filter(({title, year, scores}) =>  {
    return `${title} was made in ${year}, and is rated: ${scores}`
});
console.log(topRankedMoviews)

