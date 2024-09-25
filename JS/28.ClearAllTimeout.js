/**
 * cancel all timer from window.setTimeout
 */

const timeoutIds = []
const originalTimeout = window.setTimeout

window.setTimeout = function(...args) {
    const id = originalTimeout(...args)
    timeoutIds.push(id)
    return id
}

function clearAllTimeout() {
  // your code here
    timeoutIds.forEach(id => {
        clearTimeout(id)
    })
}