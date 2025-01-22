/**
 * @param {number} n - non-negative integer
 * @return {number}
 */
function fib(n) {
    // your code here
    const dp = [0, 1]
    // dp.push(0)
    // dp.push(1)
  
    function callRec(n) {
        if (dp[n - 1] !== undefined) {
            dp[n] = dp[n - 2] + dp[n - 1]
    
            return dp[n]
        }
    
        return callRec(n - 2) + callRec(n - 1)
    }
  
    callRec(n - 1)
}
  