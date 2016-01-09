var myAtoi = function (str) {
    var int = parseInt(str) || 0;
    if (int >= Math.pow(2, 31)) {
        return Math.pow(2, 31) - 1;
    }
    if (int < - Math.pow(2, 31)) {
        return - Math.pow(2, 31);
    }
    return int;
};

console.assert(myAtoi("-123") === -123);
console.assert(myAtoi("2147483648") === 2147483647);