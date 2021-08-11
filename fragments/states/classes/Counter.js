import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(1)

  const buttonStyles = {
    color: 'green',
    margin: '5px',
  }

  return (
    <div>
      <h1> Total count: {count}</h1>
      <p> Click the buttons to change the state!</p>
      <button style={buttonStyles} onClick={() => setCount(count + 1)}>
        Increment One
      </button>
      <button style={buttonStyles} onClick={() => setCount(count - 1)}>
        Decrease One
      </button>
    </div>
  )
}

export default App
