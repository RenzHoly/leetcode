var maxSubArray = function (nums) {
    var a = [nums[0]];
    var max = a[0];
    for (var i = 1; i < nums.length; i++) {
        a[i] = a[i - 1] > 0 ? a[i - 1] + nums[i] : nums[i];
        max = a[i] > max ? a[i] : max;
    }
    return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));