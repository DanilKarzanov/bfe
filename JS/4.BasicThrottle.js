// This is a JavaScript coding problem from BFE.dev 

/**
 * @param {(...args:any[]) => any} func
 * @param {number} wait
 * @returns {(...args:any[]) => any}
 */
function throttle(func, wait) {
    // your code here
    
    let shouldWait = false
    let waitingResult = null

    return function(...args) {
        if (shouldWait) {
        waitingResult = [...args]

        } else {
        func(...args)
        shouldWait = true

        setTimeout(() => {
            shouldWait = false
            if (waitingResult !== null) {
            func.apply(this, waitingResult)
            }
        }, wait)
        }
    }
}
  
// The more classic implementation (without saving throttled calls)

function classicThrottle(func, wait) {
    
    let shouldWait = false

    return function(...args) {
        if (!shouldWait) {
            func(...args)

            shouldWait = true
            setTimeout(() => {
                shouldWait = false
            }, wait)
        }
    }
}
