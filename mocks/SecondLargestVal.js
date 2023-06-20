// Write a function that accepts an array of integers as input, and returns the second-largest value in that array.

// EXAMPLES
// [4, -7, 5, 1] -> 	4

// [3, 2, 1, 0] -> 	2

// [-1, -2, -3] -> 	-2

// [1, 5, 2, 5, 3] -> 	5

// [5, 5, 5, 5] -> 	5

const getTheSecondLargestValueInArray = (arr) => {
    // declare vars for the largest value and secondlargest value
    let largestVal = -Infinity;
    let secondLargestVal = -Infinity;

    // loop through the array 
    for (let element of arr) {
        // if the current element is greater than the largest value?
        if (element > largestVal) {
            // secondLargestval = largest value
            secondLargestVal = largestVal;
            // largest value = current element
            largestVal = element;
            // else if the current value is greater than the secondlargest?
        } else if (element > secondLargestVal) {
            // secondlargestval = current element
            secondLargestVal = element;
        }
    }
    // return the secondlargest val
    return secondLargestVal;
};
console.log(getTheSecondLargestValueInArray([4, -7, 5, 1])) // 4
console.log(getTheSecondLargestValueInArray([3, 2, 1, 0])) // 2
console.log(getTheSecondLargestValueInArray([-1, -2, -3])) // -2
console.log(getTheSecondLargestValueInArray([1, 5, 2, 5, 3])) // -2
console.log(getTheSecondLargestValueInArray([5, 5, 5, 5])) // 5