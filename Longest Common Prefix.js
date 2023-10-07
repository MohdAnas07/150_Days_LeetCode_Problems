var longestCommonPrefix = function (strs) {
    let commonPrefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        // Checking every str common prefix and adding into commonPrefix Str 
        if (strs.every(str => str[i] === strs[0][i])) commonPrefix += strs[0][i];
        else break; //Else breaking the loop
    }
    return commonPrefix;
};