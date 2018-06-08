// You're given strings J & S; 
// J represents the types of stones that are jewels 
// S represents the stones you have; each character is a stone.  
// You want to know how many of the stones you have are also jewels.

// The letters in J are distinct; all characters in J and S are letters
//  Letters are case sensitive; "a" is a different stone than "A".

// Time: O(J + S)
// Space: O(J)
var numJewelsInStones = function(J, S) {
    const jewels = {};
    for (let i = 0; i < J.length; i++) {
        jewels[J[i]] = true;
    }
    let jewelCount = 0;
    for (let i = 0; i < S.length; i++) {
        if (jewels[S[i]]) jewelCount++;
    }
    return jewelCount;
};