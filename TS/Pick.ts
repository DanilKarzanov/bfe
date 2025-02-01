// your code here, don't use Pick<T,K> in your code.
type MyPick<T extends object, K extends keyof T> = {
    [Key in keyof T as Key extends K ? Key : never]: T[Key]
}

