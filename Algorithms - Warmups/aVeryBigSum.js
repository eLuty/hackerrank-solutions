/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here
    const initValue = 0;
    const sum = ar.reduce((accumulator, currentVal) => accumulator + currentVal, initValue);
    return sum;
}
