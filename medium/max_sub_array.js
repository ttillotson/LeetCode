// Given an integer array nums, find the contiguous subarray (containing at least one number)
//  which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let first = nums[0];
    let sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        if (maxSum < 0 && nums[i] > maxSum) {
            maxSum = nums[i];
            first = nums[i];
            sum = nums[i];
        } else if (sum < 0) {
            sum = 0;
        } else if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
};