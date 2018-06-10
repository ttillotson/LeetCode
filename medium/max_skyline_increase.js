// In a 2 dimensional array grid, each value (grid[i][j]) represents the height of a building located there. 
// We can increase the height of any building, by any amount (the amounts can vary by building). 
// Height 0 is a building as well. 

// At the end, the "skyline" when viewed from all four directions of the grid, 
// i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. 
// A city's skyline is the outer contour of the rectangles formed by
// all the buildings when viewed from a distance. See the following example.

// What is the maximum total sum that the height of the buildings can be increased?

// EXAMPLE Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation: 
// The grid is:
// [ [3, 0, 8, 4], 
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]

// INCOMPLETE

var maxIncreaseKeepingSkyline = function(grid) {
    // iterate through grid's cols and collect max for each 
    // iterate through grid's rows and collext max and compare 
    const cols = {};
    const rows = {};
    const newGrid = new Array(grid.length);
    for (let i = 0; i < grid.length; i++) {
        newGrid[i] = new Array;
    }

    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] > cols[i]) cols[i] = grid[j][i];
            if (grid[i][j] > rows[j]) rows[j] = grid[j][i];
        }
    }
};