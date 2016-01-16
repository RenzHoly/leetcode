var find = function (left, right, nums, target) {
    if (left > right) {
        return -1;
    }
    if (nums[(left + right) >> 1] < target) {
        return find(((right + left) >> 1) + 1, right, nums, target);
    }
    if (nums[(left + right) >> 1] > target) {
        return find(left, ((left + right) >> 1) - 1, nums, target);
    }
    if (nums[(left + right) >> 1] === target) {
        return (left + right) >> 1;
    }
};

var searchRange = function (nums, target) {
    var index = find(0, nums.length - 1, nums, target);
    var left = index, right = index;
    if (index < 0) {
        return [-1, -1];
    }
    while (nums[index] === nums[left]) {
        left--;
    }
    while (nums[index] === nums[right]) {
        right++;
    }
    return [left + 1, right - 1];
};

console.log(searchRange([1, 4], 4));
console.log(searchRange([1], 0));
console.log(searchRange([1], 1));
console.log(searchRange([5, 7, 7, 8, 8, 10], 9));
console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
