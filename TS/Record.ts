//please don't use Record<K, V> in your code
type MyRecord<Keys extends string | number | symbol , V> = {
    [Key in Keys]: V
}
  
type MyRes = MyRecord<string, boolean>
type Res = Record<string, boolean>
  
type MyRes2 = MyRecord<keyof any, boolean>
type Res2 = Record<keyof any, boolean>