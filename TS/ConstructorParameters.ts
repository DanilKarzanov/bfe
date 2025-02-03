// your code here, dont' use ConstructorParameters<T> in your code
type MyConstructorParameters<T extends new (...params: Array<any>) => any> = T extends new (...params: infer P) => any ? P : never

class Foo {
    constructor (a: string, b: number, c: boolean) {}
}

type C = MyConstructorParameters<typeof Foo> 