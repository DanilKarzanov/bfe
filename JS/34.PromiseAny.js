/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
    // your code here
    let errors = []
    
    return new Promise((resolve, reject) => {
      
        promises.forEach((promise, id) => {
            promise.then(v => {
                resolve(v)
            }).catch(reason => {
                errors[id] = reason
                if (errors.length === promises.length) {
                    reject(new AggregateError('No Promise in Promise.any was resolved', errors))
                }
            })
        })
    })
}