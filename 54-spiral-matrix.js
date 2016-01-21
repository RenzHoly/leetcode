function check(matrix, xx, yy) {
    return yy >= 0 && yy <= matrix.length - 1
        && xx >= 0 && xx <= matrix[0].length - 1
        && matrix[yy][xx] !== undefined;
}

var spiralOrder = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    var directions = [[-1, 0], [0, 1], [1, 0], [0, -1], [-1, 0]];
    var result = [];
    var y = 0, x = 0;
    while (true) {
        result.push(matrix[y][x]);
        for (var i = 1; i < 5; i++) {
            if (check(matrix, x + directions[i][1], y + directions[i][0])
                && !check(matrix, x + directions[i - 1][1], y + directions[i - 1][0])) {
                matrix[y][x] = undefined;
                y += directions[i][0];
                x += directions[i][1];
                break;
            }
        }
        if (i === 5) {
            break;
        }
    }
    return result;
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]));

console.log(spiralOrder([]));