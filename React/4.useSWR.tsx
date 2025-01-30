import { useEffect, useState } from "react";

export function useSWR<T = any, E = any>(_key: string, fetcher: () => T | Promise<T>): { data?: T, error?: E } {
  // your code here
  const [data, setData] = useState<T>()
  const [error, setError] = useState<E>()
  const res = fetcher()

  useEffect(() => {    
    if (res instanceof Promise) {
      res.then(v => setData(v)).catch(r => setError(r))
    }
    
  }, [fetcher])

  return { data: res instanceof Promise ? data : res, error }
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }

