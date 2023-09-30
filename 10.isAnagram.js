let s = "anagram", t = "nagaram";

var freq = new Array(26).fill(0);
for (var i = 0; i < s.length; i++) {

    // freq[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    // freq[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    console.log(s.charCodeAt(i) - 'a'.charCodeAt(0));

}
console.log(freq);
