
// Course Notes:
document.getElementById("lesson").innerHTML = `
Uppercase - Capitalize letters in strings
When you cycle through string and wish to format the text it helps to consider 
a breakdow of components
`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
A company exec comes up to you and ask if you can write some algorithms to help
automate the text format on the UI. If you can spruce it up and they increase sales,
a big bonus is coming your way $$$$$
1. Write a function titlecapitalize which can take any string as an argument and return
only the first letter of each word in the string capitalized.
2. Write a second function sentenceCapitalize which can take any string as an argument
and return only the first letter of the first word in the string capitalized.
3. Call and log titleCapitalize with the following argument:
"the future is now'
4. Call and log sentenceCapitalize with the following argument:
"hello, my fiend'
5. Share your solutions on the discord in the #alogrithms channel!
Good luck and bring home that cheddah!
`;
 
// Exercise Solution:
const titleCapitalize = (str) => {

let splittedStr = str.toLowerCase().split(" ");
let finalTitle = "";

for(let i = 0; i < splittedStr.length; i++) {
finalTitle += splittedStr[i].charAt(0).toUpperCase() + splittedStr[i].slice(1) + " ";
// finalTitle = splittedStr[i][0].toUpperCase() + splittedStr[i].slice(1);
};

return finalTitle
// return finalTitle.join(" ")
};
console.log('capitalizeTitle:', titleCapitalize('the future is now'));

const sentenceCapitalize = (str) => {
return str.charAt(0).toUpperCase() + str.slice(1);
};
console.log('capitalizeInSentence:', sentenceCapitalize('hello, my fiend'))
