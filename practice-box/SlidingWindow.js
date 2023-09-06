// FIX SIZE SLIDING WINDOW
// Given an array of integers n and a positive number k, find the maximum sum of any contiguous subarray of size k.
const maxSubArraySum = (nums, k) => {
    // declare vars to save the current and max sums
    let currentSum = 0;
    let maxSumSeen = -Infinity;
    // loop through the array and start adding elemnts of k size
    for(let i = 0; i < nums.length; i++) {
        // adding each element of the array to our current sum
        currentSum += nums[i];
        // condition to check if current index is greater than the given int(k) which it will always be then we go into the if block
        if(i >= k - 1) {
            // update max sum using math.max comparing the current sum to maxsum
            maxSumSeen = Math.max(currentSum, maxSumSeen);
            // sliding window comes in so we substract 1 from k and substract the answer from the current index now we eliminate the element at our result of substraction.
            currentSum -= nums[i - (k - 1)];
        }
    }

    return maxSumSeen;
}
console.log(maxSubArraySum([1, 2, 3, 5, 4, 8, 6, 2], 3)) // 18
console.log(maxSubArraySum([1, 9, -1, -2, 7, 3, -1, 2], 4)) // 13

const getMaxSumSubArrayOfSizeK = (arr, k) => {
    let currSum  = 0;
    let maxSum = -Infinity;

    for(let i = 0; i < k; i++) {
        currSum += arr[i];
    };

    for (let currentIndex = k; currentIndex < arr.length; currentIndex++) {
                    // element              the index - k
        currSum += arr[currentIndex] - arr[currentIndex - k];
        maxSum = Math.max(maxSum, currSum)
    };

    return maxSum;
}
console.log(getMaxSumSubArrayOfSizeK([1, 9, -1, -2, 7, 3, -1, 2], 4));
console.log(getMaxSumSubArrayOfSizeK([1, 2, 3, 5, 4, 8, 6, 2], 3));
console.log(getMaxSumSubArrayOfSizeK([1, 2, 3, 4, 5], 3),"here");


// Given an array calculate the average of the subarrays of k size?
const averageOfSubArrays = (arr, k) => {
    // declare vars to hold progresses
    let averagesArr = [];
    let windowStart = 0;
    let windowSum = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        windowSum += arr[windowEnd];

        if (windowEnd >= k - 1) {
            // push averages of the current window to average array
            averagesArr.push(windowSum / k);
            // substract the element at window start from the window sum
            windowSum -= arr[windowStart];
            // move the window start one spot 
            windowStart++
        }
    }

    return averagesArr;
}
console.log(averageOfSubArrays([1, 2, 3, 4, 5], 3)); // [2,3,4]

const maximumSum = (arr, k) => {
    let currSum = 0;
    let maxSum = -Infinity;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currSum += arr[windowEnd];

        if(windowEnd >= k - 1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= arr[windowStart];
            windowStart++;
        }
    }

    return maxSum;
}
console.log(maximumSum([1, 2, 3, 4, 5], 3), "trying") // 12
console.log(maximumSum([1, 2, 3, 5, 4, 8, 6, 2], 3), "trying") // 18
console.log(maximumSum([1, 9, -1, -2, 7, 3, -1, 2], 4), "trying") // 13
console.log(maximumSum([2, 1, 5, 1, 3, 2], 3), "trying") // 9

// Practice refresher
// You are given an array off integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. 

const maxSumInAWindow = (nums, size) => {
    let maxNumInAWindow = []; 
    let currentMax = 0;

    for(let i = 0; i < nums.length; i++) {
        currentMax = nums[i];

        if (i >= size - 1) {
            currentMax = Math.max(currentMax);
            maxNumInAWindow.push(currentMax)

            currentMax -= nums[i - (size - 1)]
        }
    }

    return maxNumInAWindow;
}
console.log(maxSumInAWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

const maximumSumOfSizeWindow = (nums, size) => {
    let currentSum = 0;
    let maximumSumInArr = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (i >= size - 1) {
            maximumSumInArr = Math.max(currentSum, maximumSumInArr);
            currentSum -= nums[i - (size - 1)]
        }
    }

    return maximumSumInArr;
}
console.log(maximumSumOfSizeWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))