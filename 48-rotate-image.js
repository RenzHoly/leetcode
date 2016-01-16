var swap = function (matrix, x1, y1, x2, y2) {
    var temp = matrix[x1][y1];
    matrix[x1][y1] = matrix[x2][y2];
    matrix[x2][y2] = temp;
};

var rotate = function (matrix) {
    for (var i = 0; i < matrix.length; i++) {
        for (var j = i; j < matrix[0].length; j++) {
            swap(matrix, i, j, j, i);
        }
    }
    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[0].length >> 1; j++) {
            swap(matrix, i, j, i, matrix[0].length - j - 1);
        }
    }
    return matrix;
};

console.log(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));