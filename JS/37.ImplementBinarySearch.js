/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target){
    // Iterative solution
  
    let left = 0
    let right = arr.length - 1
  
    while (left <= right) {
      const middle = (right - left) / 2 + left
  
      if (arr[middle] === target) {
        return middle
      }
  
      if (target > arr[middle]) {
        left = middle + 1
      } else right = middle - 1
    }
  
    return -1
}

function binarySearch2(arr, target) {
    // Recursive solution

    const rec = (left, right) => {
        if (right < left) {
            return -1
        }

        const middle = (right - left) / 2 + left

        if (arr[middle] === target) {
            return middle
        }

        if (target < arr[middle]) {
            return rec(left, middle - 1)
        } else return rec(middle + 1, right)
    }

    return rec(0, arr.length - 1)
}