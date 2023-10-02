var reverseBits = function (n) {
    let reverseArray = n.toString(2).split('').reverse()
    while (reverseArray.length < 32) reverseArray.push('0');
    return parseInt(reverseArray.join(''), 2);
};