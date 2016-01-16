var myPow = function (x, n) {
    if (n === -2147483648) {
        return Math.abs(x) < 1 ? 0 : 1;
    }
    var flag = n < 0;
    if (flag) {
        n = -n;
    }
    var s = [x];
    var i = 1;
    while ((1 << i) > 0 && (1 << i) <= n) {
        s[i] = s[i - 1] * s[i - 1];
        i++;
    }
    var result = 1;
    var j;
    for (j = i - 1; j >= 0; j--) {
        if (n - (1 << j) >= 0) {
            n -= 1 << j;
            result *= flag ? 1 / s[j] : s[j];
        }
    }
    return result;
};

console.log(myPow(34.00515, -3));
console.log(myPow(8.88023, 3));
console.log(myPow(0.00001, 2147483647));
console.log(myPow(-1.00000, -2147483648));