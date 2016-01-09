var min = function (a, b) {
    return a < b ? a : b;
};

var maxArea = function (height) {
    var max = 0;
    for (var i = 0, j = height.length - 1; i < j;) {
        var area = min(height[i], height[j]) * (j - i);
        if (max < area) {
            max = area;
        }
        height[i] < height[j] ? i++ : j--;
    }
    return max;
};

console.assert(1 === maxArea([1, 1]));
console.assert(4 === maxArea([2, 1, 3]));