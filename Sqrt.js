
// Using Math Function
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x))
};

// Without using built-in function

var mySqrt = function (x) {
    let low = 0;
    let high = x;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let srqMid = mid * mid;
        if (srqMid <= x) low = mid + 1;
        else high = mid - 1;
    }
    return high;
};