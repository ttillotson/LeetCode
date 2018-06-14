// Best Time to Buy a Stock

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

const maxProfit = function(prices) {
    let min = prices[0];
    let maxP = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) min = prices[i];

        let currentDiff = prices[i] - min;
        if (currentDiff > maxP) maxP = currentDiff;
    }

    return maxP;
};

// Time: O(n)
// Space: O(1)