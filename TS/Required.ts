
type MyRequired<T extends object> = {
    [K in keyof T]-?: T[K]
  }
    // your code here, please don't use Required<T> in your code