// Given an array, reverse it in place (do not create a new array);
const reverseAnArrayNotUsingAMethod = (nums) => {
    // create pointers
    let startPointer = 0;
    let endPointer = nums.length-1;
    
    // iterate through the array 
    while(startPointer < endPointer) {
      // swap positions of elements
      let elementsSwapped = nums[startPointer];
      nums[startPointer] = nums[endPointer];
      nums[endPointer] = elementsSwapped;
  
      startPointer++;
      endPointer--;
    }
    
    return nums;
  }
  console.log(reverseAnArrayNotUsingAMethod([])) // []
  console.log(reverseAnArrayNotUsingAMethod([1])) // [1]
  console.log(reverseAnArrayNotUsingAMethod([1,2])) // [2,1]
  console.log(reverseAnArrayNotUsingAMethod([1,2,3])) // [3,2,1]
  console.log(reverseAnArrayNotUsingAMethod([1,2,3])) // [3,2,1]
  console.log(reverseAnArrayNotUsingAMethod([1,2,3,"A","B"])) // [B,A,3,2,1]
  
  // now imagine that while we want to reverse the array we want to leave numbers divisible by three in their original place
  const reverseNumsButLeavethoseDivisbleByThree = (arr) => {
    // createPointers
    let leftPointer = 0;
    let rightPointer = arr.length-1;
  
    // iterate through the array
    while(leftPointer < rightPointer) {
      // if an element is divisible by 3 keep it in place else swap positions
      if (arr[leftPointer] % 3 === 0 ) {
        leftPointer++;
      } else {
        
    
      let swappedElement = arr[leftPointer];
        
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = swappedElement;
  
        leftPointer++;
        rightPointer--;
      }
    }
    
    return arr;
  }
  console.log(reverseNumsButLeavethoseDivisbleByThree([6,2,3,7,9,1,5])) //  => [6,5,3,1,9,7,2]
  
  // given an array, loop through the first half and print out each number
  const printHalfOfElementsInArr = (arr) => {
    let midPoint = arr.length / 2;
  
    for(let i = 0; i <= midPoint; i++) {
      console.log(arr[i])
    }
  }
  console.log(printHalfOfElementsInArr([1,2,3,4,5,6]))
  
  // given an array, loop through it backwards
  const iterateThroughArrBackwards = (arr) => {
    for(let i = arr.length -1; i >= 0; i--) {
      console.log(arr[i])
    }
  };
  console.log(iterateThroughArrBackwards([1,2,3,4,5,6]))
  
  // swap only the odd numbers, leaving all other numbers in place
  const swapOddElements = (arr) => {
    let leftPointer = 0;
    let rightPointer = arr.length-1;
  
    while(leftPointer < rightPointer) {
      if (arr[leftPointer] % 2 !== 0) {
        let swappedElement = arr[leftPointer];
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = swappedElement;
  
        leftPointer++;
        rightPointer--;
      } else {
        leftPointer++
      }
    }
  
    return arr;
  };
  console.log(swapOddElements([1,2,4,3]))
  
  