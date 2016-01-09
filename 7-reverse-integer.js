var reverse = function (x) {
    var str = x.toString();
    var int;
    if (str[0] === '-') {
        int = parseInt('-' + str.substring(1).split("").reverse().join(""));
    } else {
        int = parseInt(str.split("").reverse().join(""));
    }
    if (int >= Math.pow(2, 31) || int < - Math.pow(2, 31)) {
        return 0;
    }
    return int;
};

console.assert(reverse(1563847412) === 0);
console.assert(reverse(-2147483412) === -2143847412);