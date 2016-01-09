var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var lines = [];
    var i;
    for (i = 0; i < numRows; i++) {
        lines[i] = [];
    }
    var direct = 1;
    var j = -1;
    for (i = 0; i < s.length; i++) {
        j += direct;
        lines[j].push(s[i]);
        if (j === numRows - 1) {
            direct = -1;
        }
        if (j === 0) {
            direct = 1;
        }
    }
    var result = [];
    for (i = 0; i < numRows; i++) {
        result[i] = lines[i].join('');
    }
    return result.join('');
};

console.log(convert('ABC', 1));
console.log(convert('PAYPALISHIRING', 3));