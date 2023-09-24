
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
Given the following Comparison List:
1.'dynamite'-"may it end'
2.'Statue of Liberty'-'Sticky Bird free'
3. "eleven plus two'-'twelve plus one'
4.'dragon king'-'going Darn'
5."the Morse Code'-here come dots'
6. 'the nudist colony'-'no untidy clothes'
Write a function which can determine whether the following phrase comparisons
are anagrams or not. If they are anagrams the function should return true
otherwise the function should return false!
*Be mindful to not add or change any spaces between phrases as we are not looking
at regex for this example and copy the strings in the description exactly as is.
Please share your solutions in the discord along with only the anagrams
`;

// simple arr
let arr1 = ['dynamite', 'may it end']
let arr2 = ['Statue of Liberty', 'Sticky Bird free']
let arr3 = ['eleven plus two', 'twelve plus one']
let arr4 = ['dragon king', 'going Darn']
let arr5 = ['the Morse Code', 'here come dots']
let arr6 = ['the nudist colony', 'no untidy clothes']
 
// Exercise Solution:
const decodingMutationsIsAnagram = (arr) => {
  let comparison1 = arr[0].toLowerCase();
  let comparison2 = arr[1].toLowerCase();

  for(let i = 0; i < comparison1.length; i++) {
    if(comparison2.indexOf(comparison1[i]) === -1) return false;
    // console.log('evaluation:', comparison2.indexOf(comparison1[i]))
  };

  return true;
};
console.log('solution: arr1=', decodingMutationsIsAnagram(arr1))
console.log('solution: arr2=', decodingMutationsIsAnagram(arr2))
console.log('solution: arr3=', decodingMutationsIsAnagram(arr3))
console.log('solution: arr4=', decodingMutationsIsAnagram(arr4))
console.log('solution: arr5=', decodingMutationsIsAnagram(arr5))
console.log('solution: arr6=', decodingMutationsIsAnagram(arr6))