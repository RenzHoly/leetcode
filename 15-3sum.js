var sortNumber = function (a, b) {
    return a - b;
};

var sortTriplets = function (a, b) {
    for (var i = 0; i < 3; i++) {
        if (a[i] - b[i] !== 0) {
            return a[i] - b[i];
        }
    }
    return 0;
};

var unique = function (triplets) {
    triplets.sort(sortTriplets);
    var i = 1;
    while (i < triplets.length) {
        if (triplets[i][0] === triplets[i - 1][0] &&
            triplets[i][1] === triplets[i - 1][1] &&
            triplets[i][2] === triplets[i - 1][2]) {
            triplets.splice(i, 1);
        } else {
            i++;
        }
    }
    return triplets;
};

var threeSum = function (nums) {
    var result = [];
    nums.sort(sortNumber);
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break;
        }
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] > 0) {
                break;
            }
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] > 0) {
                    break;
                }
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return unique(result);
};

console.assert(2 === threeSum([-1, 0, 1, 2, -1, -4]).length);
console.assert(6 === threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]).length);