var moveZeroes = function (nums) {
    let n = nums.length;
    let i = 0
    while (n) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0);
        } else {
            i++;
        }
        n--;
    }
};