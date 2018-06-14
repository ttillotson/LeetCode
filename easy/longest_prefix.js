// Brute Force
// Time: O(n^n[0])
// Space: O(1)
var longestCommonPrefix = function(strs) {
    let longest = "";
    for (let i = 0; i < strs[0].length; i++ ) {
        let letter = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (letter !== strs[j][i]) return longest;
        }
        longest += letter;
    }
    return longest;
};