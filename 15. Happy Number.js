var isHappy = function (n) {

    let checkNumber = []

    while (!checkNumber.includes(n)) {
        checkNumber.push(n)
        let sum = 0;
        while (n) {
            sum += Math.pow((n % 10), 2);
            n = Math.floor(n / 10);
        }
        if (sum === 1) return true;
        n = sum;
    }
    return false;
};