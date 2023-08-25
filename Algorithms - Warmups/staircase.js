/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    const space = ' ';
    const char = '#';
    
    for(let i = 1; i <= n; i++){
        const spaceCount = n - i;
        const charCount = i;
        
        console.log(space.repeat(spaceCount) + char.repeat(charCount));
    }
}