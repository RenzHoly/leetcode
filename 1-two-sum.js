var twoSum = function (nums, target) {
    var temp = [];
    var i;
    for (i = 0; i < nums.length; i++) {
        temp[target - nums[i]] = i;
    }
    for (i = 0; i < nums.length; i++) {
        if (temp[nums[i]] && temp[nums[i]] != i) {
            return [i + 1, temp[nums[i]] + 1];
        }
    }
};

console.log(twoSum([1, 3, 2, 4], 6));
console.log(twoSum([3, 1, -3], 0));
