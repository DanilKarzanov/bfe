
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    if (promises.length === 0) {
        return new Promise((resolve, _reject) => resolve([]))
    }
  
    const results = Array(promises.length)
  
    return new Promise((resolve, _reject) => {
        promises.forEach((promise, idx) => {
            Promise.resolve(promise).then(v => {
                results[idx] = {status: "fulfilled", value: v}
                if (results.length === promises.length) {
                    resolve(results)
                }
            }).catch(reason => {
                results[idx] = {status: "rejected", reason: reason}
                if (results.length === promises.length) {
                    resolve(results)
                }
            })
        })
    })
}