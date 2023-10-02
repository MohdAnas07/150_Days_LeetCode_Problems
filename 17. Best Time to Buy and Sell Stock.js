var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let sell = 1; sell < prices.length; sell++) {
        let sellingPrice = prices[sell];
        let profit = sellingPrice - minPrice;
        maxProfit = Math.max(maxProfit, profit);
        if (sellingPrice < minPrice) minPrice = sellingPrice;
    }
    return maxProfit;
};