const input = [
    { value: "abcd", order: 4, expired: false },
    { value: "qwer", order: 2, expired: true },
    { value: "xyz1", order: 1, expired: false },
    { value: "abx2", order: 3, expired: false }
]

const sortUnexpired = (input) => {
    const sorted = input.toSorted((a, b) => a.order - b.order)
    let res = ""

    sorted.forEach(el => {
        if (el.expired === false) {
            const reversed = el.value.split("").reverse().join("")
            res = res.concat(reversed)
        }
    })

    return res
}

console.log(sortUnexpired(input))

type Example = {
    f1: string
    f2: string
    f3: number
    f4: boolean
}

type Result = Example['f1' | "f2" | "f3"]