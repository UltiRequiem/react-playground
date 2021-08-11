import React, { useState } from 'react'

import Button from './styles'

function App() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <h1> Total count: {count}</h1>
      <p> Click the buttons to change the state!</p>
      <Button onClick={() => setCount(count + 1)}>Increment One</Button>
      <Button onClick={() => setCount(count - 1)}>Decrease One</Button>
    </div>
  )
}

export default App
