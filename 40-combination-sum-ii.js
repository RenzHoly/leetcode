var stack, result, a;

var p = function (candidates, target, index) {
    if (target === 0) {
        result.push(stack.slice());
        return;
    }
    for (var i = a[candidates[index]]; i >= 0; i--) {
        if (target - candidates[index] * i >= 0) {
            var j;
            for (j = 0; j < i; j++) {
                stack.push(candidates[index]);
            }
            while (candidates[index] === candidates[index + 1]) {
                index++;
            }
            p(candidates, target - candidates[index] * i, index + 1);
            for (j = 0; j < i; j++) {
                stack.pop();
            }
        }
    }
};

var combinationSum2 = function (candidates, target) {
    a = [];
    stack = [];
    result = [];
    candidates.sort(function (a, b) {
        return a - b;
    });
    for (var i in candidates) {
        a[candidates[i]] = a[candidates[i]] ? a[candidates[i]] + 1 : 1;
    }
    p(candidates, target, 0);
    return result;
};

console.log(combinationSum2([1], 2));
console.log(combinationSum2([1, 2], 2));
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([1, 5, 2, 3, 1, 5, 1, 2, 4, 1, 4], 3));
