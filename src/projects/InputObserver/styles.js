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

const GrettingLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
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
  text-transform: capitalize;
`

const P = styled.p`
  color: ${POSSIBLES_COLORS[
    Math.floor(Math.random() * POSSIBLES_COLORS.length)
  ]};
`

export { Label, Input, GrettingLayout, H1, P }
