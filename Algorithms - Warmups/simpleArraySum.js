/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar) {
    const initialValue = 0;
    const sum = ar.reduce((accumulator, currentVal) => accumulator + currentVal, initialValue);
    return sum;
}