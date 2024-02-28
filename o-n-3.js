function multiplyMatrix(vector, multiplier) {
    const matrix = [];
    for (let i = 0; i < vector.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < vector.length; j++) {
            matrix[i][j] = [];
            for (let k = 0; k < vector.length; k++) {
                matrix[i][j][k] = vector[i] * multiplier;
            }
        }
    }

    return matrix;
}

const newMatrix = multiplyMatrix([5, 8, 7], 2);

console.log(newMatrix);