var find = function (left, right, nums, target) {
    if (left > right) {
        return right + 1;
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

var searchInsert = function (nums, target) {
    return find(0, nums.length - 1, nums, target);
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));