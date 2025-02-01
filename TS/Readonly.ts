type MyReadonly<T> = {
    +readonly [K in keyof T]: T[K]
}
// your code here, please don't use Readonly<T> in your code