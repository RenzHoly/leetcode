var stack, result;

var p = function (candidates, target, index) {
    if (target === 0) {
        result.push(stack.slice());
        return;
    }
    for (var i = parseInt(target / candidates[index]); i >= 0; i--) {
        var j;
        for (j = 0; j < i; j++) {
            stack.push(candidates[index]);
        }
        p(candidates, target - candidates[index] * i, index + 1);
        for (j = 0; j < i; j++) {
            stack.pop();
        }
    }
};

var combinationSum = function (candidates, target) {
    stack = [];
    result = [];
    candidates.sort(function (a, b) {
        return a - b;
    });
    p(candidates, target, 0);
    return result;
};

console.log(combinationSum([1], 2));
console.log(combinationSum([1, 2, 3, 6, 7], 7));
