/**
 * @param {() => Promise<any>} func
 * @param {number} max
 * @return {Promise}
 */
function throttlePromises(funcs, max){
    // your code here
    let currentPending = 0
    const resultsArr = []
    const queue = [...funcs]

    return new Promise((resolve, reject) => {
        const recursive = () => {
            while (queue.length > 0 && currentPending < max) {
                const foo = queue.shift()
                currentPending++
                foo().then(v => {
                    resultsArr.push(v)
                    currentPending--
                    recursive()
                }).catch(reason => reject(reason))
            }

            if (resultsArr.length === funcs.length) resolve(resultsArr)
        }

        recursive()
    })  
}