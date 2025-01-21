/**
 * @param {number[]} arr
 */
function insertionSort(arr) {
  
    for (let i = 1; i < arr.length; i++) {
        let el = arr[i]
        let j = i - 1
    
        while (j >= 0 && arr[j] > el) {
            arr[j + 1] = arr[j]
            j--
        }
    
        arr[j + 1] = el
    }
  
}