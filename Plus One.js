var plusOne = function (digits) {
    return Array.from(`${BigInt(digits.join("")) + 1n}`.split(""));
};