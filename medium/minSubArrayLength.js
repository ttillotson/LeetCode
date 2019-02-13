// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// Example: 

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the minimal length under the problem constraint.

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
    let size = nums.length;
    let left = 0; 
    let right = -1;
    let sum = 0;
    let shortest = size + 1;
    
    // for (let i = 0; i < size; i++) {
    //     sum += nums[i];
    //     while (sum >= s) {
    //         shortest = Math.min(shortest, i + 1 - left);
    //         sum -= nums[left++];
    //     }
    // }
    while (left < size) {
        if ((right + 1) < size  && sum < s) {
            // sum += nums[++right];
            right += 1;
            sum += nums[right];
        } else {
            // sum -= nums[left++];
            sum -= nums[left];
            left += 1;
        }
        // console.log('Sum', sum, 'Shortest', shortest)
        if (sum >= s) shortest = Math.min(shortest, right - left + 1);
    }
    
    
    return shortest === size + 1 ? 0 : shortest;
}

// var minSubArrayLen = function(s, nums) {
//     let slow = 0;
//     let fast = 0;
//     let currentSum = sumArr(nums.slice(slow, fast));
//     let shortestLength;
    
//     while (slow < nums.length) {
//         // console.log(currentSum);
//         if (currentSum >= s && (!shortestLength || fast - slow < shortestLength)) shortestLength = fast - slow;
        
//         if (currentSum < s && fast <= nums.length) {
//             fast += 1;
//         } else {
//             slow += 1;
//         }
        
//         currentSum = sumArr(nums.slice(slow, fast));
        
//         // console.log("Slow:", slow, "Fast:", fast);
//     }
    
//     return shortestLength ? shortestLength : 0;
    
//     function sumArr(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i]
//         }
//         return sum;
//     }
// };