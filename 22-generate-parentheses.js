var calc = function (m, n) {
    if (m === 0) {
        result.push(stack.join(''));
        return;
    }
    if (n < m) {
        stack.push('(');
        calc(m - 1, n + 1);
        stack.pop();
    }
    if (n - 1 >= 0) {
        stack.push(')');
        calc(m - 1, n - 1);
        stack.pop();
    }
};

var stack, result;

var generateParenthesis = function (n) {
    stack = [];
    result = [];
    calc(n * 2, 0);
    return result;
};

console.log(generateParenthesis(4));
console.log(generateParenthesis(3));
console.log(generateParenthesis(2));