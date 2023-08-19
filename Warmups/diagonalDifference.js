/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;
    
    let rows = arr.length;
    let cols = arr[0].length;
    
    for(let i = 0; i < Math.min(rows, cols); i++){
        let addValue = arr[i][i];
        leftToRight = addValue + leftToRight;
    }
    
    for(let r = 0, c = cols - 1; r < rows && c >= 0; r++, c--){
        let addValue = arr[r][c];
        rightToLeft = addValue + rightToLeft;
    }
    
    const absDiff = Math.abs(leftToRight - rightToLeft);
    return absDiff;
}