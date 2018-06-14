var permute = function(nums) {
    if (nums.length === 1) return [nums];
    const last = nums[nums.length - 1];
    const pastPermutes = permute(nums.slice(0, -1));
    const permuted = [];

    for (let i = 0; i < pastPermutes.length; i ++) {        
        for (let j = 0; j <= pastPermutes[i].length; j++) {
            let newPermute = pastPermutes[i].slice(0, j).concat(last).concat(pastPermutes[i].slice(j));
            permuted.push(newPermute);
        }
    }
    
    return permuted.sort();
};