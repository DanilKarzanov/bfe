const join = (a: number, b: number, c: number) => {
    return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'


// This is a JavaScript coding problem from BFE.dev 
function curry(fn) {
    // your code here




}