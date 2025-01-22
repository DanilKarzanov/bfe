// This is a JavaScript coding problem from BFE.dev 

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
    // your code here

    const arrayForPlaceholdedArgs = []
    const argsNoPlaceholders = []

    return function curried(...args) {
        args.forEach(arg => {
            if (typeof arg === "symbol") {
                arrayForPlaceholdedArgs.push(arg)
            } else {
                
            }
        })

        if (argsNoPlaceholders.length === fn.length) {
            return fn.apply(this, argsNoPlaceholders)
        }




    }

    
}

curry.placeholder = Symbol()

const  join = (a, b, c) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

curriedJoin(1, 2, 3) // '1_2_3'
curriedJoin(_, 2)(1, 3) // '1_2_3'
curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'