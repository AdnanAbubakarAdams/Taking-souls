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

// POP METHOD
Array.prototype.myFirstPop = function() {
    return this.slice(-1);
};
console.log(workThruArr.myFirstPop());

Array.prototype.myPop = function(){
    for(let i = this.length - 1; i > this.length - 2; i--) {
        this[i];
    }
    
    return this;
}
console.log(workThruArr.myPop()) // [7]
// console.log(workThruArr)

// PUSH METHOD
Array.prototype.myPush = function(element) {
    let arrLength = this.length + 1;

    this[arrLength - 1] = element;

    return this
}
console.log(workThruArr.myPush(8));
// console.log(workThruArr);

// REVERSE METHOD
Array.prototype.myReverse = function() {
    let arrMidPoint = Math.floor(this.length / 2);

    for(let i = 0; i < arrMidPoint; i++) {
        [this[i], this[this.length - 1 - i]] = [this[this.length - 1 - i], this[i]];
    };

    return this;
};
console.log(workThruArr.myReverse());

// SHIFT METHOD
Array.prototype.myShift = function() {
    this.myReverse();
    // console.log(this);
    this.myPop();
    // console.log(this);
    this.myReverse();

    return this;
}
console.log(workThruArr.myShift(), "shifting");

// UNSHIFT METHOD
Array.prototype.myUnshift = function(element) {
    this.myReverse();
    this.myPush(element);
    this.myReverse();

    return this;
}
console.log(workThruArr.myUnshift(0));

// CONCAT METHOD
let created = [1,2,3,4,5]
Array.prototype.myConcat = function(created) {
    let concatedArr = [...this];

    for(let element of created) {
        concatedArr.myPush(element);
    }

    return concatedArr;
};
console.log(created.myConcat([6,7,8,9,10]));