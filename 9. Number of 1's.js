var hammingWeight = function (n) {
    let total_ones = 0;
    const binary = n.toString(2)
    for (let i = 0; i < binary.length; i++)
        if (binary[i] === '1') total_ones++;

    return total_ones;
};