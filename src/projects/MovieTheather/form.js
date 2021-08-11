import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({ movie }) => {
  const [entry, setEntrys] = useState[movie.available]

  return (
    <form>
      <h3>{movie.name}</h3>
      <button type="button" onChange={() => setEntrys(entry - 1)}>
        -
      </button>
      {entry} <button onChange={() => setEntrys(entry + 1)}>+</button>
    </form>
  )
}

Form.propTypes = {
  movie: PropTypes.object,
}

export default Form
