var isValid = function (str) {
    let stack = []
    for (let s of str) {
        if (s === '(' || s === '[' || s === '{') stack.push(s)
        else {
            let popChar = stack.pop();
            if ((s === ')' && popChar !== '(') || (s === ']' && popChar !== '[') || (s === '}' && popChar !== '{')) return false;
        }
    }

    if (stack.length > 0) return false;
    return true;
};