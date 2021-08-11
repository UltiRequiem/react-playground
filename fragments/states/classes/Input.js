import React, { useState } from 'react'

import styled from 'styled-components'

const POSSIBLES_COLORS = ['orange', 'green', 'blue', 'red']

const Label = styled.label`
  display: block;
  font: 1rem 'Fira Sans', sans-serif;
  margin: 0.4rem 0;
  color: ${POSSIBLES_COLORS[
    Math.floor(Math.random() * POSSIBLES_COLORS.length)
  ]};
`

const Input = styled.input`
  margin: 0.4rem 0;
  color: ${POSSIBLES_COLORS[
    Math.floor(Math.random() * POSSIBLES_COLORS.length)
  ]};
`

const H1 = styled.h1`
  color: ${POSSIBLES_COLORS[
    Math.floor(Math.random() * POSSIBLES_COLORS.length)
  ]};
`

const P = styled.p`
  color: ${POSSIBLES_COLORS[
    Math.floor(Math.random() * POSSIBLES_COLORS.length)
  ]};
`

const App = () => {
  const defaultUserName = 'User'
  const [name, setName] = useState(defaultUserName)

  return (
    <>
      <H1>Hello, {name}!</H1>

      <form>
        <Label htmlFor="name">Input your name:</Label>
        <Input
          type="text"
          id="name"
          onChange={(event) => setName(event.currentTarget.value)}
        />
      </form>

      {name !== defaultUserName ? <P>Thanks for fill out the survey!</P> : null}
    </>
  )
}

export default App
