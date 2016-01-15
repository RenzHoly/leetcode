var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var lines = [];
    var i;
    for (i = 0; i < numRows; i++) {
        lines[i] = [];
    }
    var direction = 1;
    var j = -1;
    for (i = 0; i < s.length; i++) {
        j += direction;
        lines[j].push(s[i]);
        if (j === numRows - 1) {
            direction = -1;
        }
        if (j === 0) {
            direction = 1;
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