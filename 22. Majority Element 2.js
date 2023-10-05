var majorityElement = function (nums) {
    const obj = {}
    for (let num of nums) {
        if (!obj[num]) {
            obj[num] = 1
        } else {
            obj[num]++;
        }
    }

    let k = Math.floor(nums.length / 3);

    let rst = []

    for (let num of nums) {
        if (obj[num] > k && !rst.includes(num)) {
            rst.push(num)
        }
    }
    return rst;
};


console.log(majorityElement([3, 2, 3]));
