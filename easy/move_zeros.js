// Time: O()
// Space: O()
var moveZeroes = function(nums) {
    const seen = {};
    for (let i = 0; i < nums.length - 1; i++) {
        if (!nums[i]) {
            for(let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) {
                    nums[i] = nums[j];
                    nums[j] = 0;
                    break;
                }
            }
        }
    }
    nums;
};
