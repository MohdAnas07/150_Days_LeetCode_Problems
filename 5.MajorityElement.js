var majorityElement = function (nums) {
    let disc = {}
    for (let i = 0; i < nums.length; i++) {
        if (disc[nums[i]] > 0) {
            disc[nums[i]] += 1;
        } else {
            disc[nums[i]] = 1
        }
    }

    let max = -1;
    let majEle = -1
    for (let key in disc) {
        if (+disc[key] > max) {
            max = +disc[key]
            majEle = +key
        }
    }

    return majEle;
};