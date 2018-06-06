// Time: O(str + rows)
// Space: O(str)
var convert = function(str, numRows) {
    // Return early if possible
    if (numRows === 1 || numRows >= str.length) return str;

    // Create our storage arrays
    let zigArr = [];
    while (zigArr.length < numRows) {
        zigArr.push([]);
    }
    let idx = 0;
    let increment = 1;
    for (let i = 0; i < str.length; i++) {
        // Push into appropriate slot
        zigArr[idx] += str[i];
        // Adjust increment appropriately
        if (idx === 0) increment = 1;
        if (idx === numRows - 1) increment = -1;
        idx += increment;
    }

    return zigArr.map.join('');
};

// Strategy is to create an array that will keep our custom sort and push into the correct 
// one as we work our way through the argument string
// We need to start moving the other way once we hit (numRows - 1) index and reset back at 0
