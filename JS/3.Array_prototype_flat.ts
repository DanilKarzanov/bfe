const arr = [1, [2], [3, [4]]];
console.log(flat(arr))
// [1, 2, 3, [4]]
console.log(flat(arr, 1))
// [1, 2, 3, [4]]
console.log(flat(arr, 2))
// [1, 2, 3, 4]

function flat(arr: Array<number | Array<any>>, depth: number = 1): Array<number | Array<number>> {
    const res: Array<number | Array<number>> = []

    for (let el of arr) {
        if (Array.isArray(el) && depth > 0) {
            res.push(...flat(el, depth - 1))
        } else {
            res.push(el)
        }
    }

    return res
}