// ARRAYS VS LIST

// ARRAY
// - Has a fixed size
// - You can create an arra by specifying its ResizeObserverSize
// - you can write to an  arrays with: a[index] = value
// - you can read from an array with x = a[index]

// LIST
// - has no fixed size
// - is often created empty the values are added to it
// - you can add something to a list with l.add(value)
// - you can read something from a list with x = l.get(index)

// Fixed Array
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekly_weather = [70, 72, 68, 65, 74, 74, 73];
// instead of using console.log to print all of it
console.log('the weather on Sunday was:', weekly_weather[0])
// use a for loop to iterate through every value in the array

for (let i = 0; i < weekdays.length; i++) {
    // console.log(weekdays[i]);
    let weekday = weekdays[i];
    let temperature = weekly_weather[i];

    console.log(`the temperature on ${weekday} was ${temperature}`);
}

//  calculate the average weather for this week
const averageTemperatureForWeek = () => {
    let temperatureSum = 0;

    for (let temp of weekly_weather) {
        temperatureSum += temp
    }

    let averageTemp = Math.ceil(temperatureSum / weekly_weather.length);
    console.log(`The average weather temperature for this week is ${averageTemp}`);
}
averageTemperatureForWeek();

// get the minimum val from weekly_weather without a method
const minimumVal = () => {
    let minVal = weekly_weather[0];

    for(let i = 0; i < weekly_weather.length; i++) {
        let currVal = weekly_weather[i]
        if (currVal < minVal) {
            minVal = currVal;
        }
    }

    console.log(minVal)
}
minimumVal();

// get the maximum val from weekly_weather without a method
const maximumVal = () => {
    let maxVal = weekly_weather[0];

    for (let i = 0; i < weekly_weather.length; i++) {
        let currVal = weekly_weather[i];
        if (currVal > maxVal) {
            maxVal = currVal;
        }
    }

    console.log(maxVal)
}
maximumVal()

// accessing in pairs    
// const ww = [65, 70, 72, 56, 56, 73, 73];

// Arrays with functions
// take an array and return the total of the difference of each value in the array
// input = [2, 6, 12, 19]  output = (4 + 6 + 7) === 17;

function sumOfElementDifference(arr) {
    let sumOfElements = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let valueOne = arr[i];
        let valueTwo = arr[i + 1];
        let difference = Math.abs(valueOne - valueTwo);

        sumOfElements += difference;
    }

    return sumOfElements;
}
console.log(sumOfElementDifference([])) // 0
console.log(sumOfElementDifference([11])) // 0
console.log(sumOfElementDifference([9, 11])) // 2
console.log(sumOfElementDifference([9, 11, 2])) // 11
console.log(sumOfElementDifference([2, 6, 12, 19])) // 17

// return true if the given array contains a given value
// input = [14, 55, 67, 88, 91], value = 88, output = true,  input = [1, 5, 6, 8, 9], value = 3, output = false,

function checkIfArrayContainsTargetVal(arr, val) {

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }

    return false;
};
console.log(checkIfArrayContainsTargetVal([14, 55, 67, 88, 91], 88)) // true
console.log(checkIfArrayContainsTargetVal([1, 5, 6, 8, 9], 3)) // false

// return true if array is sorted in ascending order? where each element is greater or equal to element preceding it
const checkIfArrayIsSorted = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr[i], arr[i-1])
        if (arr[i] < arr[i - 1]) {
           return false;
        }
   
    }

    return true;
}
console.log(checkIfArrayIsSorted([14, 55, 67, 88, 91])) // true
console.log(checkIfArrayIsSorted([4, 5, 7, 8, 1])) // false

// return true if the array is sorted either ascending or descending order

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i + 1] || arr[i] > arr[i + 1]) {
            return true;
        } 
    }

    return false;
}
console.log(isSorted([1, 2, 3, 4, 5]))
console.log(isSorted([5, 4, 3, 2, 1]))