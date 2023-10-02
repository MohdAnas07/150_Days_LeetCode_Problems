var intersect = function (nums1, nums2) {

    let obj = {};
    let result = [];

    // Make a hash map of first array
    for (let num of nums1) {
        if (!obj[num]) {
            obj[num] = 1;
        } else {
            obj[num]++;
        }
    }

    // Run loop on second array and add into result array
    for (let num of nums2) {
        if (obj[num] > 0) {
            result.push(num)
            obj[num]--;
        }
    }
    return result

};