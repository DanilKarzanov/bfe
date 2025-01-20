/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    // reorder items inline
    
    for (let i = 0; i < items.length; i++) {

        while (newOrder[i] != i) {
            
            let indexTo = newOrder[i]
            let tempB = newOrder[i]
            newOrder[i] = newOrder[indexTo]
            newOrder[indexTo] = tempB
        
            let tempA = items[i]
            items[i] = items[indexTo]
            items[indexTo] = tempA
        
        }
    }
    
    console.log(newOrder, items)
}

const A = ['A', 'B', 'C', 'D', 'E', 'F']
const B = [1,   5,   4,   3,   2,   0]

sort(A, B)