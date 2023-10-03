/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let houseApples = 0;
    let houseOranges = 0;
    
    for(let i = 0; i < apples.length; i++){
        const d = a + apples[i];
        if(d >= s && d <= t)
            houseApples++;
    }
    
    for(let n = 0; n < oranges.length; n++){
        const d = b + oranges[n];
        if(d >= s && d <= t)
            houseOranges++;
    }
    
    console.log(houseApples);
    console.log(houseOranges);
}