import React from 'react'

import Form from './form'

const MOVIES = [
  { name: 'Avengers 5', available: 4, key: 1 },
  { name: 'Terminator 5', available: 2, key: 2 },
  { name: 'Remiheseut 3', available: 2, key: 3 },
  { name: 'Remiheseut 8', available: 2, key: 4 },
]

const App = () => (
  <>
    <h2> Movies</h2>
    {MOVIES.map((movie) => (
      <Form movie={movie} key={movie.key} />
    ))}
  </>
)

export default App
