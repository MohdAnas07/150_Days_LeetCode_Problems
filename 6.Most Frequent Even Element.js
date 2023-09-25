var mostFrequentEven = function (nums) {
    let map = {}
    for (let num of nums) {
        if (num % 2 === 0 && !map[num]) {
            map[num] = 1
        } else {
            map[num]++;
        }
    }

    let max = -1;
    let mostFreEvenEle = -1
    for (let key in map) {
        if (+map[key] > max) {
            max = +map[key]
            mostFreEvenEle = +key
        }
    }

    return mostFreEvenEle;
};