import { useEffect, useRef, useState } from "react";

export function useIsFirstRender(): boolean {
  // your code here
  const ref = useRef<null | number>(null)

  useEffect(() => {
    if (!ref.current) {
      ref.current = 1
    }
  }, [])

  return ref.current === null
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
