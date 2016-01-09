var isPalindrome = function (x) {
    var str = x.toString();
    for (var i = 0, j = str.length - 1; i++ , j--; i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
    }
    return true;
};

console.assert(isPalindrome(12321));
console.assert(!isPalindrome(12331));
console.assert(isPalindrome(123321));