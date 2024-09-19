/**
 * @param {integer} from
 * @param {integer} to
 */
function range(from, to) {
    // your code here
    let obj = {}
    let counter = from
  
    // custom symbol terator property to be used in for-of
    obj[Symbol.iterator] = function* () {
      while(counter <= to) {
        yield counter++
      }
    }
  
    return obj
}