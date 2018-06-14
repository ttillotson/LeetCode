// Time: O(n^2)
// Space: O()
var moveZeroes = function(nums) {
    let zeroCount = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (!nums[i]) {
            nums[i] = nums[i + 1];
            nums[i + 1] = 0;
            for(let j = i + 1; j < nums.length - zeroCount; j++) {
                // if (nums[j]) {
                //     nums[i] = nums[j];
                //     nums[j] = 0;
                //     break;
                // }
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
            }
            zeroCount += 1;
        }
        if (i >= nums.length - zeroCount) break;
    }
    // function is not meant to return anything, only mutate the original;
    nums;
};
