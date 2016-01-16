var used, stack, result;

var p = function (nums) {
    var flag = true;
    for (var i in nums) {
        flag &= used[i];
        if (!used[i]) {
            used[i] = true;
            stack.push(nums[i]);
            p(nums);
            used[i] = false;
            stack.pop();
        }
    }
    if (flag) {
        result.push(stack.slice());
    }
};

var permute = function (nums) {
    used = [];
    stack = [];
    result = [];
    p(nums);
    return result;
};

console.log(permute([1, 2, 3]));