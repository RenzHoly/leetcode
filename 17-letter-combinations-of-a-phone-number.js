var map = {
    '0': [],
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

var stack;
var result;

var process = function (digits) {
    if (!digits) {
        if (stack.length) {
            result.push(stack.join(''));
        }
        return;
    }
    for (var i = 0; i < map[digits[0]].length; i++) {
        stack.push(map[digits[0]][i]);
        process(digits.substring(1));
        stack.pop();
    }
};

var letterCombinations = function (digits) {
    stack = [];
    result = [];
    process(digits);
    return result;
};

console.log(letterCombinations(''));
console.log(letterCombinations('23'));
console.log(letterCombinations('3'));