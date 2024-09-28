/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
    // your code here
    let currentRetry = 0
  
    return new Promise((resolve, reject) => {
        const fetchRec = () => {
            fetcher().then(v => {
            resolve(v)
            }).catch(reason => {
                if (currentRetry < maximumRetryCount) {
                    currentRetry++
                    fetchRec()
                } else reject(reason)
            })
        }
    
        fetchRec()
    })
}