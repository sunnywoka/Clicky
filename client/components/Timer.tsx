import { useRef, useEffect, useState } from 'react'

function Timer() {
  const [num, setNum] = useState(60)
  const intervalRef = useRef()

  const decreaseNum = () => setNum((prev) => prev - 1)

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <div>
      <h2>{num}</h2>
    </div>
  )
}

export default Timer
