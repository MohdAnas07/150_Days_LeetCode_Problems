
// Time Complexity: O(n);
var isPowerOfThree = function (n) {
    if (n < 1) return false;

    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};


// Time Complexity: O(1); without a loop
var isPowerOfThree = function (n) {
    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10;
};