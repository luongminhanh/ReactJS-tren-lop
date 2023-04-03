import React, { useEffect, useLayoutEffect, useState } from 'react'

const LayoutEffect = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(()=>{
        if (count > 3) setCount(0);
    }, [count])
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}

export default LayoutEffect