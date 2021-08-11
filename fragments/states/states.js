import React, { useState } from 'react'

function Example() {
  const [count, setCount] = useState(1)

  const styles = {
    color: 'green',
    margin: '5px',
  }

  return (
    <div>
      <h1> Total count: {count}</h1>
      <p> Click the buttons to change the state!</p>
      <button style={styles} onClick={() => setCount(count + 1)}>
        Increment One
      </button>
      <button style={styles} onClick={() => setCount(count - 1)}>
        Decrease One
      </button>
    </div>
  )
}

export default Example
