let s = "A man is a Man A."
let str = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
console.log(str);
