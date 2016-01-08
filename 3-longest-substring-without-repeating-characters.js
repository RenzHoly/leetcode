lengthOfLongestSubstring = function (s) {
    var longest = 0;
    var left = -1;
    var location = {};
    for (var right = 0; right < s.length; right++) {
        if (location[s[right]] > left) {
            left = location[s[right]];
        }
        location[s[right]] = right;
        if (longest < right - left)
            longest = right - left;
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
