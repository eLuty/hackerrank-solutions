/*
 * You are in charge of the cake for a child's birthday. You have decided the cake will have 
 * one candle for each year of their total age. They will only be able to blow out the tallest 
 * of the candles. Count how many candles are tallest.
 *  
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    const sortedCandles = candles.sort((a, b) => a - b);
    const maxHeightCandles = sortedCandles.filter((i) => i === sortedCandles[sortedCandles.length - 1]);
    
    return maxHeightCandles.length;
}