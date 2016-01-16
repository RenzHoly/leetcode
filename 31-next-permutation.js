var swap = function (nums, i, j) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};

var nextPermutation = function (nums) {
    if (nums.length === 1) {
        return;
    }
    var i, ii, j;
    for (i = nums.length - 2; i >= 0 && nums[i] >= nums[i + 1]; i--) {
    }
    ii = i + 1;
    for (j = nums.length - 1; j >= 0 && nums[i] >= nums[j]; j--) {
    }
    if (i >= 0) {
        swap(nums, i, j);
    }
    for (i = ii, j = nums.length - 1; i < j; i++, j--) {
        swap(nums, i, j);
    }
};

console.log(nextPermutation([1, 5, 1]));
console.log(nextPermutation([3, 2, 1]));
console.log(nextPermutation([1, 1]));
console.log(nextPermutation([1, 2, 4, 3]));
console.log(nextPermutation([1, 2]));
console.log(nextPermutation([1]));
