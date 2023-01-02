// 1. write a function that returns the key of a targeted value as a string
// eg: ({"a" : 4, "g" : 2, "f" : 5}, 2 ) => returns "g"

// solution === Polya => 
// 1 Read aloud
// 2 ask clarifying questions if neccessary (usually neccessary)
// 3 summarize the problem in your own words
// 4 Give some examples (kiss)
// 5 write the function signature (name and parameters)
// 6 write your psuedo code

// 7 write a test
// 8 make it pass
// 9 repeat 7 and 8 until done

// SOLUTION 
// examples => ({"d" : 3}, 3) => "d" or ({"d" : 3, "f" : 5}, 5) => "f"
const getKeyOfTargetValue = (obj, targetValue) => {
    // iterate through each key/value pair
    for (let [key, value] of Object.entries(obj)) {
        // check if value equals target value
        if (value === targetValue) {
            // return key
            return key;
        }
    }
    return - 1;
}
// TEST
console.log(getKeyOfTargetValue({}, 3) === -1) // true 
console.log(getKeyOfTargetValue({"d" : 3}, 3) === "d") // true 
console.log(getKeyOfTargetValue({"d" : 3, "f" : 5}, 5) === "f") // true
console.log(getKeyOfTargetValue({"a" : 4, "g" : 2, "f" : 5}, 2) === "g") // true


// 2. Write a function that returns the keys of targeted values as an array
// ({"a" : 4, "g" : 2, "f" : 5, "p" : 2}, 2 ) => returns ["g", "p"];
// SOLUTION
// examples => ({"d" : 3}, 3) => ["d"], {"d" : 3, "a" : 5, "f" : 5}, 5) => ["a", "f"])
const getKeysOfValue = (obj, selectedValues) => {
    // create a new array
    let keysOfArr = []
    // iterate through each key value pair
    // for (let [key, value] of Object.entries(obj))
    for (let key in obj) {
        // check to find the keys of the targeted value // if the value === selectedvalue 
        if (obj[key] === selectedValues) {
            // push key into array
            keysOfArr.push(key);
        } 
        
    }
     // return array 
     return keysOfArr;
}
// TEST 
console.log(getKeysOfValue({}, 3)) // []
console.log(getKeysOfValue({"d" : 3}, 3)) // ["d"]
console.log(getKeysOfValue({"a" : 5, "f" : 5}, 5)) // ["a", "f"]
console.log(getKeysOfValue({"a" : 4, "g" : 2, "f" : 5, "p" : 2}, 2 )) // ["g", "p"]


// 3. Write a function so that it handles objects at any depth
// ({"a" : 4, "g" : 2, "f" : 5, "r" : {"l" : 2}}, 2 ) returns ["g", "r", "l"]