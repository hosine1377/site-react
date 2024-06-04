import { useState } from 'react'

interface Icounter {
  startCount?: number
}
function Counter(props: Icounter) {
  const { startCount = 10 } = props
  const [count, setCount] = useState(startCount)

  const handelPlas = () => {
    setCount(count + 1)
  }
  const handelMines = () => {
    setCount(count - 1)
  }
  return (
    <div>
      <button onClick={handelPlas}>+</button>
      <span>{count}</span>
      <button onClick={handelMines}>-</button>
    </div>
  )
}

export default Counter
