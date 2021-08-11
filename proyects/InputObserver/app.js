import React, { useState } from 'react'

import { Label, Input, GrettingLayout, H1, P } from './styles'

const App = () => {
  const [name, setName] = useState(null)

  return (
    <>
      <H1>Hello{name ? ` ${name}` : ''}!</H1>

      <form>
        <GrettingLayout>
          <Label htmlFor="name">Input your name:</Label>
          <Input
            type="text"
            id="name"
            onChange={(event) => setName(event.currentTarget.value)}
          />
        </GrettingLayout>
      </form>

      {name && <P>Thanks for fill out the survey!</P>}
    </>
  )
}

export default App


