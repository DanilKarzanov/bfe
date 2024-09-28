/**
 * @param {object} obj
 * @param {string} methodName
 */
function spyOn(obj, methodName) {
    // your code here
    const callsArray = []
  
    obj[methodName] = new Proxy(obj[methodName], {
        apply: function(target, thisArg, args) {
            console.log("apply trap")
            callsArray.push(args)
            target.apply(thisArg, args)
        }
    })
  
    return {
      calls: callsArray
    }
}

const obj = {
    data: 1, 
    increment(num) {
       this.data += num
    }
}

const spy = spyOn(obj, 'increment')
obj.increment(1)
console.log(obj.data) // 2
obj.increment(2)
console.log(obj.data) // 4
console.log(spy.calls)