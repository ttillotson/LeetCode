// // Time: O(n^2)
// // Space: O(1)
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) return [i, j];
//         }
//     }
//     return false;
// };
// Time: O(n)
// Space O(n)
let twoSum = function(nums, target) {
    let seen = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (seen[String(difference)] !== undefined) return [seen[String(difference)], i];
        if (seen[String(nums[i])] === undefined) seen[nums[i]] = i;
        // seen[nums[i]] = i;
    }
    return false;
};