var multiply = function (num1, num2) {
    var s1 = num1.split('').reverse();
    var s2 = num2.split('').reverse();
    var result = [];
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            result[i + j + 1] = result[i + j + 1] || 0;
            result[i + j + 1] += parseInt((s1[i] * s2[j]) / 10);
            result[i + j] = result[i + j] || 0;
            result[i + j] += parseInt((s1[i] * s2[j]) % 10);
        }
    }
    for (var k = 0; k < s1.length + s2.length - 1; k++) {
        result[k + 1] += parseInt(result[k] / 10);
        result[k] %= 10;
    }
    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }
    return result.reverse().join('');
};

console.log(multiply('123', '456'));
console.log(multiply('0', '456'));