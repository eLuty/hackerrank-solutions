/*
 * Given five positive integers, find the minimum and maximum values that can be calculated by
 * summing exactly four of the five integers. Then print the respective minimum and maximum values
 * as a single line of two space-separated long integers.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const minArray = sortedArr.slice(0, arr.length - 1);
    const maxArray = sortedArr.slice(1);
    
    const minSum = minArray.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    const maxSum = maxArray.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    
    console.log(minSum + " " + maxSum);
}