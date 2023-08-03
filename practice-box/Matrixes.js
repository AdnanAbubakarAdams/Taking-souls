// MULTIDIMENSIONAL ARRAYS => HOLDS A MATRIX OF ELEMENTS. THAT IS AN ARRAY OF ARRAYS

// BUILDING MATRIXES

function matrixes(nums) {
  let matrix = [];

  for (let i = 0; i < nums; i++) {
    let col = [];
    for (let j = 0; j < nums; j++) {
      col.push(j);
    }
    matrix.push(col);
  }

  return matrix;
}
// console.log(matrixes(3));

let matrix = [
  [0, 2, 4, 5],
  [9, 0, 8, 1],
  [0, 0, 9, 1],
  [3, 5, 9, 2],
];
// 1. console.log each element in the array
for(let i = 0; i < matrix.length; i++) {
    // console.log(matrix[i])
    for (let j = 0; j < matrix[i].length; j++) {
        // console.log(matrix[i][j]);
    }
}
// 2. find the max value in the matrix 
const findMaxValueInMatrix = () => {
    let maxValue = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (maxValue < matrix[i][j]) {
                maxValue = matrix[i][j]
            }
            // maxValue = Math.max(maxValue, matrix[i][j])
        }
    }

    return maxValue;
}
// console.log(findMaxValueInMatrix(), "im here");

// 3. find the sum of each row
const sumOfRows = (matrix) => {

    let results = [];
    const sumOfRowOne = matrix[0][0] + matrix[0][1] + matrix[0][2] + matrix[0][3];
    const sumOfRowTwo = matrix[1][0] + matrix[1][1] + matrix[1][2] + matrix[1][3];
    const sumOfRowThree = matrix[2][0] + matrix[2][1] + matrix[2][2] + matrix[2][3];
    const sumOfRowFour = matrix[3][0] + matrix[3][1] + matrix[3][2] + matrix[3][3];

    // for(let i = 0; i < matrix.length; i++) {
    //     for(let j = 0; j < matrix[i].length; j++) {
    //         // sumOfRowOne = matrix[i][j];
    //         sumOfRowOne = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] + matrix[i][j + 3]
    //     }
    // }
    results.push(sumOfRowOne, sumOfRowTwo, sumOfRowThree, sumOfRowFour);
    return results;
}
console.log(sumOfRows([[0, 2, 4, 5],
    [9, 0, 8, 1],
    [0, 0, 9, 1],
    [3, 5, 9, 2]]))

// 4. find the greatest sum of any two horizontally consecutive numbers

let myCars = [
  ["Rang-Rover", "Mustang", "Explorer"],
  ["Camry", "Bugatti", "Tesla"],
  ["Highlander", "Corvette", "F-150"],
];

// ITERATING THROUGH MY CARS TO PRINT OR ADD OR CHANGE THEM

for (let i = 0; i < myCars.length; i++) {
  // console.log(myCars[i])
  for (let j = 0; j < myCars[i].length; j++) {
    // console.log(i, j, myCars[i][j]);
  }
}
