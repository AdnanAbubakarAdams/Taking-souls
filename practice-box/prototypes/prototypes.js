// creating length of ARR PROTOTYPE
let workThruArr = [1, 2, 3, 4, 5, 7];
Array.prototype.myLength = function() {
    let count = 0;

    for(let element of this) {
        count++;
    }

    return count;
}
console.log(workThruArr.myLength()); // 6

// FIND THE MAX ELEMENT IN AN ARRAY
Array.prototype.myMaxElement = function() {
    let maxNumber = this[0];

    for (let element of this) {
        if (element > maxNumber) {
            maxNumber = element;
        }
    }

    return maxNumber;
}
console.log(workThruArr.myMaxElement()); // 7

// FIND THE MIN ELEMENT IN AN ARRAY
Array.prototype.myMinElement = function() {
    let minNumber = this[0];

    for (let element of this) {
        if (element < minNumber) {
            minNumber = element;
        }
    }

    return minNumber;
}
console.log(workThruArr.myMinElement());

// THE INCLUDES METHOD
Array.prototype.myIncludes = function(num) {

    for(let element of this) {
        if (element === num) {
            return true
        }
    }

    return false;
}
console.log(workThruArr.myIncludes(4)) // true
console.log(workThruArr.myIncludes(9)) // false

// FIND THE AVERAGE OF AN ARRAY
Array.prototype.myAverage = function() {
    let sum = 0;

    for(let element of this) {
        sum += element;
    }

    // return sum / this.length;
    return Math.floor(sum / this.length); // odd length of an array
}
console.log(workThruArr.myAverage()) 

// ADD SECOND TO LAST
Array.prototype.addSecondToLast = function(num) {

    let elementPopped = this.pop();

    this.push(num);
    this.push(elementPopped);

    return workThruArr;
}
console.log(workThruArr.addSecondToLast(6)); // [1,2,3,4,5,6,7]

// 
