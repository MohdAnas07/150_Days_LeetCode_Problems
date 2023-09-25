var majorityElement = function (nums) {
    let map = {}
    for (let num of nums) {
        if (!map[num]) {
            map[num] = 0
        }
        map[num]++;
    }

    let max = -1;
    let majEle = -1
    for (let key in map) {
        if (+map[key] > max) {
            max = +map[key]
            majEle = +key
        }
    }

    return majEle;
};