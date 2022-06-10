import React, { useState } from 'react'

const UseState = () => {
const [count, setCount] = useState(0)

  return (
    <div> 
      <h2>{count}</h2>
      <button>Click</button>
    </div>
  )
}

export default UseState