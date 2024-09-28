// fetchList is provided for you
// const fetchList = (since?: number) => 
//   Promise<{items: Array<{id: number}>}>


// you can change this to generator function if you want
const fetchListWithAmount = async (amount = 5) => {
    // your code here
    let since
    const res = []
  
    while (res.length < amount) {
        const { items } = await fetchList(since)
        if (items.length) {
            since = items.at(-1).id
            res.push(...items)
        } else break
    }
  
    return res.slice(0, amount)
}