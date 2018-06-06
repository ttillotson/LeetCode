// Time: O(n)
// Space: O(n)
var lengthOfLongestSubstring = function(s) {
    const seen = {};
    let longest = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]] !== undefined && start <= seen[s[i]]) {
            start = seen[s[i]] + 1;
        }
        seen[s[i]] = i;
        if (i - start + 1 > longest) longest = i - start + 1;
    }

    return longest;
};