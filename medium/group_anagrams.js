// Time: O(n^2)
// Space: O(n)
var groupAnagrams = function(strs) {
    const anagrams = [];
    const used = {};
    for (let i = 0; i < strs.length; i++) {
        
        let anagramSet = [];
        if (used[strs[i]] === undefined) {
            let str1 = strs[i].split("").sort().join();
            anagramSet.push(strs[i]);
            used[strs[i]] = true;
            
            for (let j = i + 1; j < strs.length; j++) {
                let str2 = strs[j].split("").sort().join();
                if (str1 === str2) {
                    anagramSet.push(strs[j]);
                    used[strs[j]] = true;
                }
            }
        }
        if (anagramSet.length > 0) anagrams.push(anagramSet.sort());
    }
    
    return anagrams;
};