lengthOfLongestSubstring = function (s) {
    var longest = 0;
    var left = -1;
    var location = {};
    for (var i = 0; i < s.length; i++) {
        if (location[s[i]] > left) {
            left = location[s[i]];
        }
        location[s[i]] = i;
        if (longest < i - left)
            longest = i - left;
    }
    return longest;
};

console.assert(95 == lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ abcdefghijklmnopqrstuvwxyzABCD"));
console.assert(4 == lengthOfLongestSubstring("abcabcdbb"));
console.assert(3 == lengthOfLongestSubstring("abcabcbb"));
console.assert(1 == lengthOfLongestSubstring("ddddd"));
console.assert(1 == lengthOfLongestSubstring("c"));
console.assert(0 == lengthOfLongestSubstring(""));
console.assert(3 == lengthOfLongestSubstring("dvdf"));
console.assert(6 == lengthOfLongestSubstring("asjrgapa"));
console.assert(12 == lengthOfLongestSubstring("qtjtwnptboilwwpkahiflbtfbupaobieutxsiollcuyaqoltxvaiwtnzqfaegkicghuovfazb"));
