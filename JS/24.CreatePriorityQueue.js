
// complete the implementation
class PriorityQueue {
    /**
     * @param {(a: any, b: any) => -1 | 0 | 1} compare - 
     * compare function, similar to parameter of Array.prototype.sort
     */
    constructor(compare) {
      this.compare = compare;
      this.arr = []
    }
  
    /**
     * return {number} amount of items
     */
    size() {
      return this.arr.length
    }
  
    /**
     * returns the head element
     */
    peek() {
      let head = this.arr[0]
      for (let el of this.arr) {
        if (this.compare(head, el) > 0) {
          head = el
        }
      }
  
      return head
    }
  
    /**
     * @param {any} element - new element to add
     */
    add(element) {
      this.arr.push(element)
    }
  
    /**
     * remove the head element
     * @return {any} the head element
     */
    poll() {
      let head = this.arr[0]
      for (let el of this.arr) {
        if (this.compare(head, el) > 0) {
          head = el
        }
      }
  
      this.arr.splice(this.arr.indexOf(head), 1)
      return head
    }
}