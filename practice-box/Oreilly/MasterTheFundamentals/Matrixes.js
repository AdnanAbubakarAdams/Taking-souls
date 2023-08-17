// 2D ARRAYS
// TIMES TABLE
let timesTable = [
    [1, 2, 3, 4, 5],
    [2, 4, 6, 8, 10],
    [3, 6, 9, 12, 15],
    [4, 8, 12, 16, 20],
    [5, 10, 15, 20, 25]
]

// print out the values of the 2d array i.e matrix
for (let row = 0; row < timesTable.length; row++) {
    let line = "";
    for (let column = 0; column < timesTable[row].length; column++) {
        let value = timesTable[row][column];
        // console.log(value)
        line += value + " "
    }

    console.log(line);
}