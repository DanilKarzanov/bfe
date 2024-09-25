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
function race(funcs){
    // your code here
    return function(callback, initialData) {
        let fooDone = false
    
        for (let foo of funcs) {
            foo((error, data) => {
                if (!fooDone) {
                    callback(error, data)
                    fooDone = true
                }
            }, initialData)
        }
    }
}