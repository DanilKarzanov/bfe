// your code here, please dont use Parameters<T> in your code
type MyParameters<F extends (...args: Array<any>) => any> = F extends (...args: infer Args) => any ? Args : never