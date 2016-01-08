var twoSum = function (nums, target) {
    var temp = {};
    var index;
    for (index = 0; index < nums.length; index++) {
        temp[target - nums[index]] = index;
    }
    for (index = 0; index < nums.length; index++) {
        if (temp[nums[index]]) {
            return [index + 1, temp[nums[index]] + 1];
        }
    }
};

console.log(twoSum([3, 2, 4], 6));
