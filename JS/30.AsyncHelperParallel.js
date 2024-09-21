/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function parallel(funcs){
    // your code here
    return function(cb) {
        const results = []
        let errorHappened = false

        funcs.forEach(foo => {
            foo((error, data) => {
                // console.log(error, data)

                if (errorHappened) return

                if (error) {
                    errorHappened = true
                    cb(error, undefined)
                    return
                }

                results.push(data)
                if (results.length === funcs.length) {
                    cb(undefined, results)
                }
            })
        })
    }
}

const async1 = (callback) => {
    callback(undefined, 1)
}
 
const async2 = (callback) => {
    callback(undefined, 2)
}

const async3 = (callback) => {
    callback("very bad error", 3)
}

const all = parallel([async1, async2, async3])

all((error, data) => {
    console.log(error)
    console.log(data)
}, 1)