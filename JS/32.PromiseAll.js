/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    // your code here
    if (promises.length === 0) {
      return Promise.resolve([])
    }
  
    const results = Array(promises.length)
  
    return new Promise((resolve, reject) => {
        promises.forEach((promise, id) => {
            Promise.resolve(promise).then((v) => {
                results[id] = v
                if (id === results.length - 1) {
                    resolve(results)
                }
            }).catch((reason) => {
                reject(reason)
            })
        })
    })
}