var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    if (strs.length === 1) {
        return strs[0];
    }
    for (var i = 0; ; i++) {
        for (var j = 1; j < strs.length; j++) {
            if (!strs[j][i] || strs[j][i] !== strs[j - 1][i]) {
                return strs[0].substring(0, i);
            }
        }
    }
};

console.assert("" === longestCommonPrefix([]));
console.assert("" === longestCommonPrefix(["", ""]));
console.assert("a" === longestCommonPrefix(["a", "ab"]));