import { useEffect, useRef } from "react";

export function useTimeout(callback: () => void, delay: number) {
  const cbRef = useRef(callback)
  cbRef.current = callback

  useEffect(() => {
    let tid = setTimeout(() => cbRef.current(), delay)

    return () => clearTimeout(tid)
  }, [delay])

  // your code here
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
