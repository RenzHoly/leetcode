var threeSumClosest = function (nums, target) {
    var diff = 1 << 30;
    var result;
    nums.sort(function (a, b) {
        return a - b;
    });
    for (var i = 0; i < nums.length; i++) {
        var twoClosest = twoSumClosest(nums.slice(i + 1, nums.length), target - nums[i]);
        if (Math.abs(nums[i] + twoClosest - target) < diff) {
            diff = Math.abs(nums[i] + twoClosest - target);
            result = nums[i] + twoClosest;
        }
    }
    return result;
};

var twoSumClosest = function (nums, target) {
    var diff = 1 << 30;
    var result;
    for (var i = 0, j = nums.length - 1; i < j;) {
        if (Math.abs(nums[i] + nums[j] - target) < diff) {
            diff = Math.abs(nums[i] + nums[j] - target);
            result = nums[i] + nums[j];
        }
        if (nums[i] + nums[j] > target) {
            j--;
        } else {
            i++;
        }
    }
    return result;
};

console.assert(2 === threeSumClosest([-1, 2, 1, -4], 1));
console.assert(1 === threeSumClosest([1, 1, -1], 0));
console.assert(0 === threeSumClosest([0, 0, 0], 1));
