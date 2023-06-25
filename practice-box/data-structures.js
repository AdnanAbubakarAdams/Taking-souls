// ARRAYS AND CALL BACKS DRILLS
// Without using the .indexOf array method, write your own findIndex function.
// The function should take an array and the string or number that is to be found.
// If the item is found, it should return the index position. If no matching item is found it should return -1. If there are multiple matches, only the first index positions should be returned.
// For example with the following array: findIndex(letters, 'a') should return 0. findIndex(letters, 2) should return -1.
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a"];
const findIndexOfChar = (letter, char) => {
    for (let i = 0; i < letter.length; i++) {
        if (letter[i] === char) {
            return i;
        }
    }
    return -1
}
console.log(findIndexOfChar(letters, "z"))
console.log(findIndexOfChar(letters, "a"))
console.log(findIndexOfChar(letters, "b"))