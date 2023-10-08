var titleToNumber = function (columnTitle) {
    let number = 0
    let n = columnTitle.length;
    let res = 0
    for (let i = 0; i < n; i++) {
        number = getNum(columnTitle[n - 1 - i]);
        res += Math.pow(26, i) * number;
    }
    return res;
};

const getNum = (char) => {
    let base = 'A'.charCodeAt(0) - 1;
    return char.charCodeAt(0) - base;
}