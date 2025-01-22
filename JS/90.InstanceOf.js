/**
 * @param {any} obj
 * @param {target} target
 * @return {boolean}
 */
function myInstanceOf(obj, target) {
    // your code here
    if (!obj || typeof obj !== "object") {
        return false
    }
    
    if (!target.prototype) throw new Error()
    
    let currentPrototype = Object.getPrototypeOf(obj)
    while (currentPrototype !== null) {
        if (currentPrototype === target.prototype) {
            return true
        }

        currentPrototype = Object.getPrototypeOf(currentPrototype)
    }

    return false
}

class A {}
class B extends A {}
const b = new B()
console.log(myInstanceOf(b, B)) // true
console.log(myInstanceOf(b, A)) // true
console.log(myInstanceOf(b, Object)) // true
function C() {}
console.log(myInstanceOf(b, C)) // false
C.prototype = B.prototype
console.log(myInstanceOf(b, C)) // true
C.prototype = {}
console.log(myInstanceOf(b, C)) // false

