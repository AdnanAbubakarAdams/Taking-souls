// Given two arrays, write a function that returns an array of all elements that appear in both arrays without duplicates.

// EXAMPLES:
// Given:
// let firstArr = [1,2,2,1]
// let secondArr = [2,2]

// Answer:
// let correctOutput = [2]

// Given:
// let firstArr = [4,9,5]
// let secondArr = [9,4,9,8,4]

// Answer:
// let correctOutput = [9,4]

// const intersection = (nums1, nums2) => {
//   // your code here
// };

const commonElementsInBothArrays = (arr1, arr2) => {
    // create an array to store common elements found in both arr's
    let foundElementsinBoth = [];

    // loop through one of the arrays and check if the current element is found in the second arr
    for (let i = 0; i < arr1.length; i++) {
        // set a condition to check if the current element is found in the other array
        if (arr2.includes(arr1[i])) {
            // a nested condition to check if the array storing the found elements does not already contain the current element 
            if(!foundElementsinBoth.includes(arr1[i])) {
                // after the condition we push what we find
                foundElementsinBoth.push(arr1[i]);
            }
        }
    }
    // return our array of findings
    return foundElementsinBoth;
}
console.log(commonElementsInBothArrays([1,2,2,1], [2,2])) // [2]
console.log(commonElementsInBothArrays([4,9,5], [9,4,9,8,4])) // [9, 4] or [4, 9]

const elementsFoundInBothArrays = (arr1, arr2) => {
    let arrSet1 = new Set(arr1);
    let arrSet2 = new Set(arr2);

    return [...arrSet1].filter((element) => arrSet2.has(element));
}
console.log(elementsFoundInBothArrays([1,3,3,6], [4,3])) // [3]
console.log(elementsFoundInBothArrays([4,9,5], [9,4,9,8,4])) // [4, 9]
