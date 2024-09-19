/**
 * @param {number} num
 */
function sum(num) {
    // your code here
    const foo = (num1) => {
      return sum(num + num1)
    }
  
    foo.valueOf = () => num
    return foo
}