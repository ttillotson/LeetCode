var longestPalindrome = function(s) {
    function isPalindrome(str) {
        const mid = Math.floor(str.length / 2);
        for(let i = 0; i < mid; i++) {
            let reverseIdx = str.length - 1 - i;
            if (str[i] !== str[reverseIdx]) return false;
        }
        return true;
    }
    
    const seen = {};
    let longest = "";
//     Iterate through the str
//     if its a letter I've seen I'll test the slice for palindrome and update
//     else I'll push value in and check those values on repeat
    for (let i = 0; i < s.length; i++) {
        if (seen[s[i]]) {
            seen[s[i]].forEach(function(idx){
                if (isPalindrome(s.slice(idx, i + 1))) {
                    if (i - idx + 1 > longest.length) longest = s.slice(idx, i + 1);
                }
            });
            seen[s[i]].push(i);
        } else {
            seen[s[i]] = [i];
        }
        
    }
    return longest;
};