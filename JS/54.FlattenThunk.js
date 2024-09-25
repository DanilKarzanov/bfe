
/**
 * @param {Thunk} thunk
 * @return {Thunk}
 */
function flattenThunk(thunk) {
    // your code here
  
    return function(cb) {
        const wrapper = ((error, result) => {
            if (error) {
                cb(error)
            } else if (typeof result === "function") {
                result(wrapper)
            } else cb(error, result)
        })
    
        thunk(wrapper)
    }
}