// please modify code below to make it work for large number like `fib(1000)`
// recursion should still be used
const memo = new Map()

function fib(n){

  if (n === 0) return 0
  if (n === 1) return 1

  if (memo.has(n)) {
    return memo.get(n)
  }

  memo.set(n, fib(n - 1) + fib(n - 2))
  return memo.get(n)
}